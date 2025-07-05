import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import background from "/image/tach.webp";
import navicon from "../../../assets/sdvgf 1.png";

const TachNav = ({ data }) => {
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
      className="relative flex items-center justify-center bg-cover bg-center h-[700px] text-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Navbar with dynamic opacity */}
      <nav
        className={`absolute top-0 left-0 w-full text-white py-4 px-6 transition-all duration-300 mt-6 z-10 `}
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
            {/* {navItems.map((item) =>
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
          <div className="md:hidden flex flex-col text-black bg-white hover:text-slate-700  p-4 space-y-2 text-left ">
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
      <div className="w-full flex flex-col justify-center h-full ">
        <div className="text-white max-w-7xl px-6">
          <p className="text-2xl 2xl:text-4xl font-bold mb-2 tracking-wide text-left drop-shadow-lg lg:pl-32">
            Protect<span className="text-[#00643C]">.</span> Secure
            <span className="text-[#00643C]">.</span> Thrive
            <span className="text-[#00643C]">.</span>
          </p>
          <p className="pt-5 text-left text-sm text-white drop-shadow-lg lg:pl-32 lg:leading-loose  ">
            {data[0]?.protectDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TachNav;
