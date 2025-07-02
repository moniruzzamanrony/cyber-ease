import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SeamLess = ({ data }) => {
  return (
    <div className="w-[90%] mx-auto mt-10 md:mt-20">
      <p
        className="font-semibold text-[30px] leading-[56px] tracking-[0%] text-[rgba(0,0,0,0.82)]
"
      >
        Seamless{" "}
        <span
          className=" font-semibold text-[35px] leading-[56px] tracking-[0%] text-[#00643C]
"
        >
          Straight-Through{" "}
        </span>
        Processing
      </p>

      <p className="mt-4 text-[rgba(0,0,0,0.82)] text-justify text-sm">
        {data[0]?.seamlessProcessing}
      </p>
      {/* <button className="flex items-center p-3  bg-transparent border-2 border-gray-400  rounded-full transition duration-300 mt-8">
        <FaArrowRightLong />
      </button> */}
    </div>
  );
};

export default SeamLess;
