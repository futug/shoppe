import React from "react";
import styles from "./H2.module.css";

const H2 = (props) => {
    return <h2 className={styles.heading}>{props.children}</h2>;
};

export default H2;
