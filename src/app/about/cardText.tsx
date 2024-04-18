import React from "react";
import Styles from "@/app/style/about_showcase.module.css";
const cardText = () => {
  return (
    <>
      <div className={Styles.team}>
        <h1 className={Styles.team_text}>Devmind's Visionaries</h1>
        <p>
          Coming together is a beginning. Keeping together is progress. Working
          together is success
        </p>
      </div>
    </>
  );
};

export default cardText;
