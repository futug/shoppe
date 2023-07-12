import React from "react";
import styles from "./ViewProductButton.module.css";

const ViewProductButton = (props) => {
    return <button className={styles.button}>{props.children}</button>;
};

export default ViewProductButton;
