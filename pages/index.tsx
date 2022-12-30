import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FirstCard } from "../src/Cards/firstCard"
import { SecondCard, FormData } from "../src/Cards/secondCard"
import { ThirdCard } from "../src/Cards/thirdCard"
import { useState } from "react";

export interface AppState {
  formData: FormData
}

export default function Home() {
  const [formData, setFormData] = useState<AppState['formData']>({
    score: 0,
    maxScore: 0,
  });

  const handleChange = (data: AppState['formData']) => {
    setFormData(data);
  };

  return (
    <>
      <Head>
        <title>Curver</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>Curver</div>
        <div className={styles.subtitle}>By Ben Ostrovsky & Léo Mindlin </div>

        <div className={styles.cardContainer}>
          <FirstCard />
          <SecondCard onChange={handleChange} />
          <ThirdCard formData={formData} />
        </div>
      </main>
    </>
  );
}