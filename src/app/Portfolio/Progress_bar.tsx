// components/CircularProgressBar.js
import React from "react";
import styles from "./CircularProgressBar.module.css";

const CircularProgressBar = () => {
  const progress_count = [
    { percentage: 75, title: "Hard Work" },
    { percentage: 83, title: "Creativity" },
    { percentage: 95, title: "Quality" },
    { percentage: 90, title: "Development" },
  ];

  return (
    <div className={styles.performance}>
      {/* first card */}
      <div className={styles.circularProgressBar}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              transform: `rotate(${progress_count[0].percentage * 3.6}deg)`,
            }}
          ></div>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.percentage}>{progress_count[0].percentage}%</p>
          <p className={styles.title}>{progress_count[0].title}</p>
        </div>
      </div>
      {/* 2nd card */}
      <div className={styles.circularProgressBar}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              transform: `rotate(${progress_count[1].percentage * 3.6}deg)`,
            }}
          ></div>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.percentage}>{progress_count[1].percentage}%</p>
          <p className={styles.title}>{progress_count[1].title}</p>
        </div>
      </div>
      {/* thrid card */}
      <div className={styles.circularProgressBar}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              transform: `rotate(${progress_count[2].percentage * 3.6}deg)`,
            }}
          ></div>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.percentage}>{progress_count[2].percentage}%</p>
          <p className={styles.title}>{progress_count[2].title}</p>
        </div>
      </div>
      {/* 4th card */}
      <div className={styles.circularProgressBar}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              transform: `rotate(${progress_count[3].percentage * 3.6}deg)`,
            }}
          ></div>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.percentage}>{progress_count[3].percentage}%</p>
          <p className={styles.title}>{progress_count[3].title}</p>
        </div>
      </div>
      {/* end  */}
    </div>
  );
};

export default CircularProgressBar;
