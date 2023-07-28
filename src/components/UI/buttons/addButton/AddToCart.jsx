import React from "react";
import styles from "./AddToCart.module.css";

const AddToCart = (props) => {
    return (
        <button onClick={props.onClick} className={styles.button}>
            {props.children}
        </button>
    );
};

export default AddToCart;
