import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../feauters/products/productsSlice";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

//UI
import { AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import H1 from "../components/UI/Typography/h1/H1";

//Redux states
import { getSlides } from "../feauters/salesSlider/salesSliderSlice";

//Styles
import styles from "./Home.module.css";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getSlides());
    }, [dispatch]);

    const { productsList, isLoading, isRejected } = useSelector((state) => state.products);
    const { salesSliderList } = useSelector((state) => state.salesSlider);

    const getRandomProducts = (products, count) => {
        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        return shuffledProducts.slice(0, count);
    };

    const randomProducts = getRandomProducts(productsList, 6);

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
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {salesSliderList.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={styles.slideWrapper}>
                            <img className={styles.slideImage} src={slide.attributes.url} alt="product example" />
                            <div className={styles.slideContent}>
                                <p className={styles.slideTitle}>Get Our Special</p>
                                <p className={styles.slideDescription}>From $ 295</p>
                                <Link className={styles.slideButtonWrapper} to={"/Shop"}>
                                    <button className={styles.slideButton}>View Products</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.productsTitleGroup}>
                <H1>Shop the latest</H1>
                <Link to={"/Shop"}>
                    <p className={styles.productsLink}>View All</p>
                </Link>
            </div>
            <div className={styles.productsWrapper}>
                {randomProducts.map((product) => (
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
        </div>
    );
};

export default Home;
