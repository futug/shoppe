import React from "react";
import BigEmailInput from "../components/UI/inputs/bigemailinput/BigEmailInput";
import styles from "./Contacts.module.css";
import { AiOutlineDown } from "react-icons/ai";
import { Plarge } from "../components/UI/Typography/p-large/Plarge";
import H1 from "../components/UI/Typography/h1/H1";
import H3 from "../components/UI/Typography/h3/H3";

export const Contacts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <H1>Contact Us</H1>
                <div className={styles.subtitle}>
                    <H3>Say Hello send us your thoughts about our products or share your ideas with our Team!</H3>
                </div>
                <form className={styles.formContent} action="#">
                    <div className={styles.contentRow}>
                        <div className={styles.inputWrapper}>
                            <BigEmailInput type={"text"} placeholder={"First name"} />
                        </div>
                        <div className={styles.inputWrapper}>
                            <BigEmailInput type={"text"} placeholder={"Last name"} />
                        </div>
                    </div>
                    <div className={styles.contentRow}>
                        <div className={styles.inputWrapper}>
                            <BigEmailInput type={"email"} placeholder={"Email"} />
                        </div>
                        <div className={styles.inputWrapper}>
                            <select className={styles.select} name="subject" id="subject">
                                <option value="somesub1">Some sobject</option>
                                <option value="somesub2">Some sobject 2</option>
                            </select>
                            <div className={styles.selectIco}>
                                <AiOutlineDown />
                            </div>
                        </div>
                    </div>
                    <div className={styles.textarea}>
                        <textarea placeholder="Message" />
                    </div>
                    <button onClick={(e) => e.preventDefault()} className={styles.button}>
                        <Plarge>Send</Plarge>
                    </button>
                </form>
            </div>
        </div>
    );
};
