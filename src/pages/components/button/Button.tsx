import React from "react";
import styles from "./button.module.css";
import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "500",
});

type ButtonType = {
  text: string;
};

const Button: React.FC<ButtonType> = ({ text }) => {
  return (
    <button className={`${styles.btn} ${robotoFont.className}`}>{text}</button>
  );
};

export default Button;
