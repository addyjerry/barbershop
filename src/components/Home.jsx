import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaCalculator, FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { TbSocial } from "react-icons/tb";

const Home = () => {
  const [contact, setContact] = useState();

  const handleContact = () => {
    setContact(!contact);
  };
  return (
    <div id="Home">
      <div id="writing">
        <h5>DISCOVER YOUR BEAUTY</h5>
        <p>
          Get the best haircut for yourself. Feel good while we give you a good
          shave.If you don't know the best haircut that fits you. Visit our shop
          and we will give you the best style.
        </p>
      </div>
      <div id="googlemap">
        <iframe
          width="100%"
          height="400"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Oduman+(Wiz-serene%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
      </div>
      <div id="location">
        <p>
          <CiLocationOn />
          Locate us at Ablekuma-BorkorBorkor
        </p>
      </div>
      <div id="contact__area" onClick={handleContact}>
        <div id="contact_icon">
          <TbSocial />
        </div>
        <div id="contact__text">Contact us</div>
      </div>
      {contact ? (
        <div id="contact">
          <div id="icons">
            <a href="tel:+233534301300">
              {" "}
              <FaWhatsapp id="whatsapp" />
            </a>
          </div>
          <div id="icons">
            <a href="https://www.instagram.com/magicfingers1/?hl=en">
              {" "}
              <FaInstagramSquare id="twitter" />
            </a>
          </div>
          <div id="icons">
            <a href="tel:+233534301300">
              {" "}
              <IoIosCall id="call" />
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
