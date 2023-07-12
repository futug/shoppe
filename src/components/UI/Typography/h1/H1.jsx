import React from "react";
import styles from "./H1.module.css";

const H1 = (props) => {
    return <h1 className={styles.heading}>{props.children}</h1>;
};

export default H1;
