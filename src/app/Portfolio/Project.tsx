import React from "react";
import Styles from "@/app/style/project.module.css";
import Image from "next/image";
import Link from "next/link";
const Project = () => {
  const projectData = [
    {
      imageUrl: "/Projects/restaurant.jpeg",
      title: "Restaurant Management",
      description:
        "Laravel-based Restaurant Management System with multi-auth roles, Ajax integration, expense tracking, menu management, order handling, sales insights, and receipt printing",
      btnText: "Read More",
    },
    {
      imageUrl: "/Projects/project-2.png",
      title: "Gemstone Auction Platform",
      description:
        "Laravel-based Online Auction System specializing in gemstones, featuring multi-auth roles, real-time bidding, secure transactions, and user-friendly management",
      btnText: "Read More",
    },
    {
      imageUrl: "/Projects/project-3.jpg",
      title: "DAppDrive",
      description:
        "DAppDrive is a revolutionary blockchain-powered car rental application, utilizing IPFS for image storage and featuring a robust technology stack, rigorous testing, and upcoming publication plans.",
      btnText: "Read More",
    },
    {
      imageUrl: "/Projects/project-4.png",
      title: "ETH Daddy",
      description:
        "ETH Daddy is a blockchain-based platform for domain purchases, leveraging React and Solidity, with a focus on reliability and future growth",
      btnText: "Read More",
    },
    {
      imageUrl: "/Projects/project-5.png",
      title: "Krypt Platform",
      description:
        "Krypt is a blockchain platform for secure ETH transfers, combining React and Solidity, with a focus on reliability and continuous learning in blockchain development",
      btnText: "Read More",
    },
    {
      imageUrl: "/Projects/project-6.png",
      title: "Circular Startup",
      description:
        "Dynamic Laravel-based multi-vendor e-commerce platform that provides secure shopping, versatile multi-auth user roles, and engaging content to deliver a seamless and enjoyable online shopping experience",
      btnText: "Read More",
    },
    {
      imageUrl: "/Projects/project-7.png",
      title: "Loopit E-commerce Platform",
      description:
        "Loopit!, a dynamic Laravel e-commerce platform featuring multi-auth roles, seamless user experience, blog integration, flexible payments, and efficient order management",
      btnText: "Read More",
    },
    {
      imageUrl: "/Projects/school.jpeg",
      title: "School Management System",
      description:
        "Laravel school management app with student, class, teacher, report, expense, attendance, exam, fee, and communication features",
      btnText: "Read More",
    },
  ];

  return (
    <>
      <div className={Styles.wrapper}>
        {/* card 1 */}
        <div className={Styles.card}>
          <Image
            className={Styles.image}
            src={projectData[0].imageUrl}
            width={100}
            height={100}
            alt="project"
          />
          <div className={Styles.info}>
            <h1>{projectData[0].title}</h1>
            <p>{projectData[0].description}</p>
            <button>
              <Link href="https://www.linkedin.com/posts/imranimsciences_laravel-webdevelopment-restaurantmanagement-activity-7069195739460960256-v7Em?utm_source=share&utm_medium=member_desktop">
                {projectData[0].btnText}
              </Link>
            </button>
          </div>
        </div>
        {/* card 1 */}
        <div className={Styles.card}>
          <Image
            className={Styles.image}
            src={projectData[1].imageUrl}
            width={100}
            height={100}
            alt="project"
          />
          <div className={Styles.info}>
            <h1>{projectData[1].title}</h1>
            <p>{projectData[1].description}</p>
            <button>
              {" "}
              <Link href="https://www.linkedin.com/posts/imranimsciences_laravel-webdevelopment-restaurantmanagement-activity-7069195739460960256-v7Em?utm_source=share&utm_medium=member_desktop">
                {projectData[1].btnText}
              </Link>
            </button>
          </div>
        </div>
        {/* card 2 */}
        <div className={Styles.card}>
          <Image
            className={Styles.image}
            src={projectData[2].imageUrl}
            width={100}
            height={100}
            alt="project"
          />
          <div className={Styles.info}>
            <h1>{projectData[2].title}</h1>
            <p>{projectData[2].description}</p>
            <button>
              {" "}
              <Link href="/">{projectData[2].btnText}</Link>
            </button>
          </div>
        </div>
        {/* card 3 */}
        <div className={Styles.card}>
          <Image
            className={Styles.image}
            src={projectData[3].imageUrl}
            width={100}
            height={100}
            alt="project"
          />
          <div className={Styles.info}>
            <h1>{projectData[3].title}</h1>
            <p>{projectData[3].description}</p>
            <button>
              {" "}
              <Link href="https://www.linkedin.com/posts/imranimsciences_blockchain-ethereum-smartcontracts-activity-7071449865637048321-OQPR?utm_source=share&utm_medium=member_desktop">
                {projectData[3].btnText}
              </Link>
            </button>
          </div>
        </div>
        {/* card 1 */}
        <div className={Styles.card}>
          <Image
            className={Styles.image}
            src={projectData[4].imageUrl}
            width={100}
            height={100}
            alt="project"
          />
          <div className={Styles.info}>
            <h1>{projectData[4].title}</h1>
            <p>{projectData[4].description}</p>
            <button>
              {" "}
              <Link href="https://www.linkedin.com/posts/imranimsciences_blockchain-ethereum-smartcontracts-activity-7071067369879592960-vWeA?utm_source=share&utm_medium=member_desktop">
                {projectData[4].btnText}
              </Link>
            </button>
          </div>
        </div>
        {/* card 5 */}
        <div className={Styles.card}>
          <Image
            className={Styles.image}
            src={projectData[5].imageUrl}
            width={100}
            height={100}
            alt="project"
          />
          <div className={Styles.info}>
            <h1>{projectData[5].title}</h1>
            <p>{projectData[5].description}</p>
            <button>
              {" "}
              <Link href="https://www.linkedin.com/posts/imranimsciences_laravel-webdevelopment-ecommerce-activity-7067075384436998145-Z5rd?utm_source=share&utm_medium=member_desktop">
                {projectData[5].btnText}
              </Link>
            </button>
          </div>
        </div>
        {/* card 6 */}
        <div className={Styles.card}>
          <Image
            className={Styles.image}
            src={projectData[6].imageUrl}
            width={100}
            height={100}
            alt="project"
          />
          <div className={Styles.info}>
            <h1>{projectData[6].title}</h1>
            <p>{projectData[6].description}</p>
            <button>
              {" "}
              <Link href="https://www.linkedin.com/posts/imranimsciences_laravel-webdevelopment-ecommerce-activity-7068146698023243776-zQsi?utm_source=share&utm_medium=member_desktop">
                {projectData[6].btnText}
              </Link>
            </button>
          </div>
        </div>
        {/* card 7 */}
        <div className={Styles.card}>
          <Image
            className={Styles.image}
            src={projectData[7].imageUrl}
            width={100}
            height={100}
            alt="project"
          />
          <div className={Styles.info}>
            <h1>{projectData[7].title}</h1>
            <p>{projectData[7].description}</p>
            <button>
              {" "}
              <Link href="https://www.linkedin.com/posts/imranimsciences_laravel-webdevelopment-erp-activity-7068489255752261632-TmRR?utm_source=share&utm_medium=member_desktop">
                {projectData[7].btnText}
              </Link>
            </button>
          </div>
        </div>
        {/* end card */}
      </div>
      ;
    </>
  );
};

export default Project;
