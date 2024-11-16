import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/PrinceBarbslogo.png";
import { CiMenuBurger } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  //Opening menu
  const [menu, setMenu] = useState(false);

  //function for menu
  const handleMenu = () => {
    setMenu(!menu);
    console.log("Working!!");
  };
  //Size change based on scroll
  const [imageSize, setImageSize] = useState(500); // Starting image size

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Reduce image size based on scroll position but set a minimum size limit
    const newSize = Math.max(100, 200 - scrollY * 0.2);
    setImageSize(newSize);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //This is for text transition
  const [index, setIndex] = useState(0);
  const texts = [
    "....Giving you the fresh looks",
    "Come to the hair master",
    "Trim your hair with me",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Variants for container animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Variants for text animations
  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div
      id="Header"
      style={{
        height: `${imageSize}px`,
        transition: " height 0.2s", // Smooth transition
      }}
    >
      <div
        id="cover"
        style={{
          height: `${imageSize}px`,
          transition: " height 0.3s", // Smooth transition
        }}
      ></div>
      <div id="menu">
        <CiMenuBurger id="icon" onClick={handleMenu} />
        {menu ? (
          <div id="menubox">
            <ul>
              <a href="#Header">
                <li onClick={handleMenu}>Home</li>
              </a>
              <hr />
              <a href="#Home">
                <li onClick={handleMenu}>Book Appointment</li>
              </a>
              <hr />
              <a href="#Works">
                <li onClick={handleMenu}>Locate us</li>
              </a>
              <hr />
              <a href="#Works"><li onClick={handleMenu}>About us</li></a>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="navbar">
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="nav__area">
          <nav>
            <ul>
              <li>Home</li>
              <li>Contact us</li>
              <li>About us</li>
            </ul>
          </nav>
          <button>Online Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
