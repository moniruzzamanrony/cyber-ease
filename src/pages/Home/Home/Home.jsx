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
import ListSkeleton from "../../Shared/ListSkeleton";

const Home = () => {
  const [data, setData] = useState([]); // for storing API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    changeTitleAndFavicon("home");
  }, []);

  console.log("datdda", error);

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

//   if (loading) {
//   return <ListSkeleton></ListSkeleton>;
// }

  return (
    <div>
      <AboutNav data={data}></AboutNav>
      <Exceotional data={data} />
      <HeroOne />
      <Operational data={data} />
      <HeroTwo />
      <SeamLess data={data} />
      <MembersShips loading={loading} data={data} />
      {/* <Card /> */}
      <PostEmail />
      <Footer />
    </div>
  );
};

export default Home;
