import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../feauters/products/productsSlice";
import { Link } from "react-router-dom";

import { ShopFiltersBlock } from "../components/UI/priceSlider/ShopFiltersBlock";

//UI
import H1 from "../components/UI/Typography/h1/H1";
import { AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";

//styles
import styles from "./Shop.module.css";

//!!!!!TO_DO: 1.ADD FILTERS SORT BY PRICE/NAME 2.ADD INFINITE SCROLL
const Shop = () => {
    const dispatch = useDispatch();

    const priceRange = useSelector((state) => state.priceRange);
    const typedValue = useSelector((state) => state.typedValue);
    const saleStatus = useSelector((state) => state.saleFilter);
    const stockStatus = useSelector((state) => state.stockFilter);
    const [filtersMenuIsOpen, setFiltersMenuIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Обработчик события изменения размера окна браузера
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Добавляем обработчик события при монтировании компонента
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Удаляем обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    const { productsList, isLoading, isRejected } = useSelector((state) => state.products);

    const filtredProducts = productsList.filter((product) => {
        const titleMatches = product.attributes.title.toLowerCase().includes(typedValue.toLowerCase());
        const priceMatches = product.attributes.price >= priceRange[0] && product.attributes.price <= priceRange[1];

        if (saleStatus) {
            return titleMatches && product.attributes.saleAction !== null && priceMatches;
        } else if (stockStatus) {
            return titleMatches && (product.attributes.stock === undefined || product.attributes.stock === null) && priceMatches;
        }

        return titleMatches && priceMatches;
    });

    if (isLoading) {
        return (
            <div className={styles.preLoader}>
                <div>Loading goods for you...</div>
            </div>
        );
    }

    if (isRejected) {
        return <div className={styles.preLoader}>We are very sorry, but it looks like something went wrong :( Please try again later! </div>;
    }

    return (
        <div className={styles.shop}>
            <H1>Shop the latest</H1>
            <div onClick={() => setFiltersMenuIsOpen(!filtersMenuIsOpen)} className={styles.settings}>
                <div className={styles.settingsIcon}>
                    <GiSettingsKnobs color="#A18A68" />
                </div>
                <p>Filters</p>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.sideBar} style={windowWidth <= 1100 ? { transform: filtersMenuIsOpen ? "translateX(0)" : "translateX(-100%)" } : {}}>
                    <div onClick={() => setFiltersMenuIsOpen(!filtersMenuIsOpen)} className={styles.closeIcon}>
                        <AiOutlineClose size={25} />
                    </div>
                    <div className={styles.filters}>
                        <ShopFiltersBlock />
                    </div>
                </div>
                <section className={styles.products}>
                    <div className={styles.productsWrapper}>
                        {filtredProducts.map((product) => (
                            <div className={styles.productCard} key={product.id}>
                                <div className={styles.productImageWrapper}>
                                    {product.attributes.saleAction ? <div className={styles.saleTag}>{product.attributes.saleAction}</div> : null}
                                    <img className={styles.productImage} src={product.attributes.goldImage.data.attributes.url} alt="product" />
                                    <div className={styles.interactiveOverlay}>
                                        <div className={styles.interactiveOverlayIcons}>
                                            <div className={styles.interactiveButtons}>
                                                {" "}
                                                <div>
                                                    <AiOutlineShoppingCart size={25} />
                                                </div>
                                            </div>
                                            <div className={styles.interactiveButtons}>
                                                <Link to={"/Products/" + product.id}>
                                                    <AiOutlineEye size={25} />
                                                </Link>
                                            </div>
                                            <div className={styles.interactiveButtons}>
                                                {" "}
                                                <AiOutlineHeart size={25} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.productTitle}>{product.attributes.title}</div>
                                <div className={styles.productPrice}>From $ {product.attributes.price}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Shop;
