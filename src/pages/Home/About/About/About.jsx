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

const About = () => {
  const [data, setData] = useState(null); // for storing API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    changeTitleAndFavicon("about");
  }, []);
  const location = useLocation();

  console.log("object", location);

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView();
          });
        }
      }
    };

    scrollToHash();

    const unlisten = () => {
      window.addEventListener("hashchange", scrollToHash);
    };

    unlisten();
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [location]);

  console.log("data", data);

  const apiUrl = import.meta.env.VITE_API_ENDPOINT;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/about`);
        console.log("lll", response);
        setData(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) {
    return <ListSkeleton></ListSkeleton>;
  }
  return (
    <div>
      {/* <AboutNav></AboutNav> */}
      <AboutNavber data={data}></AboutNavber>
      <InFo data={data}></InFo>
      {/* <OurTeam></OurTeam> */}
      {/* <Opsition></Opsition> */}
      {/* <Financial></Financial> */}
      <ESGSection data={data}></ESGSection>
      <PostEmail id="contact-section"></PostEmail>
      <Footer />
    </div>
  );
};

export default About;
