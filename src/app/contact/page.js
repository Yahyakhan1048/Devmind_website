import React from "react";
import Form from "./Form";
import Info from "./Info";
import Location from "./Location";

const page = () => {
  return (
    <section>
      <div className="bg-[#17575c] px-5 py-14 flex mt-20 flex-col lg:flex-row lg:justify-center lg:space-x-[5rem] items-center space-y-[4rem] lg:space-y-0">
        <Info />
        <Form />
      </div>
      <Location />
    </section>
  );
};

export default page;
