import React from "react";
import logoimg from "../images/Logo002.png"
import { NavLink } from "react-router-dom";

// import { FaMapMarkedAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [dropDown, setDropDown] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  function Dropdown() {
    setDropDown((prev) => !prev);
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="sticky top-0 z-50 w-full"
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-once="true"
    >
      <div
        className={`border-test sticky z-20 w-full bg-gray-100 shadow md:bg-slate-950 md:shadow-none  ${
          scrolled ? "md:bg-slate-950 md:shadow-lg" : null
        }`}
      >
        <div className="container flex h-[72px] items-center justify-between px-6 py-4 sm:px-10">
          <NavLink
            className={`border-test flex cursor-pointer items-center text-amber-500 ${
              scrolled ? "text-amber-500" : "md:text-gray-100"
            } `}
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              dropDown && setDropDown((prev) => !prev);
            }}
          >
            
            <img  className="relative -top-[3px] w-10 mr-1" src={logoimg} alt="" />
            <span className="text-3xl font-semibold">PROWRITE</span>
          </NavLink>

          <span
            className="border-test flex cursor-pointer items-center font-semibold text-amber-500 md:hidden"
            onClick={Dropdown}
          >
            {dropDown ? (
              <RxCross2 className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </span>

          <ul className="border-test hidden gap-10 text-lg font-medium md:flex">
            <NavLink
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-amber-500"
                  : "text-lg font-medium text-gray-800 hover:text-amber-500 md:text-gray-100"
              }
            >
              <li className="transition-all duration-300 ease-in-out">Home</li>
            </NavLink>

            {/* Our Team Section */}
            <NavLink
              to="/ourteam"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-amber-500"
                  : "text-lg font-medium text-gray-800 hover:text-amber-500 md:text-gray-100"
              }
              // style={({ isActive, isPending, isTransitioning }) => {
              //   return {
              //     fontWeight: isActive ? "bold" : "",
              //     color: isActive ? "#f59e0b" : "#f59e0b",
              //   };
              // }}
            >
              <li className="transition-all duration-300 ease-in-out">
                Our Team
              </li>
            </NavLink>

            {/* Service Section */}
            <NavLink
              to="/service"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-amber-500"
                  : "text-lg font-medium text-gray-800 hover:text-amber-500 md:text-gray-100"
              }
            >
              <li className="transition-all duration-300 ease-in-out">
                Service
              </li>
            </NavLink>

            {/* Learn Section */}
            <NavLink
              to="/learn"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-amber-500"
                  : "text-lg font-medium text-gray-800 hover:text-amber-500 md:text-gray-100"
              }
              // style={({ isActive, isPending, isTransitioning }) => {
              //   return {
              //     fontWeight: isActive ? "bold" : "",
              //     color: isActive ? "#f59e0b" : "#f59e0b",
              //   };
              // }}
            >
              <li className="transition-all duration-300 ease-in-out">Learn</li>
            </NavLink>

            {/* Events Section */}
            <NavLink
              to="/package"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-amber-500"
                  : "text-lg font-medium text-gray-800 hover:text-amber-500 md:text-gray-100"
              }
            >
              <li className="transition-all duration-300 ease-in-out">
                Events
              </li>
            </NavLink>

            {/* Review Section */}
            <NavLink
              to="/package"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-amber-500"
                  : "text-lg font-medium text-gray-800 hover:text-amber-500 md:text-gray-100"
              }
            >
              <li className="transition-all duration-300 ease-in-out">
                Review
              </li>
            </NavLink>

            {/* Contact Section */}
            <NavLink
              to="/contact"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-amber-500"
                  : "text-lg font-medium text-gray-800 hover:text-amber-500 md:text-gray-100"
              }
            >
              <li className="transition-all duration-300 ease-in-out">
                Contact
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      <div
        className={`${
          !dropDown ? "-translate-y-96" : ""
        } z-10 flex h-72 w-full items-center justify-center border-t-2 border-gray-100 bg-gray-100 text-xl font-semibold shadow-md transition-all duration-500 md:hidden`}
      >
        <div className="border-test flex flex-col items-center gap-6">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-amber-500"
                : "text-gray-800 hover:text-amber-500 md:text-gray-100"
            }
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              setDropDown((prev) => !prev);
            }}
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-amber-500"
                : "text-gray-800 hover:text-amber-500 md:text-gray-100"
            }
            to="/about"
            onClick={() => {
              window.scrollTo(0, 0);
              setDropDown((prev) => !prev);
            }}
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-amber-500"
                : "text-gray-800 hover:text-amber-500 md:text-gray-100"
            }
            to="/service"
            onClick={() => {
              window.scrollTo(0, 0);
              setDropDown((prev) => !prev);
            }}
          >
            Service
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-amber-500"
                : "text-gray-800 hover:text-amber-500 md:text-gray-100"
            }
            to="/package"
            onClick={() => {
              window.scrollTo(0, 0);
              setDropDown((prev) => !prev);
            }}
          >
            Package
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-amber-500"
                : "text-gray-800 hover:text-amber-500 md:text-gray-100"
            }
            to="/contact"
            onClick={() => {
              window.scrollTo(0, 0);
              setDropDown((prev) => !prev);
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
