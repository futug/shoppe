import React, { useState } from "react";
import styles from "./ProductInformDesc.module.css";
import ProductReview from "../ProductReview/ProductReview";

const ProductInformDesc = (props) => {
    const tabsLabels = [
        { id: 0, label: "Description" },
        { id: 1, label: "Aditional information" },
        { id: 2, label: "Reviews(3)" },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handleTabToggle = (index) => {
        setActiveTab(index);
    };

    console.log(activeTab);
    return (
        <div className={styles.tabs}>
            {/* tabs labels */}
            <div className={styles.tabLabelsField}>
                {tabsLabels.map((tab, index) => (
                    <div
                        onClick={() => handleTabToggle(index)}
                        className={`${styles.tabLabel} ${activeTab === index ? styles.tabLabelActive : ""}`}
                        key={tab.id}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div
                className={styles.tabsContent}
                style={{
                    transform: activeTab === 0 ? "translateX(0)" : activeTab === 1 ? `translateX(-${100 / 3}%)` : `translateX(-${(100 / 3) * 2}%)`,
                }}
            >
                {" "}
                {/* tabs description */}
                <div className={styles.infoField}>
                    <p className={styles.tabDescription}>{props.fullProduct?.attributes?.descrtiption}</p>
                </div>
                {/* tabs additional information */}
                <div className={styles.infoField} style={{ height: activeTab === 1 ? "100%" : "0" }}>
                    <p className={styles.tabAdditionalInformation}>
                        Weight:&nbsp;<span>0.3kg</span>
                    </p>
                    <p className={styles.tabAdditionalInformation}>
                        Dimentions:&nbsp;<span>15 x 10 x 1 cm</span>
                    </p>
                    <p className={styles.tabAdditionalInformation}>
                        Colours:&nbsp;<span> Black, Browns, White</span>
                    </p>
                    <p className={styles.tabAdditionalInformation}>
                        Materal:&nbsp;<span>Metal</span>
                    </p>
                </div>
                {/* tabs reviews */}
                <div className={styles.infoField} style={{ height: activeTab === 2 ? "100%" : "0" }}>
                    <ProductReview fullProduct={props.fullProduct} />
                </div>
            </div>
        </div>
    );
};

export default ProductInformDesc;
