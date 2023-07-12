import React, { useState } from "react";
import styles from "./EmailInput.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

const EmailInput = () => {
    const [emailInput, setEmailInput] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    const handleInputChange = (event) => {
        setEmailInput(event.target.value);
    };

    const clearInput = () => {
        setEmailInput("");
    };

    const handleBlur = () => {
        setIsClicked(false);
    };

    return (
        <>
            <div className={styles.inputField}>
                <input
                    className={styles.inputBody}
                    type="text"
                    id="email"
                    value={emailInput}
                    required
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onClick={() => setIsClicked(true)}
                />
                <label className={styles.placeHolder} htmlFor="email">
                    Email
                </label>
                {emailInput === "" ? null : <AiFillCloseCircle size={12} className={styles.apperance} onClick={clearInput} />}
            </div>
            {isClicked && emailInput === "" ? <p className={styles.error}>Required field</p> : null}
        </>
    );
};

export default EmailInput;
