import React from "react";
import styles from "./Plarge.module.css";
export const Plarge = (props) => {
    return <p className={styles.text}>{props.children}</p>;
};
