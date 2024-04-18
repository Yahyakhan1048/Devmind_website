import styles from "../style/part_3.module.css";
import Image from "next/image";
export default function Part_3() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>WHY CHOOSE US</h1>
        <h3>
          What we Promise High Quality IT <br />
          Software Services
        </h3>
        <p>
          Don't settle for ordinary software. Devmind delivers next-level IT
          software services. We combine cutting-edge technology with your
          specific requirements to create innovative solutions that empower your
          business. Our focus on quality and reliability guarantees your
          software is a valuable asset, built to last.
        </p>
        <h4> Following IEEE Standards</h4>
        <h4>Best Practice for industry</h4>
        <div className={styles.subContent}>
          <h5>Join our team – Come work with us</h5>
          <h5>+92 343 9858580</h5>
        </div>
      </div>
      <div className={styles.image}>
        <Image src="/1.png" width={800} height={800} alt="part image" />
      </div>
    </div>
  );
}
