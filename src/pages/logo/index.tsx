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
  return (
    <PageTemplate>
      <div className={styles.loginWrapper}>
        <div className={styles.form}>
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
