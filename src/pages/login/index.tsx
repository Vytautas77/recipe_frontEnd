import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./login.module.css";
import PageTemplate from "../template/PageTemplate";
import { useRouter } from "next/router";
import Button from "../components/button/Button";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const onLogin = async () => {
    const body = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${process.env.SERVER_URL}/users/login`,
      body
    );
    if (response.status === 200) {
      cookie.set("log15152Log", response.data.token);
      router.push("/");
    }
  };
  const close = () => {
    router.push("/");
  };
  return (
    <PageTemplate>
      <div className={styles.loginWrapper}>
        <div className={styles.form}>
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
          <h3>User Login</h3>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <Button onClick={onLogin} text="Login" />
        </div>
      </div>
    </PageTemplate>
  );
};

export default Login;
