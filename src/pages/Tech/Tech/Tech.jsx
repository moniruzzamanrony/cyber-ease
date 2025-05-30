import React, { useEffect, useState } from "react";
import Issuers from "../Issuers/Issuers";
import LiveCycle from "../LiveCycle/LiveCycle";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import { changeTitleAndFavicon } from "../../../ChangeTitle/ChangeTitle";
import TachNav from "../../Shared/TachNav/TachNav";
import Footer from "../../Shared/Footer/Footer";
import axios from "axios";
import ListSkeleton from "../../Shared/ListSkeleton";

const Tech = () => {
  const [data, setData] = useState(null); // for storing API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state
  useEffect(() => {
    changeTitleAndFavicon("service");
  }, []);

  console.log("data", data);

  const apiUrl = import.meta.env.VITE_API_ENDPOINT;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/service`);
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
      <TachNav data={data}></TachNav>
      <Issuers data={data}></Issuers>
      <LiveCycle data={data}></LiveCycle>
      <TestimonialSection data={data}></TestimonialSection>
      <Footer />
    </div>
  );
};

export default Tech;
