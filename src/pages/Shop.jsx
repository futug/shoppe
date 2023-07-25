import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../feauters/products/productsSlice";
import { Link } from "react-router-dom";
import { MIN, MAX } from "../utils/constants";

import { ShopFiltersBlock } from "../components/UI/priceSlider/ShopFiltersBlock";

//UI
import H1 from "../components/UI/Typography/h1/H1";
import { AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

//styles
import styles from "./Shop.module.css";

const Shop = () => {
    const dispatch = useDispatch();

    const [values, setValues] = useState([MIN, MAX]);
    const [saleStatus, setSaleStatus] = useState(false);
    const [stockStatus, setStockStatus] = useState(false);
    const priceRangeDifference = values[1] - values[0];

    const typedValue = useSelector((state) => state.typedValue);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    const { productsList, isLoading } = useSelector((state) => state.products);

    const filtredProducts = productsList.filter((product) => {
        return product.attributes.title.toLowerCase().includes(typedValue.toLowerCase());
    });

    if (isLoading) {
        return (
            <div className={styles.preLoader}>
                <div>Loading goods for you...</div>
            </div>
        );
    }

    return (
        <div className={styles.shop}>
            <H1>Shop the latest</H1>
            <div className={styles.wrapper}>
                <div className={styles.sideBar}>
                    <ShopFiltersBlock
                        values={values}
                        setValues={setValues}
                        typedValue={typedValue}
                        // setTypedValue={setTypedValue}
                        saleStatus={saleStatus}
                        setSaleStatus={setSaleStatus}
                        stockStatus={stockStatus}
                        setStockStatus={setStockStatus}
                    />
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
