import React from "react";
import styles from "./H3.module.css";

const H3 = (props) => {
    return <h3 className={styles.heading}>{props.children}</h3>;
};

export default H3;
