import React from "react";
import H1 from "../components/UI/Typography/h1/H1";
import H5 from "../components/UI/Typography/h5/H5";
import styles from "./Privacy.module.css";

const Privacy = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <H1>Privacy Policy</H1>
                <div className={styles.paragraph}>
                    <H5>
                        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
                        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
                        lacus, ac sodales lectus placerat quis.{" "}
                    </H5>
                </div>
                <div className={styles.paragraph}>
                    <p className={styles.paragraphTitle}>Security</p>
                    <H5>
                        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
                        pellentesque risus scelerisque.
                    </H5>
                </div>
                <div className={styles.paragraph}>
                    <p className={styles.paragraphTitle}>Cookies</p>
                    <ul>
                        <li> Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.</li>
                        <li>Nam fringilla molestie velit, eget pellentesque risus scelerisque a</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
