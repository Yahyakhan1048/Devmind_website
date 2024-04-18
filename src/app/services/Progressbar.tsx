// import React from "react";
// import Styles from "@/app/style/about_showcase.module.css";
// const Progress = ({ value, label }) => {
//   return (
//     <>
//       <div className={Styles.progress}>
//         <div className={Styles.progressbar} style={{ width: `${value}%` }}>
//           {label}
//         </div>
//       </div>
//     </>
//   );
// };

// const Progressbar = () => {
//   return (
//     <div>
//       <Progress value={90} label="Development" />
//       <Progress value={85} label="Design" />
//       <Progress value={93} label="SEO" />
//       <Progress value={97} label="Security" />
//       <Progress value={85} label="Management" />
//     </div>
//   );
// };

// export default Progressbar;
// components/Progressbar.js

import React from "react";
import Styles from "@/app/style/about_showcase.module.css";

const Progress = ({ value, label }) => {
  return (
    <div className={Styles.progress}>
      <div className={Styles.progressbar} style={{ width: `${value}%` }}>
        {label}
      </div>
    </div>
  );
};

const Progressbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.text}>
          <h2>Empowering Digital Innovation</h2>
          <p>
            At our software house, we're committed to empowering digital
            innovation. Our team of skilled professionals is dedicated to
            crafting cutting-edge solutions that drive business growth and
            success. From custom software development to user-centric design and
            robust security measures, we're here to elevate your digital
            presence and propel your organization forward. Partner with us and
            let's shape the future together.
          </p>
        </div>
        <div className={Styles.progressBars}>
          <Progress value={90} label="Development" />
          <Progress value={85} label="Design" />
          <Progress value={93} label="SEO" />
          <Progress value={97} label="Security" />
          <Progress value={85} label="Management" />
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
