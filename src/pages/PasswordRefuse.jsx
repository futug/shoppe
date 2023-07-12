import React from "react";
import H1 from "../components/UI/Typography/h1/H1";
import H3 from "../components/UI/Typography/h3/H3";
import BigEmailInput from "../components/UI/inputs/bigemailinput/BigEmailInput";
import { Plarge } from "../components/UI/Typography/p-large/Plarge";
import styles from "./PasswordRefuse.module.css";

const PasswordRefuse = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <H1>Have you Forgotten Your Password ?</H1>
                <div className={styles.subtitle}>
                    <H3>If you've forgotten your password, enter your e-mail address and we'll send you an e-mail </H3>
                </div>
                <form className={styles.resetForm} action="#">
                    <div className={styles.emailInputBlock}>
                        <BigEmailInput type={"email"} placeholder={"Email"} />
                    </div>
                    <div className={styles.resetButton}>
                        <button onClick={(e) => e.preventDefault()} className={styles.button}>
                            <Plarge>Reset password</Plarge>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordRefuse;
