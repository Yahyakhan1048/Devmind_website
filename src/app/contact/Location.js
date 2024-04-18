import React from "react";

const Location = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-[8rem] xl:space-x-[5rem] w-full items-center py-14">
      <div className="w-[20rem] sm:w-[28rem] md:w-[34rem] lg:w-auto space-y-5 py-8 lg:hidden">
        <div className="space-y-2">
          <h3 className="text-xl xl:text-2xl">Our Location</h3>
          <h2 className="font-semibold text-2xl sm:text-3xl xl:text-4xl">
            Connecting Near and Far
          </h2>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26578.810855832027!2d73.11690176886349!3d33.62213067903379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb78ae79e3f9%3A0x397e173c094ec592!2sBilal%20Plaza%2C%20Ghauri%20Town%2C%20Phase%205B%2F4B%2C%20Islamabad!5e0!3m2!1sen!2s!4v1707679065708!5m2!1sen!2s"
        className="outline-transparent shadow-xl w-[20rem] h-[19rem] sm:w-[28rem] md:w-[34rem] lg:w-[35rem] xl:w-[55rem] rounded-xl"
        style={{
          border: 0,
          outline: "none",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-[20rem] sm:w-[28rem] md:w-[34rem] lg:w-auto space-y-5 py-8 hidden lg:block">
        <div className="space-y-2">
          <h3 className="text-xl xl:text-2xl">Our Location</h3>
          <h2 className="font-semibold text-2xl sm:text-3xl xl:text-4xl">
            Connecting Near and Far
          </h2>
        </div>
        <div className="space-y-2 hidden lg:block">
          <h3 className="font-semibold text-xl xl:text-2xl">Headquarters</h3>
          <ul className="space-y-1 xl:text-lg">
            <li>Bilal Plaza</li>
            <li>Ghauri Town</li>
            <li>Phase 5B/4B</li>
            <li>Islamabad</li>
            <li>Islamabad Capital Territory</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;
