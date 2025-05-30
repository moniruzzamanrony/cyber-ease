import React from "react";
import rightImage from "../../../assets/issuers.png";

const Issuers = ({ data }) => {
  const howToHelpText = data[0]?.howToHelp || "";
  const helpItems = howToHelpText.split("&").map((item) => {
    const [title, subtitle] = item.split("#");
    return { title, subtitle };
  });
  return (
    <div className="bg-black text-white pt-16 px-5">
      <div className=" md:w-[90%]  mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <button className="bg-[#00643C] text-white px-6 py-2 rounded-full font-medium">
            How We Help
          </button>

          <h2 className="text-2xl md:text-3xl font-bold mt-6">Issuers</h2>

          <div className="mt-4 space-y-6">
            {helpItems.map((item, index) => (
              <div key={index} className="">
                <h3 className="text-lg font-semibold pb-2">{item.title}</h3>
                <p className="text-gray-300">{item.subtitle}</p>
              </div>
            ))}

          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-8">Distributors</h2>
          <h2 className="text-xl md:text-2xl font-bold mt-2 pb-6">
            Service Providers
          </h2>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:pb-40">
          <img
            src={rightImage}
            alt="Issuers Diagram"
            className="w-full max-w-lg"
          />
        </div>
      </div>
      <hr className="pb-3 w-[90%] mx-auto" />
    </div>
  );
};

export default Issuers;
