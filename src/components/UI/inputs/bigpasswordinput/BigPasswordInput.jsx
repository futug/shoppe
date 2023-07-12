import React from "react";
import styles from "./BigPasswordInput.module.css";

const BigPasswordInput = () => {
    return <input className={styles.passwordInput} type="password" placeholder="Password" />;
};

export default BigPasswordInput;
