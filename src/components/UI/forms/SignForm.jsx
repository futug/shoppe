import React, { useState } from "react";
import styles from "./SignForm.module.css";
import H3 from "../Typography/h3/H3";
import { Plarge } from "../Typography/p-large/Plarge";
import H5 from "../Typography/h5/H5";
import { Link } from "react-router-dom";
import BigEmailInput from "../inputs/bigemailinput/BigEmailInput";
import BigPasswordInput from "../inputs/bigpasswordinput/BigPasswordInput";

const SignForm = () => {
    const [isClicked, setIsClicked] = useState(true);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <div className={styles.slideSwitcherField}>
                <div className={styles.slideSwitcherBg} style={isClicked ? null : { transform: "translateX(100%)" }}></div>

                <div onClick={handleClick} className={styles.slideSwitcherOption}>
                    <H3>Sign In</H3>
                </div>
                <div onClick={handleClick} className={styles.slideSwitcherOption}>
                    <H3>Register</H3>
                </div>
            </div>
            {!isClicked ? null : (
                <form>
                    <div className={styles.emailInputBlock}>
                        <BigEmailInput type={"email"} placeholder={"Email"} />
                    </div>

                    <div className={styles.passwordInputBlock}>
                        <BigPasswordInput />
                    </div>
                    <div className={styles.checkboxInput}>
                        <input type="checkbox" id="sign" />
                        <label htmlFor="sign">Remember me</label>
                    </div>
                    <div>
                        <button onClick={(e) => e.preventDefault()} className={styles.signButton}>
                            <Plarge>Sign in</Plarge>
                        </button>
                    </div>
                    <div className={styles.restorePass}>
                        <Link to={"/Restore-the-password"}>
                            <H5>Have you forgotten your password?</H5>
                        </Link>
                    </div>
                </form>
            )}
        </div>
    );
};

export default SignForm;
