import React, { useEffect } from "react";
import styles from "./RandomProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../feauters/products/productsSlice";
import { addToCart } from "../../feauters/cart/cartSlice";
import H2 from "../UI/Typography/h2/H2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const RandomProducts = () => {
    const { productsList } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const getRandomProducts = (products, count) => {
        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        return shuffledProducts.slice(0, count);
    };

    const randomProducts = getRandomProducts(productsList, 3);

    return (
        <div>
            <div className={styles.title}>
                <H2>Similar Items</H2>
            </div>
            <div className={styles.productsWrapper}>
                <div className={styles.products}>
                    {randomProducts.map((product) => (
                        <div className={styles.product} key={product.id}>
                            <Link to={"/Products/" + product.id}>
                                <div className={styles.productImageWrapper}>
                                    <img className={styles.productImage} src={product.attributes.goldImage.data.attributes.url} alt="product" />
                                </div>
                            </Link>
                            <div className={styles.productInfo}>
                                <div className={styles.productNameWrapper}>
                                    <div className={styles.productName}>{product.attributes.title}</div>
                                    <AiOutlineShoppingCart size={20} onClick={() => dispatch(addToCart(product))} />
                                </div>
                                <div className={styles.productPrice}>${product.attributes.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to={"/Shop"}>
                    <div className={styles.continueLink}>
                        <p>Continue Shopping</p>
                        <BsChevronRight />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default RandomProducts;
