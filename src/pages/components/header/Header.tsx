import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../image/logo1.png";
import exit from "../image/exit.png";
import { Dancing_Script } from "next/font/google";
import Button from "../button/Button";

const interFont = Dancing_Script({ subsets: ["latin"], style: "normal" });

const Header = () => {
  const [isUserLoginIn, setIsUserLoginIn] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Link href="./" className={styles.logoBar}>
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
            <Link href="./" className={styles.logoUser}>
              xxxxxxx
            </Link>
          </li>
          <li>
            <Link href="./" className={styles.logoUser}>
              xxxxxxx
            </Link>
          </li>
          <li>
            <Link href="./" className={styles.logoUser}>
              xxxxxxx
            </Link>
          </li>
        </ul>
        <div className={styles.login}>
          <Button text="Logo" />
          {isUserLoginIn && (
            <h6>
              <Link href="./" className={styles.logoUser}>
                prisijungė: Jonė Petrikaitė
              </Link>
            </h6>
          )}
        </div>
        {isUserLoginIn && (
          <Image
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
