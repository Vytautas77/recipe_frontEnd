import React from "react";
import styles from "./button.module.css";
import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "500",
});

type ButtonType = {
  onClick?: () => void;
  text: string;
};

const Button: React.FC<ButtonType> = ({ text, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${robotoFont.className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
