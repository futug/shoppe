import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MIN, MAX } from "../../../utils/constants";
import { updateTypedValue } from "../../../feauters/filters/typedValueSlice";
import { updateSaleFilter } from "../../../feauters/filters/saleFilterSlice";
import { updateStockFilter } from "../../../feauters/filters/stockFilterSlice";
import { updatePriceRange } from "../../../feauters/filters/priceRangeSlice";
//UI
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import ReactSlider from "react-slider";

//Styles
import styles from "./ShopFiltersBlock.module.css";
import "../../../App.css";

export const ShopFiltersBlock = () => {
    const priceRange = useSelector((state) => state.priceRange);
    const typedValue = useSelector((state) => state.typedValue);
    const saleStatus = useSelector((state) => state.saleFilter);
    const stockStatus = useSelector((state) => state.stockFilter);

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
                    value={priceRange}
                    min={MIN}
                    max={MAX}
                    onChange={(newValue) => dispatch(updatePriceRange(newValue))}
                />
            </div>
            <div className={styles.priceRangeControls}>
                <p className={styles.priceRangeVisual}>
                    Price: ${priceRange[0]} - ${priceRange[1]}
                </p>
                <p className={styles.priceRangeFilterButton}>Filter</p>
            </div>
            <div className={styles.switchTogglers}>
                <div className={styles.switchToggleField}>
                    <p className={styles.switchToggleLabel}>On Sale</p>
                    <label className={styles.switch}>
                        <input onChange={() => dispatch(updateSaleFilter(!saleStatus))} className={styles.switchToggleInput} type="checkbox" />
                        <span className={styles.slider}></span>
                    </label>
                </div>
                <div className={styles.switchToggleField}>
                    <p className={styles.switchToggleLabel}>In Stock</p>
                    <label className={styles.switch}>
                        <input onChange={() => dispatch(updateStockFilter(!stockStatus))} className={styles.switchToggleInput} type="checkbox" />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>
        </div>
    );
};
