import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import background from "/image/home.webp";
import navicon from "../../../assets/sdvgf 1.png";
import mainicon from "../../../assets/mainicon.png";

const AboutNav = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const updateIndicator = (el) => {
    if (el && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
      });
    }
  };

  // set position to active link on load/path change
  useEffect(() => {
    const activeItem = document.querySelector(".nav-item.active");
    if (activeItem) updateIndicator(activeItem);
  }, [location.pathname]);

  // reset indicator on mouse leave
  const handleMouseLeave = () => {
    const activeItem = document.querySelector(".nav-item.active");
    if (activeItem) updateIndicator(activeItem);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "About", path: "/about" },

    // { name: "Contact", path: "/about#contact-section" },
  ];

  return (
    <div
      className="relative  bg-cover bg-center h-[650px] md:h-[700px] "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 md:bg-opacity-30 lg:bg-opacity-75"></div>
      {/* Navbar with dynamic opacity */}
      <nav
        className={`absolute top-0 left-0 w-full text-white py-4 px-6 transition-all duration-300  z-10 mt-6 `}
      >
        <div className="w-[90%] mx-auto flex justify-between items-center lg:px-10">
          {/* Logo */}
          <Link to="/">
            <img
              src={navicon}
              alt="Logo"
              className="hidden md:block cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3 text-black bg-white px-12 py-2 rounded-full">
            {/* 
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
            )} */}

            <div
              className="relative"
              ref={containerRef}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex space-x-6">
                {navItems.map((item) =>
                  item.name === "Contact" ? (
                    <a
                      key={item.name}
                      href={item.path}
                      className="nav-item text-base px-4 py-2 text-black hover:text-green-900 relative"
                      onMouseEnter={(e) => updateIndicator(e.currentTarget)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`nav-item text-base px-4 py-2 relative ${
                        location.pathname === item.path
                          ? "text-green-900 font-bold active"
                          : "text-[#000000] hover:text-green-900"
                      }`}
                      onMouseEnter={(e) => updateIndicator(e.currentTarget)}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

              {/* Sliding underline */}
              <div
                className="absolute bottom-0 h-[3px] bg-green-900 transition-all duration-500"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />
            </div>
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
                className={`block px-4 py-2  transition-all  duration-300 ${
                  location.pathname === item.path
                    ? " text-green-900 font-bold  "
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
