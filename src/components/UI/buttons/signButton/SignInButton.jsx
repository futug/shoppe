import React from "react";
import styles from "./SignInButton.module.css";

const SignInButton = (props) => {
    return <button className={styles.button}>{props.children}</button>;
};

export default SignInButton;
