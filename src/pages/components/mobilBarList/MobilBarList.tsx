import React from "react";

import styles from "./mobilBarList.module.css";
import Link from "next/link";
type MobileBarListType = {
  isBurgerMenuList: boolean;
  onClickLogOut: () => void;
  isUserLoginIn: boolean;
};
const MobileBarList: React.FC<MobileBarListType> = ({
  isBurgerMenuList,
  onClickLogOut,
  isUserLoginIn,
}) => {
  return (
    <>
      {isBurgerMenuList && (
        <div className={styles.menuBurgerList}>
          {isUserLoginIn && (
            <div className={styles.menuList}>
              <Link href={"/addRecipe/"}> Įdėti receptą</Link>
              <Link href={"/authIndex/"}> Tavo receptai</Link>
              <a onClick={onClickLogOut} style={{ cursor: "pointer" }}>
                Atsijungti
              </a>
            </div>
          )}
          {!isUserLoginIn && (
            <div className={styles.menuList}>
              <Link href={"/login/"}> Login</Link>
              <Link href={"/addUser/"}> Add User</Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MobileBarList;

{
}
