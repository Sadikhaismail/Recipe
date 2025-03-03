import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import './Recipe.css'; 

function Recipe() {
  return (
    <div className="linkdiv">
      <a href="#everyday-cooking">Everyday Cooking</a>
      <IoIosArrowForward />
      <a href="#seasonal">Seasonal</a>
      <IoIosArrowForward />
      <a href="#summer">Summer</a>
      <IoIosArrowForward />
      <a href="#main-dishes">Main Dishes</a>
    </div>
  );
}

export default Recipe;
