import React from "react";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import cardimg1 from "../../../assets/cardIcon/image1.png";
import cardimg2 from "../../../assets/cardIcon/image2.png";
import cardimg3 from "../../../assets/cardIcon/image3.png";
import cardimg4 from "../../../assets/cardIcon/image4.png";

const MembersShips = () => {
  return (
    <div className="lg:h-[500px]  mt-20 bg-black/95">
      <div className="flex flex-col md:flex-row md:items-center gap-4 text-white justify-evenly pt-3 md:pt-28  text-center  ">
        <div>
          <p
            className=" font-extrabold text-[40px] leading-[56px] tracking-[0%] 
"
          >
            250m+
          </p>
          <p
            className=" font-medium text-[10px] 
"
          >
            risk calculations performed
          </p>
        </div>
        <div>
          <p
            className=" font-extrabold text-[40px] leading-[56px] tracking-[0%] 
"
          >
            80m+
          </p>
          <p
            className=" font-medium text-[10px] 
"
          >
            documents generated per year
          </p>
        </div>
        <div>
          <p
            className=" font-extrabold text-[40px] leading-[56px] tracking-[0%]
"
          >
            ~70%
          </p>
          <p
            className=" font-medium text-[10px] 
"
          >
            risk calculations performed
          </p>
        </div>
      </div>
      <div>
        <p className="text-white w-[80%] md:w-[70%] mx-auto text-center text- pt-10">
          Partnering with Cyberease has been a game-changer for our business.
          Their innovative solutions and expertise have streamlined our
          operations, significantly reducing manual efforts and improving
          efficiency. The team's commitment to understanding our unique
          challenges and delivering tailored results is truly commendable.
          Cyberease is more than a service provider—they are a trusted partner
          in our growth journey.
        </p>
      </div>
      <div className="flex items-center justify-center mt-10 gap-3">
        <button className="flex items-center p-3  bg-transparent border-2 border-gray-400   transition duration-300 ">
          <FaArrowRightLong className="text-white" />
        </button>
        <p className="text-white">Clavius Lab</p>
        <button className="flex items-center p-3  bg-transparent border-2 border-gray-400   transition duration-300">
          <FaArrowLeft className="text-white" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-3 mt-5 pb-5">
        <div className="w-2 h-2 rounded-full border-2 border-white"></div>
        <div className="w-2 h-2 rounded-full border-2 border-white"></div>
        <div className="w-2 h-2 rounded-full border-2 border-white"></div>
        <div className="w-2 h-2 rounded-full border-2 border-white "></div>
  
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] mx-auto pb-6  ">
        <div className="rounded-lg shadow-lg">
          <div className="flex justify-center">
            <img
              src={cardimg1}
              alt="Card Image"
              className="object-cover rounded-md"
            />
          </div>
          <hr className="my-4" />
          <p className="text-center text-white text-sm">
            Morningstar is well known for its intensive research and funds data
            with global coverage. WSD has a strategic partnership with
            Morningstar to make this data available to our customers and users.
          </p>
        </div>
        <div className="rounded-lg shadow-lg">
          <div className="flex justify-center">
            <img
              src={cardimg2}
              alt="Card Image"
              className="object-cover rounded-md "
            />
          </div>
          <hr className="my-4" />
          <p className="text-center text-white text-sm">
            The German Structured Securities Association (Bundesverband für
            strukturierte Wertpapiere, BSW) is the representative body of
            issuers and service providers.
          </p>
        </div>
        <div className="rounded-lg shadow-lg">
          <div className="flex justify-center">
            <img
              src={cardimg3}
              alt="Card Image"
              className="object-cover rounded-md "
            />
          </div>
          <hr className="my-4" />
          <p className="text-center text-white text-sm">
            SIX Financial Information is a Switzerland-based market data
            information provider with global coverage. WSD works with SIX to
            power numerous solutions with realtime market data.
          </p>
        </div>
        <div className="rounded-lg shadow-lg">
          <div className="flex justify-center">
            <img
              src={cardimg4}
              alt="Card Image"
              className="object-cover rounded-md "
            />
          </div>
          <hr className="my-4" />
          <p className="text-center text-white text-sm">
            Refinitiv is a global provider of financial markets data and was
            formerly part of Thomson Reuters. WSD partners with Refnitiv to make
            their data available to our customers and users.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default MembersShips;
