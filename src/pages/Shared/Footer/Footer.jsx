import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSkype,
  FaYoutube,
} from "react-icons/fa";
import footerIcon from "../../../assets/sdvg 1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import ListSkeleton from "../ListSkeleton";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("data", data);

  const apiUrl = import.meta.env.VITE_API_ENDPOINT;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/contact`);
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
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-14 h-14 rounded-full border-4 border-t-4 border-t-red-500 border-b-transparent animate-spin shadow-lg"></div>
      </div>
    );
  }
  if (error) {
    toast.error(error || "something is wrong");
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Service", path: "/service" },
  ];
  return (
    <footer className="bg-green-900 text-white  md:py-2">
      <div className="w-[90%]  mx-auto px-4 ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white pb-2 md:pb-2 p-1 ">
          {/* Logo & Contact */}
          <div className="text-center md:text-left mb- md:mb-0">
            <img
              src={footerIcon}
              alt="CyberEase Logo"
              className="mx-auto md:mx-0 w-32 md:w-40"
            />
          </div>
          <div className="text-center md:text-left text-sm leading-loose">
            <p className="mt-2 md:mt-0">
              {data[0]?.email} | Phone: {data[0]?.phoneNumber}
            </p>
            <p>{data[0]?.address}</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-sm mt-2  md:mt-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="font-medium hover:text-gray-300 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-2 text-xs sm:text-sm">
          <p className="text-center md:text-left">
            ©Cyber Ease – all rights reserved 2025
          </p>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 md:mt-0  ">
            {[
              "Cookies",
              "Privacy Policy",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:underline hover:text-gray-300 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 mt-2 md:mt-0 text-base pb-1">
            <a
              href={data[0]?.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer hover:text-gray-300 transition" />
            </a>
            <a
              href={data[0]?.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer hover:text-gray-300 transition" />
            </a>
            {/* <FaInstagram className="cursor-pointer hover:text-gray-300 transition" /> */}
            {/* <FaYoutube className="cursor-pointer hover:text-gray-300 transition" /> */}
            <a
              href={data[0]?.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="cursor-pointer hover:text-gray-300 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
