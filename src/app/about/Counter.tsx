"use client";
import styles from "@/app/style/Counter.module.css";

import { useEffect, useState } from "react";

const NumberCounter = () => {
  const [webCount, setWebCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const webInterval = setInterval(() => {
      setWebCount((prevCount) => prevCount + 1);
    }, 50); // Adjust the interval as needed for speed

    const clientInterval = setInterval(() => {
      setClientCount((prevCount) => prevCount + 1);
    }, 40); // Adjust the interval as needed for speed

    return () => {
      clearInterval(webInterval);
      clearInterval(clientInterval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <span className={styles.number}>
          {webCount >= 378 ? 378 : webCount}+
        </span>
        <h3>Clients</h3>
      </div>
      {/* 2nd card */}
      <div className={styles.counter}>
        <span className={styles.number}>
          {clientCount >= 563 ? 563 : clientCount}+
        </span>
        <h3>Success Project</h3>
      </div>
      {/* 3rd */}
      <div className={styles.counter}>
        <span className={styles.number}>
          {clientCount >= 621 ? 621 : clientCount}+
        </span>
        <h3>Developers</h3>
      </div>
      {/* 4th */}
      <div className={styles.counter}>
        <span className={styles.number}>
          {clientCount >= 632 ? 632 : clientCount}+
        </span>
        <h3>Projects</h3>
      </div>
      {/* end */}
    </div>
  );
};

export default NumberCounter;
