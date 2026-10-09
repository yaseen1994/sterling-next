import Image from "next/image";
import styles from "./shell.module.css";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="/" aria-label="Sterling & Wilson Data Center home" className={styles.logo}>
      <Image src={inverse ? "/assets/images/SWDC-a3a828.png" : "/assets/images/SWDC-cd7cd5.jpg"}
        alt="Sterling & Wilson Data Center" width={inverse ? 826 : 450} height={inverse ? 189 : 103}
        sizes={inverse ? "210px" : "186px"} loading={inverse ? "lazy" : "eager"} />
    </a>
  );
}
