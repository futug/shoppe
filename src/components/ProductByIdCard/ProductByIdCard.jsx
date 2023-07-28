import React, { useState, useEffect, useRef } from "react";
import styles from "./ProductByIdCard.module.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../feauters/cart/cartSlice";

import H2 from "../UI/Typography/h2/H2";
import H4 from "../UI/Typography/h4/H4";
import H5 from "../UI/Typography/h5/H5";
import AddToCart from "../UI/buttons/addButton/AddToCart";

import { AiFillStar, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiMailSend, BiSolidShareAlt } from "react-icons/bi";

const ProductByIdCard = (props) => {
    const dispatch = useDispatch();
    const [shownImage, setShownImage] = useState(props.images[0]?.url);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1);

    const handleIncraseQuantity = () => {
        setProductQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecraseQuantity = () => {
        if (productQuantity > 1) {
            setProductQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...props.fullProduct, quantity: productQuantity }));
    };
    const handleScrollBarClick = (e) => {
        if (scrollTrack.current && !scrollThumb.current.contains(e.target)) {
            setCurrentIndex((prevIndex) => {
                const validImages = props.images.filter((image) => image?.url); // Отфильтровываем только допустимые элементы
                const nextIndex = prevIndex + 1;
                if (nextIndex >= validImages.length) {
                    return 0;
                }
                return nextIndex;
            });
        }
    };

    useEffect(() => {
        dispatch(addToCart([]));
    }, [dispatch]);

    useEffect(() => {
        setShownImage(props.images[currentIndex]?.url);
    }, [props.images, currentIndex]);

    const scrollTrack = useRef();
    const scrollThumb = useRef();
    const handleImageClick = (e) => {
        const srcAttribute = e.target.getAttribute("src");
        const imageIndex = e.target.getAttribute("index");
        setShownImage(srcAttribute);
        setCurrentIndex(imageIndex);
    };
    const scrollThumbWidth = 100 / Math.max(props.images?.length, 1);
    useEffect(() => {
        setShownImage(props.images[currentIndex]?.url);
    }, [props.images, currentIndex]);

    console.log(props.fullProduct);

    //swipes

    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        setTouchEndX(e.changedTouches[0].clientX);
    };
    useEffect(() => {
        const minSwipeDistance = 10;

        const swipeDistance = touchEndX - touchStartX;

        if (swipeDistance > minSwipeDistance) {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.images.length - 1 : prevIndex - 1));
        } else if (swipeDistance < -minSwipeDistance) {
            setCurrentIndex((prevIndex) => (prevIndex === props.images.length - 1 ? 0 : prevIndex + 1));
        }
    }, [touchStartX, touchEndX]);

    return (
        <div className={styles.productCard}>
            <div className={styles.productCardLeftSide}>
                <div className={styles.productImagesWraper}>
                    <div className={styles.productImagesThumbs}>
                        {props.images?.map((image, index) => {
                            if (image?.url) {
                                return (
                                    <div className={styles.productImagesThumb} key={image?.name}>
                                        <img onClick={handleImageClick} index={index} className={styles.productThumb} src={image?.url} alt="product thumb" />
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div>
                        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className={styles.productImagesMain}>
                            <img className={styles.productImageMain} src={shownImage} alt="full product" />
                        </div>
                        <div onClick={handleScrollBarClick} ref={scrollTrack} className={styles.productImagesScrollTrack}>
                            <div
                                ref={scrollThumb}
                                className={styles.productImagesScrollThumb}
                                style={{
                                    width: `${scrollThumbWidth}%`,
                                    transform: `translateX(${scrollThumbWidth * currentIndex * props.images.length}%)`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.productInfo}>
                <div className={styles.productTitle}>
                    <H2>{props.fullProduct?.attributes?.title}</H2>
                </div>
                <div className={styles.productPrice}>
                    <H4>$ {props.fullProduct?.attributes?.price}</H4>
                    <div className={styles.productShare}>
                        <BiSolidShareAlt size={15} />
                    </div>
                </div>
                <div className={styles.productRating}>
                    <div className={styles.productRatingStars}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                    </div>
                    <div className={styles.productRatingReviews}>1 customer review</div>
                </div>
                <div className={styles.productDescription}>
                    <H5>{props.fullProduct?.attributes?.descrtiption}</H5>
                </div>

                <div className={styles.productToCartControls}>
                    <div className={styles.productQuantity}>
                        <button onClick={handleDecraseQuantity}>
                            <AiOutlineMinus />
                        </button>
                        <p>{productQuantity}</p>
                        <button onClick={handleIncraseQuantity}>
                            <AiOutlinePlus />
                        </button>
                    </div>

                    <AddToCart onClick={handleAddToCart}>add to cart</AddToCart>
                </div>

                <div className={styles.productSocialMedia}>
                    <div>
                        <AiOutlineHeart className={styles.socialIco} />
                    </div>
                    <div className={styles.socialMediaSeparator}></div>
                    <div className={styles.prosuctSocialMediaLinks}>
                        <a target="_blank" rel="noreferrer" href="mailto:2NvzL@example.com">
                            <BiMailSend size={18} className={styles.socialIco} />
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

                <div className={styles.productAttributes}>
                    SKU: <span className={styles.productSecondary}>{props.fullProduct?.id}</span>
                </div>
                <div className={styles.productCategories}>
                    Categories: <span className={styles.productSecondary}>{props.fullProduct?.attributes?.category.data.attributes.Name}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductByIdCard;
