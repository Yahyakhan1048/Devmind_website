import React from "react";
import styles from "@/app/style/Reality.module.css";

const Reality = () => {
  return (
    <div className={styles.reality}>
      {/* First div */}
      <div className={styles.reality_heading}>
        <h2>Conceptualization to Realization</h2>
      </div>
      {/* Second div */}
      <div className={styles.section}>
        {/* First card */}
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.front_content}>
              <p>Innovation </p>
            </div>
            <div className={styles.content}>
              <p className={styles.heading}>Innovation</p>
              <p>
                We foster innovation excellence, turning ideas into reality
                through forward-thinking solutions and cutting-edge
                technologies.
              </p>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.front_content}>
              <p>Client-Centric Approach</p>
            </div>
            <div className={styles.content}>
              <p className={styles.heading}>Client-Centric Approach</p>
              <p>
                Our client-centric approach prioritizes understanding needs,
                translating concepts into tangible solutions that exceed
                expectations
              </p>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.front_content}>
              <p>Quality Craftsmanship</p>
            </div>
            <div className={styles.content}>
              <p className={styles.heading}>Quality Craftsmanship</p>
              <p>
                We uphold quality craftsmanship, ensuring every project is
                executed with precision and reliability.
              </p>
            </div>
          </div>
        </div>
        {/* 4th card */}
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.front_content}>
              <p>Collaborative Partnership</p>
            </div>
            <div className={styles.content}>
              <p className={styles.heading}>Collaborative Partnership</p>
              <p>
                Through collaborative partnerships, we empower teamwork to turn
                ambitious concepts into successful outcomes molestias
              </p>
            </div>
          </div>
        </div>
        {/* 5th card */}
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.front_content}>
              <p>Agile Adaptability</p>
            </div>
            <div className={styles.content}>
              <p className={styles.heading}>Agile Adaptability</p>
              <p>
                Embracing agile adaptability, we navigate complexities with
                ease, transforming dynamic concepts into actionable strategies
              </p>
            </div>
          </div>
        </div>
        {/* 6th card */}
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.front_content}>
              <p>Ethical Integrity</p>
            </div>
            <div className={styles.content}>
              <p className={styles.heading}>Ethical Integrity</p>
              <p>
                Guided by ethical integrity, we uphold honesty, transparency,
                and accountability, ensuring trust in the concepts we bring to
                life
              </p>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Reality;
