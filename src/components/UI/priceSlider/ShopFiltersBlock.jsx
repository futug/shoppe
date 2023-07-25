import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MIN, MAX } from "../../../utils/constants";
import { updateTypedValue } from "../../../feauters/filters/typedValueSlice";

//UI
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import ReactSlider from "react-slider";

//Styles
import styles from "./ShopFiltersBlock.module.css";
import "../../../App.css";

export const ShopFiltersBlock = () => {
    const [values, setValues] = useState([MIN, MAX]);

    const typedValue = useSelector((state) => state.typedValue);
    const [saleStatus, setSaleStatus] = useState(false);
    const [stockStatus, setStockStatus] = useState(false);
    const priceRangeDifference = values[1] - values[0];

    const dispatch = useDispatch();

    const handleTypedValueChange = (e) => {
        const newValue = e.target.value;
        dispatch(updateTypedValue(newValue));
    };
    return (
        <div className={styles.filtersBlock}>
            <div className={styles.searchField}>
                <input className={styles.searchInput} value={typedValue} onChange={handleTypedValueChange} type="text" placeholder="Search..." />
                <AiOutlineSearch className={styles.searchIcon} size={19} />
            </div>
            <div className={styles.sortOptions}>
                <div className={styles.sortSelectField}>
                    <select className={styles.sortSelectInput} name="" id="">
                        <option value="1">Price Up</option>
                        <option value="2">Price Down</option>
                    </select>
                    <div className={styles.selectIco}>
                        <AiOutlineDown />
                    </div>
                </div>
                <div className={styles.sortSelectField}>
                    <select className={styles.sortSelectInput} name="" id="">
                        <option value="1">Price Up</option>
                        <option value="2">Price Down</option>
                    </select>
                    <div className={styles.selectIco}>
                        <AiOutlineDown />
                    </div>
                </div>
            </div>
            <div className={styles.priceRangeField}>
                <ReactSlider
                    className={styles.priceRangeSlider}
                    thumbClassName={styles.priceRangeThumb}
                    trackClassName={"priceRangeTrack"}
                    value={values}
                    min={MIN}
                    max={MAX}
                    onChange={setValues}
                />
            </div>
            <div className={styles.priceRangeControls}>
                <p className={styles.priceRangeVisual}>
                    Price: ${values[0]} - ${values[1]}
                </p>
                <p className={styles.priceRangeFilterButton}>Filter</p>
            </div>
            <div className={styles.switchTogglers}>
                <div className={styles.switchToggleField}>
                    <p className={styles.switchToggleLabel}>On Sale</p>
                    <label className={styles.switch}>
                        <input onChange={() => setSaleStatus(!saleStatus)} className={styles.switchToggleInput} type="checkbox" />
                        <span className={styles.slider}></span>
                    </label>
                </div>
                <div className={styles.switchToggleField}>
                    <p className={styles.switchToggleLabel}>In Stock</p>
                    <label className={styles.switch}>
                        <input onChange={() => setStockStatus(!stockStatus)} className={styles.switchToggleInput} type="checkbox" />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>
        </div>
    );
};
