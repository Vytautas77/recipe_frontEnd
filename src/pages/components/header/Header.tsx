import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../image/logo1.png";
import exit from "../image/exit.png";
import { Dancing_Script } from "next/font/google";
import Button from "../button/Button";
import { useRouter } from "next/router";

const interFont = Dancing_Script({ subsets: ["latin"], style: "normal" });

const Header = () => {
  const [isUserLoginIn, setIsUserLoginIn] = useState(false);
  useEffect(() => {
    const savedCookie = cookie.get("log15152Log");
    if (savedCookie) {
      setIsUserLoginIn(true);
    }
  }, []);

  const router = useRouter();

  const onLoginPress = () => {
    router.push("/logo/");
  };
  const onClickLogOut = () => {
    try {
      cookie.remove("log15152Log");
      setIsUserLoginIn(false);
      router.push("/");
    } catch (error) {
      console.error("Error during log-out:", error);
    }
  };

  return (
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
          Kepinių receptai
        </h1>
      </Link>
      <nav className={styles.navBar}>
        <ul className={styles.menu}>
          <li>
            {isUserLoginIn && (
              <Link href="/addRecipe" className={styles.logoUser}>
                Įdėti receptą
              </Link>
            )}
          </li>
        </ul>
        <div className={styles.login}>
          <Button text="Logo" onClick={onLoginPress} />
          {isUserLoginIn && (
            <h6>
              <Link href="/authIndex" className={styles.logoUser}>
                prisijungęs
              </Link>
            </h6>
          )}
        </div>
        {isUserLoginIn && (
          <Image
            onClick={onClickLogOut}
            src={exit}
            className={styles.logOut}
            alt="Landscape picture"
            width={800}
            height={500}
          />
        )}
      </nav>
    </div>
  );
};

export default Header;
