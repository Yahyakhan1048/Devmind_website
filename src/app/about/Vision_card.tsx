import React from "react";
import Styles from "@/app/style/Vision_card.module.css";
import Image from "next/image";
const Vision_card = () => {
  return (
    <div>
      <article className={Styles.Article}>
        <section className={Styles.card}>
          <div className={Styles.text_content}>
            <h3>Futuristic Vision</h3>
            <p>
              Devmind's vision is to pioneer innovation in the IT sector,
              providing bespoke solutions that push the boundaries of what's
              possible. Our commitment to excellence and seamless integration of
              technology empowers clients to thrive
            </p>
            <a href="https://www.instagram.com/devmindofficial?igsh=MW02MWgwcjM1OTEyZw==">
              Join now
            </a>
          </div>
          <div className={Styles.visual}>
            <Image
              src="/About/imran.jpg"
              width={240}
              height={160}
              alt="image"
            />
          </div>
        </section>
      </article>
    </div>
  );
};

export default Vision_card;
