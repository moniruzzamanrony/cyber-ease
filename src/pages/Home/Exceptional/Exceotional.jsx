import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Exceotional = ({ data }) => {
  const whyChooseText = data[0]?.whyChooseList || "";
  const splitItems = whyChooseText
    .split("#")
    .filter((item) => item.trim() !== "");
  return (
    <div className="w-[90%] mx-auto mt-10 md:mt-20">
      <p
        className="font-semibold text-[30px] leading-[56px] tracking-[0%] text-[rgba(0,0,0,0.82)]
"
      >
        Why Choose{" "}
        <span
          className=" font-semibold text-[35px]  leading-[56px] tracking-[0%] text-[#00643C]
"
        >
          Cyberease?
        </span>
      </p>

      {/* <p className="pt-10">
         Industry-leading <span className="font-bold">security expertise</span>
      </p> */}
      {splitItems.map((item, index) => (
        <p key={index} className="text-[rgba(0,0,0,0.82)] text-sm ">
         ✔ {item}
        </p>
      ))}

      {/* <button className="flex items-center p-3  bg-transparent border-2 border-gray-400  rounded-full transition duration-300 mt-8">
        <FaArrowRightLong />
      </button> */}
    </div>
  );
};

export default Exceotional;
