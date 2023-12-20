import React, { useState } from "react";
import axios from "axios";

import styles from "./addUser.module.css";
import PageTemplate from "../template/PageTemplate";
import Button from "../components/button/Button";
import { useRouter } from "next/router";

const AddUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFullName, setIsFullName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const router = useRouter();

  const onAddUser = async () => {
    try {
      //validation
      const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;

      if (!fullName || !fullNameRegex.test(fullName)) {
        return setIsFullName(true);
      } else {
        setIsFullName(false);
      }

      if (!email || !emailRegex.test(email)) {
        return setIsEmail(true);
      } else {
        setIsEmail(false);
      }

      if (!password || !passwordRegex.test(password)) {
        return setIsPassword(true);
      } else {
        setIsPassword(false);
      }

      setIsLoading(true);
      const user = {
        fullName,
        email,
        password,
      };
      const response = await axios.post(
        `${process.env.SERVER_URL}/users`,
        user
      );
      setIsLoading(false);
      if (response.status === 201) {
        router.push("/login/");
      }
    } catch (error) {
      //@ts-ignore
      if (error.response.status === 401) {
        //@ts-ignore
        alert("Error adding user", error);
        router.push("/addUser/");
        console.error("Error adding user", error);
      }
    }
  };

  const close = () => {
    router.push("/");
  };

  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        <div className={styles.exit} onClick={close}>
          <svg
            height="12"
            width="12"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
          >
            <g id="XMLID_1_">
              <path
                id="XMLID_3_"
                d="M317.1,256L499.2,73.9c16.7-16.7,16.7-43.7,0-60.4c-16.7-16.7-43.7-16.7-60.4,0L256.7,195.6L74.6,12.5
		c-16.7-16.7-43.7-16.7-60.4,0c-8.4,8.4-13,19.5-13,30.7c0,11.2,4.6,22.3,13,30.7L196.3,256L13.2,438.1c-8.4,8.4-13,19.5-13,30.7
		c0,11.2,4.6,22.3,13,30.7c16.7,16.7,43.7,16.7,60.4,0l183.1-183.1l182.1,182.1c16.7,16.7,43.7,16.7,60.4,0
		c16.7-16.7,16.7-43.7,0-60.4L317.1,256z"
              />
            </g>
          </svg>
        </div>
        <h2> Užregistruoti vartotoją</h2>
        <div className={styles.inputsBar}>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Vardas Pavardė"
          />
          <p>
            {isFullName && (
              <span>Įveskite pilną. Pavadinime negalį būtį skaitmenų</span>
            )}
          </p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Elektroninis paštas"
          />
          <p>
            {isEmail && (
              <span>Įveskite elektroninį pašta (pvz. xxx@yyy.zz).</span>
            )}
          </p>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Slaptažodis"
          />
          <p>{isPassword && <span>Įveskite slaptažodį.</span>}</p>

          <Button
            text="Užregistruoti"
            onClick={onAddUser}
            isLoading={isLoading}
          />

          {/* <Button text="Įkelti" onClick={onAddLocation} isLoading={isLoading} /> */}
        </div>
      </div>
    </PageTemplate>
  );
};

export default AddUser;
