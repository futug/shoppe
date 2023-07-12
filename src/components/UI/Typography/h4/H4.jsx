import React from "react";
import styles from "./H4.module.css";

const H4 = (props) => {
    return <h4 className={styles.heading}>{props.children}</h4>;
};

export default H4;
