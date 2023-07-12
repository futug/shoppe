import React from "react";
import styles from "./Pmedium.module.css";

export const Pmedium = (props) => {
    return <p className={styles.text}>{props.children}</p>;
};
