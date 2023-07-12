import React from "react";
import styles from "./H5.module.css";

const H5 = (props) => {
    return (
        <h5 style={{ color: props.color }} className={styles.heading}>
            {props.children}
        </h5>
    );
};

export default H5;
