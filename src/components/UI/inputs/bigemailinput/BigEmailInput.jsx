import React from "react";
import styles from "./BigEmailInput.module.css";

const BigEmailInput = (props) => {
    return <input className={styles.emailInput} type={props.type} placeholder={props.placeholder} />;
};

export default BigEmailInput;
