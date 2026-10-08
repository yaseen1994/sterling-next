"use client";

import { useState } from "react";
import { Button, LinkButton } from "@/components/ui/button";

export function DemoControls() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <Button
          aria-expanded={open}
          aria-controls="sample-panel"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide sample" : "Show sample"}
        </Button>
        <LinkButton href="#inverse">View inverse surface</LinkButton>
        <Button disabled>Disabled sample</Button>
      </div>
      <p id="sample-panel" hidden={!open} className="mt-6 text-site-body">
        Local demonstration only. This button changes page state; the adjacent
        link navigates to a section.
      </p>
    </>
  );
}
