import React from "react";

const Info = () => {
  return (
    <div>
      <h1 className="text-5xl text-white">Contact Us</h1>
      <p className="text-[#a6c1bf] pt-3 text-lg">
        Email or call to get in touch with us.
      </p>
      <div className="flex flex-col space-y-3 py-5 w-[10rem] xl:pb-12">
        <a href="mailto:email@gmail.com" className="text-[#a6c1bf] inline-block relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-full after:transform after:scale-x-0 after:h-[3px] after:rounded after:bg-[#a6c1bf]  after:origin-bottom-left after:transition-all after:duration-300 hover:after:scale-x-[0.85] hover:after:origin-bottom-left">
          email@gmail.com
        </a>
        <a href="tel:+92 320-9191410" className="text-[#a6c1bf] inline-block relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-full after:transform after:scale-x-0 after:h-[3px] after:rounded after:bg-[#a6c1bf]  after:origin-bottom-left after:transition-all after:duration-300 hover:after:scale-x-[0.85] hover:after:origin-bottom-left">
          +92 320-9191410
        </a>
      </div>
      <div className="xl:grid xl:grid-cols-3 xl:gap-x-11 space-y-4 xl:space-y-0 w-[20rem] sm:w-[30rem] md:w-[35rem] xl:w-[48rem] 2xl:w-[55rem]">
        <div>
          <h3 className="text-white text-xl">Customer Support</h3>
          <p className="text-[#a6c1bf]">
            Our support team is available around the clock to address any
            concerns or queries you may have.
          </p>
        </div>
        <div>
          <h3 className="text-white text-xl">Collaborations</h3>
          <p className="text-[#a6c1bf]">
            Businesses or organizations interested in collaborating with Devmind
            can find information on partnership opportunities, joint ventures,
            or sponsorships.
          </p>
        </div>
        <div>
          <h3 className="text-white text-xl">Feedback & Suggestions</h3>
          <p className="text-[#a6c1bf]">
            We value your feedback and are continuously working to improve
            Devmind. Your input is crucial in shaping our future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
