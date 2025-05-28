import React, { useEffect, useState } from "react";
import Exceotional from "../Exceptional/Exceotional";
import HeroOne from "../Hero/HeroOne";
import Operational from "../Operational/Operational";
import HeroTwo from "../HeroTwo/HeroTwo";
import SeamLess from "../Seamless/SeamLess";
import MembersShips from "../MembersShips/MembersShips";
import PostEmail from "../PostEmail/PostEmail";
import Card from "../Card/Card";
import { changeTitleAndFavicon } from "../../../ChangeTitle/ChangeTitle";
import AboutNav from "../../Shared/AboutNav/AboutNav";
import Footer from "../../Shared/Footer/Footer";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null); // for storing API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    changeTitleAndFavicon("home");
  }, []);

  console.log("data", data);

  const apiUrl = import.meta.env.VITE_API_ENDPOINT;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/home`);
        console.log("lll",response);
        setData(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <AboutNav data={data}></AboutNav>
      <Exceotional />
      <HeroOne />
      <Operational data={data} />
      <HeroTwo />
      <SeamLess data={data} />
      <MembersShips data={data} />
      {/* <Card /> */}
      <PostEmail />
      <Footer />
    </div>
  );
};

export default Home;
