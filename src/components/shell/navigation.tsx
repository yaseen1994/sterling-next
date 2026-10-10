"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navigation } from "@/content/navigation";
import styles from "./shell.module.css";

export function Navigation() {
  const pathname = usePathname();
  const [panel, setPanel] = useState<"tablet" | "mobile" | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [menuPath, setMenuPath] = useState(pathname);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const hoverOpened = useRef<string | null>(null);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setPanel(null);
    setExpanded(null);
  }

  function closePanel() {
    setPanel(null);
    setExpanded(null);
    trigger.current?.focus();
  }

  function dismissMenus() {
    setPanel(null);
    setExpanded(null);
  }

  useEffect(() => {
    const node = dialog.current;
    if (panel !== "mobile" || !node) return;
    node.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      node.close();
      document.body.style.overflow = overflow;
    };
  }, [panel]);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) {
        if (root.current?.contains(document.activeElement)) {
          if (window.matchMedia("(max-width: 1024px)").matches) trigger.current?.focus();
          else root.current.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')?.focus();
        }
        setExpanded(null);
        setPanel(null);
      }
    };
    const resetAtBreakpoint = () => {
      const hadFocus = root.current?.contains(document.activeElement);
      setPanel(null);
      setExpanded(null);
      if (hadFocus) {
        if (window.matchMedia("(max-width: 1024px)").matches) trigger.current?.focus();
        else root.current?.querySelector<HTMLAnchorElement>("nav a")?.focus();
      }
    };
    const mobile = window.matchMedia("(max-width: 767px)");
    const compact = window.matchMedia("(max-width: 1024px)");
    mobile.addEventListener("change", resetAtBreakpoint);
    compact.addEventListener("change", resetAtBreakpoint);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      mobile.removeEventListener("change", resetAtBreakpoint);
      compact.removeEventListener("change", resetAtBreakpoint);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, []);

  function menu(id: string) {
    return (
      <nav aria-label="Primary" className={styles.navigation}>
        <ul className={styles.menu}>
          {navigation.map((item, index) => {
            const open = expanded === item.label;
            const controls = `${id}-submenu-${index}`;
            return (
              <li key={item.label} className={styles.menuItem}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse" && window.matchMedia("(min-width: 1025px)").matches) {
                    hoverOpened.current = item.children && !open ? item.label : null;
                    setExpanded(item.children ? item.label : null);
                  }
                }}
                onPointerLeave={(event) => {
                  if (window.matchMedia("(min-width: 1025px)").matches && !event.currentTarget.contains(document.activeElement)) setExpanded(null);
                }}
                onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded((value) => value === item.label ? null : value); }}
                onKeyDown={(event) => {
                  if (event.key === "Escape" && open) {
                    event.preventDefault();
                    event.stopPropagation();
                    setExpanded(null);
                    event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus();
                  }
                }}>
                <div className={styles.menuRow}>
                  {item.href && <Link href={item.href} aria-current={pathname === item.href || `${pathname}/` === item.href ? "page" : undefined} onClick={dismissMenus}>{item.label}</Link>}
                  {item.children && <button type="button" aria-label={item.href ? `${item.label} submenu` : undefined} aria-expanded={open} aria-controls={controls}
                    className={item.href ? styles.submenuToggle : styles.groupToggle}
                    onClick={(event) => {
                      // A pointer arriving on the trigger already opens on hover.
                      const justHovered = event.detail > 0 && hoverOpened.current === item.label;
                      hoverOpened.current = null;
                      setExpanded(open && !justHovered ? null : item.label);
                    }}>
                    {!item.href && item.label}<span aria-hidden="true" className={styles.indicator}>+</span>
                  </button>}
                </div>
                {item.children && <ul id={controls} className={styles.submenu} hidden={!open}>
                  {item.children.map((link) => <li key={link.href}><Link href={link.href} onClick={dismissMenus}>{link.label}</Link></li>)}
                </ul>}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <div ref={root} className={styles.navigationRoot} onKeyDown={(event) => {
      if (event.key === "Escape" && panel) { event.preventDefault(); closePanel(); }
    }}>
      <button ref={trigger} type="button" className={styles.menuToggle} aria-label={panel ? "Close menu" : "Open menu"}
        aria-expanded={panel !== null} aria-controls="compact-navigation mobile-navigation"
        onClick={() => { if (panel) closePanel(); else setPanel(window.matchMedia("(max-width: 767px)").matches ? "mobile" : "tablet"); }}>
        <span className={styles.hamburger} aria-hidden="true">{panel ? "×" : "☰"}</span>
        <Image className={styles.dots} src="/assets/images/mobile-menu1-e3a366.webp" width={33} height={32} alt="" />
      </button>
      <div id="compact-navigation" className={`${styles.desktopNavigation} ${panel === "tablet" ? styles.tabletOpen : ""}`}>{menu("inline")}</div>
      <dialog ref={dialog} id="mobile-navigation" className={styles.mobilePanel} aria-label="Website navigation"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter((element) => element.getClientRects().length > 0);
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }}
        onCancel={(event) => { event.preventDefault(); closePanel(); }}
        onClick={(event) => { if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closePanel();
        } }}>
        <button type="button" className={styles.close} aria-label="Close menu" onClick={closePanel}>×</button>
        {menu("mobile")}
      </dialog>
    </div>
  );
}
