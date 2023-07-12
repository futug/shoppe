import React from "react";
import styles from "./Psmall.module.css";
const Psmall = (props) => {
    return <p className={styles.text}>{props.children}</p>;
};

export default Psmall;
