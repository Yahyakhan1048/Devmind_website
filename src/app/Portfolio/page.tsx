import React from "react";
import Styles from "@/app/style/Portfolio.module.css";
import Project from "./Project";
import CircularProgressBar from "./Progress_bar";
const page = () => {
  return (
    <>
      <div className={Styles.Portfolio_heading}>
        <h1 className={Styles.Portfolio_head}>Portfolio</h1>
        <p>Our Recent Launched Projects Available into Market</p>
      </div>
      <Project />
      {/* below progress css is present in portfoilo */}
      <div className={Styles.progress}>
        <h1>Inventive Growth</h1>
        <p>
          Innovation is the key to staying ahead in a constantly evolving
          business landscape
        </p>
      </div>
      <CircularProgressBar />
    </>
  );
};

export default page;
