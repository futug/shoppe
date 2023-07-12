import React from "react";
import H1 from "../components/UI/Typography/h1/H1";
import styles from "./MyAccount.module.css";
import SignForm from "../components/UI/forms/SignForm";

const MyAccount = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <H1>My Account</H1>
                <div className={styles.form}>
                    <SignForm />
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
