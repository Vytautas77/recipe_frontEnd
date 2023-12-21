import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import styles from "./headerMobil.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../image/logo1.png";
import { Dancing_Script } from "next/font/google";
import { useRouter } from "next/router";
import MobileBarList from "../mobilBarList/MobilBarList";

const interFont = Dancing_Script({ subsets: ["latin"], style: "normal" });

const Header = () => {
  const [isUserLoginIn, setIsUserLoginIn] = useState(false);
  const [isBurgerMenuList, setBurgerMenuList] = useState(false);
  const onMenuBurgerClick = () => {
    setBurgerMenuList((prevState) => !prevState);
  };
  useEffect(() => {
    const savedCookie = cookie.get("log15152Log");
    if (savedCookie) {
      setIsUserLoginIn(true);
    }
  }, []);

  const router = useRouter();

  const onClickLogOut = () => {
    try {
      cookie.remove("log15152Log");
      setIsUserLoginIn(false);
      router.push("/");
    } catch (error) {
      console.error("Error during log-out:", error);
    }
  };

  const onGoRecipeAuth = () => {
    router.push("/authIndex");
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logoBar}>
          <Image
            src={logo}
            className={styles.logoCake}
            alt="Landscape picture"
            width={800}
            height={500}
          />
          <h1 className={`${styles.logoText} ${interFont.className}`}>
            Receptai
          </h1>
        </Link>
        <nav className={styles.navBar} onClick={onMenuBurgerClick}>
          <svg viewBox="0 0 100 80" width="30" height="30" fill="#f1b4d3">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </nav>
      </div>
      <MobileBarList
        isBurgerMenuList={isBurgerMenuList}
        onClickLogOut={onClickLogOut}
        isUserLoginIn={isUserLoginIn}
      />
    </>
  );
};

export default Header;
