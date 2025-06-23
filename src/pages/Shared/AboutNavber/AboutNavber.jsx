import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import background from "/image/about-hero.webp";
import navicon from "../../../assets/sdvgf 1.png";

const AboutNavber = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [opacity, setOpacity] = useState(50); // Default opacity

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(100, 50 + scrollY / 5); // Adjust opacity based on scroll
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "About", path: "/about" },

    // { name: "Contact", path: "/about#contact-section" },
  ];

  return (
    <div className="relative h-[700px] text-center flex items-center justify-center">
      {/* Background Image with dynamic opacity */}
      <div
        className="absolute inset-0 bg-center "
        style={{
          backgroundImage: `url(${background})`,
          opacity: opacity / 50, // convert 0-100 to 0-1
          zIndex: 0,
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-5 z-0"></div>
      <nav
        className={`absolute top-0 left-0 w-full text-white py-4 px-6 transition-all duration-300 mt-6 z-10 `}
      >
        <div className="w-[90%] mx-auto flex justify-between items-center lg:px-10">
          {/* Logo */}
          {/* <img src={navicon} alt="Logo" className="hidden md:block" /> */}
          <Link to="/">
            <img
              src={navicon}
              alt="Logo"
              className="hidden md:block cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3 text-black bg-white px-12 py-2 rounded-full">
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

      {/* Dark Overlay (optional, for contrast) */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full text-white py-4 px-6 mt-6 z-10">
        {/* ... your navbar code ... */}
      </nav>

      {/* Centered Content */}
      <div className="relative z-10 w-full lg:w-[85%] flex flex-col  h-1/2 -mt-32 md:mt-0 ">
        <div className="text-white max-w-5xl px-6">
          <p className="text-4xl 2xl:text-5xl font-bold mb-2 tracking-wide text-left">
            Who We Are
          </p>
          <p className="pt-5 lg:leading-loose text-justify">
            {data[0]?.whoWeAre}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutNavber;
