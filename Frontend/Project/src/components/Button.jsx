import React from "react";
import styles from "../style"; // Assuming styles are imported from your styles file

const Button = ({ additionalStyles }) => (
  <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className={`py-4 px-6 my-6 font-poppins font-bold text-[18px] text-black bg-gradient-button rounded-[10px] outline-none ${additionalStyles}`}
    >
      Get Started
    </button>
  </a>
);

export default Button;
