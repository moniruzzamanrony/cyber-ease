import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import background from "/image/home-hero.png";
import navicon from "../../../assets/sdvgf 1.png";
import mainicon from "../../../assets/mainicon.png";

const AboutNav = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  

  // const navItems = [
  //   { name: "Home", path: "/" },
  //   { name: "About", path: "/about" },
  //   { name: "Services", path: "/service" },
  //   { name: "Contact", path: "/contact" },
  // ];
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/about#contact-section" },
  ];

  return (
    <div
      className="relative  bg-cover bg-center h-[650px] md:h-[700px] "
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Navbar with dynamic opacity */}
      <nav
        className={`absolute top-0 left-0 w-full text-white py-4 px-6 transition-all duration-300 mt-6 z-10 `}
      >
        <div className="w-[90%] mx-auto flex justify-between items-center lg:px-10">
          {/* Logo */}
          <img src={navicon} alt="Logo" className="hidden md:block" />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3 text-black bg-white px-12 py-2 rounded-full">
            {/* {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-base rounded-md transition-all duration-300 ${
                  location.pathname === item.path ? "text-green-900 font-bold" : "hover:text-green-900"
                }`}
              >
                {item.name}
              </Link>
            ))} */}
            {navItems.map((item) =>
              item.name === "Contact" ? (
                <a
                  key={item.name}
                  href={item.path}
                  className={`px-4 py-2 text-base rounded-md transition-all duration-300 hover:text-green-900`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-base rounded-md transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-green-900 font-bold"
                      : "hover:text-green-900"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col text-black bg-white hover:text-slate-700  p-4 space-y-2 ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 rounded-md transition-all  duration-300 ${
                  location.pathname === item.path
                    ? " text-green-900 font-bold "
                    : "hover:text-green-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Centered Content */}
      <div className="lg:absolute lg:left-40 flex  flex-col lg:flex-row  items-center h-full text-center  pt-20 md:pt-52 lg:pt-0  ">
        <div>
          <img
            src={mainicon}
            alt="Main Icon"
            className="h-24 mb-4 lg:mr-2 2xl:mr-20"
          />
        </div>
        {/* <div className="text-white max-w-sm md:max-w-xl lg:max-w-xl 2xl:max-w-3xl p-2 ">
          <p className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-2 tracking-wide lg:text-left ">
            <span className="lg:leading-[60px] ">
              {data?.headerTitle || 'Loading...'}
            </span>
          </p>

          <p className=" pt-5 lg:leading-[30px] text-left  md:text-justify">
            In today's digital landscape, cybersecurity is not an option—it's a
            necessity. At Cyberease,we provide cutting-edge cybersecurity and IT
            solutions to protect your business from ever-evolving threats.Our
            team of experts ensures your systems remain secure, compliant, and
            resilient against cyberattacks.
          </p>
        </div> */}
        <div className="text-white max-w-sm md:max-w-xl lg:max-w-xl 2xl:max-w-3xl p-2">
          {data?.length > 0 && (
            <>
              <p className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-2 tracking-wide lg:text-left">
                <span className="lg:leading-[60px]">
                  {data[0]?.headerTitle}
                </span>
              </p>

              <p className="pt-5 lg:leading-[30px] text-left md:text-justify">
                {data[0]?.headerSubTitle}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutNav;
