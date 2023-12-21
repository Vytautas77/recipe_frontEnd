import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import HeaderMobil from "../components/headerMobil/HeaderMobil";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

type pageTemplateType = {
  children: ReactNode;
};

const PageTemplate: React.FC<pageTemplateType> = ({ children }) => {
  return (
    <div className={`${styles.wrapper} ${roboto.className}`}>
      <HeaderMobil />
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
