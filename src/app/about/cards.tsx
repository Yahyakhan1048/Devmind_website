import styles from "@/app/style/Card.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";
const Cards = () => {
  const cardsdata = [
    {
      imageUrl: "/imrai.png",
      altText: "Image 1",
      heading: "Imran Khan",
      description: "Blockchain Developer",
      buttonText: "Follow Me",
    },
    {
      imageUrl: "/imran_b.jpg",
      altText: "Image 2",
      heading: "Imran Khan",
      description: "Flutter Developer",
      buttonText: "Follow Me",
    },
    {
      imageUrl: "/Yahya.png",
      altText: "Image 3",
      heading: "Yahya Khan",
      description: "MERN Stack Developer",
      buttonText: "Follow Me",
    },
  ];
  return (
    <div className={styles.slider}>
      {/* card one */}
      <div className={styles.card}>
        <div>
          <Image
            className={styles.image}
            src={cardsdata[0].imageUrl}
            width={100}
            height={100}
            alt={cardsdata[0].altText}
          />
        </div>
        <div className={styles.card_info}>
          <span>{cardsdata[0].heading}</span>
          <p>{cardsdata[0].description}</p>
        </div>
        <button className={styles.button}>
          <span className={styles.button_content}>
            {cardsdata[0].buttonText}
          </span>
        </button>
        <div className={styles.social_link}>
          <Link href="https://github.com/ImranKhanIMS" className={styles.link}>
            <FaGithub />
          </Link>
          <br />
          <Link
            href="https://www.linkedin.com/in/imranimsciences/"
            className={styles.link}
          >
            <FaLinkedinIn />
          </Link>
          <br />
          <Link href="/" className={styles.link}>
            <FaSquareXTwitter />
          </Link>
        </div>
      </div>
      {/* card two */}
      <div className={styles.card}>
        <div>
          <Image
            className={styles.image}
            src={cardsdata[1].imageUrl}
            width={100}
            height={100}
            alt={cardsdata[1].altText}
          />
        </div>
        <div className={styles.card_info}>
          <span>{cardsdata[1].heading}</span>
          <p>{cardsdata[1].description}</p>
        </div>
        <button className={styles.button}>
          <span className={styles.button_content}>
            {cardsdata[1].buttonText}
          </span>
        </button>
        <div className={styles.social_link}>
          <Link
            href="https://www.facebook.com/profile.php?id=100008945019875&mibextid=ZbWKwL"
            className={styles.link}
          >
            <FaGithub />
          </Link>
          <br />
          <Link
            href="https://www.linkedin.com/in/imran-khan-bcs1122"
            className={styles.link}
          >
            <FaLinkedinIn />
          </Link>
          <br />
          <Link href="/" className={styles.link}>
            <FaSquareXTwitter />
          </Link>
        </div>
      </div>
      {/* card three */}
      <div className={styles.card}>
        <div>
          <Image
            className={styles.image}
            src={cardsdata[2].imageUrl}
            width={100}
            height={100}
            alt={cardsdata[2].altText}
          />
        </div>
        <div className={styles.card_info}>
          <span>{cardsdata[2].heading}</span>
          <p>{cardsdata[2].description}</p>
        </div>
        <button className={styles.button}>
          <span className={styles.button_content}>
            {cardsdata[2].buttonText}
          </span>
        </button>
        <div className={styles.social_link}>
          <Link
            href="https://github.com/Yahyakhan1048?tab=repositories"
            className={styles.link}
          >
            <FaGithub />
          </Link>
          <br />
          <Link
            href="www.linkedin.com/in/yahya-khan-301b20235"
            className={styles.link}
          >
            <FaLinkedinIn />
          </Link>
          <br />
          <Link
            href="https://x.com/YahyaKh29359985?s=09"
            className={styles.link}
          >
            <FaSquareXTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
