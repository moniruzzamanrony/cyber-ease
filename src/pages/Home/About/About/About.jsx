import React, { useEffect, useState } from "react";
import AboutNav from "../../../Shared/AboutNav/AboutNav";
import InFo from "./InFo/InFo";
import OurTeam from "./OurTeam/OurTeam";
import Opsition from "./Opsition/Opsition";
import Financial from "./Financial/Financial";
import ESGSection from "./ESGSection/ESGSection";
import PostEmail from "../../PostEmail/PostEmail";
import { changeTitleAndFavicon } from "../../../../ChangeTitle/ChangeTitle";
import AboutNavber from "../../../Shared/AboutNavber/AboutNavber";
import Footer from "../../../Shared/Footer/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ListSkeleton from "../../../Shared/ListSkeleton";
import { toast } from "react-toastify";

const About = () => {
  const [data, setData] = useState([]); // for storing API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state


  const apiUrl = import.meta.env.VITE_API_ENDPOINT;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/about`);
        
        setData(response?.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  
    if (error) {
      toast.error(error || "something is wrong");
    }


  return (
    <div>
      {/* <AboutNav></AboutNav> */}
      <AboutNavber data={data}></AboutNavber>
      <InFo data={data}></InFo>
      {/* <OurTeam></OurTeam> */}
      {/* <Opsition></Opsition> */}
      {/* <Financial></Financial> */}
      <ESGSection loading={loading} data={data}></ESGSection>
      <PostEmail ></PostEmail>
      <Footer />
    </div>
  );
};

export default About;
