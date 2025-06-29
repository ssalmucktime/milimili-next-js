"use client";

import Header from "./(home)/_components/header/Header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.section}>
      <Header />
    </section>
  );
}
