import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../feauters/products/productsSlice";
import styles from "./Home.module.css";
import { AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import H1 from "../components/UI/Typography/h1/H1";
import { Link } from "react-router-dom";
import { getSlides } from "../feauters/salesSlider/salesSliderSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getSlides());
    }, [dispatch]);

    const { productsList } = useSelector((state) => state.products);
    const { salesSliderList } = useSelector((state) => state.salesSlider);

    const getRandomProducts = (products, count) => {
        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        return shuffledProducts.slice(0, count);
    };

    const randomProducts = getRandomProducts(productsList, 6);

    console.log(salesSliderList);

    return (
        <div>
            {/* <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                {salesSliderList.data.map((slide) => (
                    <SwiperSlide>
                        <div className={styles.slideWrapper}>
                            <img className={styles.slideImage} src={slide.attributes.url} alt="product example" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> */}

            <div className={styles.productsTitleGroup}>
                <H1>Shop the latest</H1>
                <Link to={"/Shop"}>
                    <p className={styles.productsLink}>View All</p>
                </Link>
            </div>
            <div className={styles.productsWrapper}>
                {randomProducts.map((product) => (
                    <div className={styles.productCard} key={product.id}>
                        <Link to={"/Products/" + product.id}>
                            <div className={styles.productImageWrapper}>
                                {!product.attributes.saleAction === null ? <div>{product.attributes.saleAction}</div> : null}
                                <img className={styles.productImage} src={product.attributes.goldImage.data.attributes.url} alt="product" />
                                <div className={styles.interactiveOverlay}>
                                    <div className={styles.interactiveOverlayIcons}>
                                        <div className={styles.interactiveButtons}>
                                            {" "}
                                            <AiOutlineShoppingCart size={25} />
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
                        </Link>
                        <div className={styles.productTitle}>{product.attributes.title}</div>
                        <div className={styles.productPrice}>From $ {product.attributes.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
