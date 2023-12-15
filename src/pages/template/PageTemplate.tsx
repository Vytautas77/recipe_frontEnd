import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

type pageTemplateType = {
  children: ReactNode;
};

const PageTemplate: React.FC<pageTemplateType> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
