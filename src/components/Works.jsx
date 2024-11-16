import React from "react";
import pic1 from "../assets/pic.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/room2.jpg";
import pic5 from "../assets/room3.jpg";
import pic6 from "../assets/room5.jpg";
const pictures = [
  {
    id: 1,
    image: pic1,
    name: "3-steps",
  },
  {
    id: 2,
    image: pic2,
    name: "low-fade",
  },
  {
    id: 3,
    image: pic3,
    name: "cornroll",
  },
  {
    id: 4,
    image: pic4,
    name: "cornroll",
  },
  {
    id: 5,
    image: pic5,
    name: "cornroll",
  },
  {
    id: 6,
    image: pic6,
    name: "cornroll",
  },
];

const Works = () => {
  return (
    <div id="Works">
      <div id="text__area">
        <h5>Discover My Works</h5>
        <p>
          I give special treatment to my customers. Giving you a befitting
          haircut,making you fresher than before. I give hair treatment to both
          gender
        </p>
      </div>
      <div id="image__area">
        {pictures.map((images) => (
          <div id="images" key={images.id} scrolling="yes">
            <img src={images.image} alt="Hairstyle" />
            <p>{images.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
