import React from "react";
import styles from "./Footer.module.css";
import H5 from "./UI/Typography/h5/H5";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiLogoLinkedin, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer>
            <div className={styles.footerBlock}>
                <div className={styles.leftSide}>
                    <div className={styles.routerLinks}>
                        <Link to={"/Contacts"}>
                            <H5 color={"#707070"}>CONTACTS</H5>
                        </Link>
                        <Link to={"/Privacy"}>
                            <H5 color={"#707070"}>TERMS OF SERVICE</H5>
                        </Link>
                        <Link to={"/Shipping"}>
                            <H5 color={"#707070"}>SHIPPING AND RETURN</H5>
                        </Link>
                    </div>
                    <div className={styles.copyright}>
                        <H5 color={"#707070"}>
                            <span style={{ color: "#000" }}>© 2021 Shelly.</span> Terms of use <span style={{ color: "#000" }}>and</span> privacy policy.
                        </H5>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.inputField}>
                        <form action="#">
                            <input className={styles.input} type="email" placeholder="Give an email, get the newsletter." />
                            <button className={styles.sendButton} onClick={(e) => e.preventDefault()}>
                                <HiOutlineArrowNarrowRight size={25} />
                            </button>
                        </form>
                    </div>
                    <div className={styles.socialMedia}>
                        <a target="_blank" rel="noreferrer" href="https://ru.linkedin.com/">
                            <BiLogoLinkedin size={18} className={styles.socialIco} />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://ru-ru.facebook.com/">
                            <BiLogoFacebook size={18} className={styles.socialIco} />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
                            <BiLogoInstagram size={18} className={styles.socialIco} />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                            <BiLogoTwitter size={18} className={styles.socialIco} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
