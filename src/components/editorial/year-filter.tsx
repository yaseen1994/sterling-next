"use client";

import { useId, useState } from "react";
import type { NewsItem } from "@/content/editorial";
import styles from "./editorial.module.css";

export function YearFilter({
  label,
  years,
  items,
}: {
  label: string;
  years: readonly string[];
  items: readonly NewsItem[];
}) {
  const selectId = useId();
  const [year, setYear] = useState(years[0] ?? "");
  const visible = items.filter((item) => item.year === year);

  return (
    <div>
      <div className={styles.yearRow}>
        <label htmlFor={selectId}>{label} year</label>
        <select id={selectId} value={year} onChange={(event) => setYear(event.target.value)}>
          {years.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <ul className={styles.newsList}>
        {visible.map((item) => (
          <li key={`${item.date}-${item.href}`}>
            <p className={styles.newsDate}>{item.date}</p>
            <h2>{item.title}</h2>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              Read More
              <span className="sr-only">, {item.title} (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
