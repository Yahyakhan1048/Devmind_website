import React from "react";
import Style from "@/app/style/pricing_table.module.css";
import { GrSubtractCircle } from "react-icons/gr";
const Pricing_table = () => {
  const pricingData = [
    {
      header: "Trial Version",
      price: 0,
      d1: "Demo file",
      d2: "Update",
      d3: "File Compressed",
      d4: "Commerical use",
      buttonText: "Sign Up!",
    },
    {
      header: "Regular",
      price: 15.99,
      d1: "Demo file",
      d2: "Update",
      d3: "File Compressed",
      d4: "Commerical use",
      buttonText: "Sign Up!",
    },
    {
      header: "Extended",
      price: 25.99,
      d1: "Demo file",
      d2: "Update",
      d3: "File Compressed",
      d4: "Commerical use",
      buttonText: "Sign Up!",
    },
  ];

  return (
    <div className={Style.main_div}>
      <div className={Style.second_dev}>
        <div className={Style.first_div}>
          <div className={Style.heading}>
            <h1 className={Style.box_heading}>Our Package</h1>
            <p className={Style.box_paragraph}>
              Empower your business with the perfect software solution <br /> We
              offer a variety of customizable packages to fit your specific
              needs and budget.
            </p>
          </div>
        </div>
        <div className={Style.second_div}>
          <div className={Style.box_1}>
            <h1>{pricingData[0].header}</h1>
            <p>
              <sup>$</sup>
              <strong>{pricingData[0].price}</strong>
              <sub>/ Months</sub>
            </p>
            <ul className={Style.list}>
              <li>✔ {pricingData[0].d1}</li>
              <li>✔ {pricingData[0].d2}</li>
              <li>✔ {pricingData[0].d3}</li>
              <li>✔ {pricingData[0].d4}</li>
            </ul>
            <button className={Style.Btn}>{pricingData[0].buttonText}</button>
          </div>
          <div className={Style.box_2}>
            <h1>{pricingData[1].header}</h1>
            <p>
              <sup>$</sup>
              <strong>{pricingData[1].price}</strong>
              <sub>/ Months</sub>
            </p>
            <ul className={Style.list}>
              <li>✔ {pricingData[1].d1}</li>
              <li>✔ {pricingData[1].d2}</li>
              <li>✔ {pricingData[1].d3}</li>
              <li>✔ {pricingData[1].d4}</li>
            </ul>
            <button className={Style.Btn}>{pricingData[1].buttonText}</button>
          </div>
          <div className={Style.box_3}>
            <h1>{pricingData[2].header}</h1>
            <p>
              <sup>$</sup>
              <strong>{pricingData[2].price}</strong>
              <sub>/ Months</sub>
            </p>
            <ul className={Style.list}>
              <li>✔ {pricingData[2].d1}</li>
              <li>✔ {pricingData[2].d2}</li>
              <li>✔ {pricingData[2].d3}</li>
              <li>✔ {pricingData[2].d4}</li>
            </ul>
            <button className={Style.Btn}>{pricingData[2].buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing_table;
