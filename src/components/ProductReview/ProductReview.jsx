import React from "react";
import styles from "./ProductReview.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ProductReview = (props) => {
    const reviews = [
        {
            id: 0,
            name: "Mary Olsen",
            raiting: 3,
            reviewBody:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quaerat odio minus quod perspiciatis aut a. Adipisci minus quod fugiat ipsum quas quaerat? Dolores in exercitationem, perferendis minima veritatis explicabo!",
            createdAt: "2023-07-23T13:16:31.650Z",
        },
        {
            id: 1,
            name: "Barb Smith",
            raiting: 5,
            reviewBody:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quaerat odio minus quod perspiciatis aut a. Adipisci minus quod fugiat ipsum quas quaerat? Dolores in exercitationem, perferendis minima veritatis explicabo!",
            createdAt: "2023-04-23T13:16:31.650Z",
        },
        {
            id: 3,
            name: "Megan Olive",
            raiting: 4,
            reviewBody:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quaerat odio minus quod perspiciatis aut a. Adipisci minus quod fugiat ipsum quas quaerat? Dolores in exercitationem, perferendis minima veritatis explicabo!",
            createdAt: "2023-02-15T13:16:31.650Z",
        },
    ];

    const formatDate = (isoDate) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(isoDate).toLocaleDateString("en-US", options);
    };

    const renderEmptyStars = (rating) => {
        const fullScore = 5;
        const stars = [];

        for (let i = 0; i < rating; i++) {
            stars.push(<AiFillStar key={i} size={18} className={styles.starIco} />);
        }

        for (let i = rating; i < fullScore; i++) {
            stars.push(<AiOutlineStar key={i} size={18} className={styles.starIco} />);
        }

        return stars;
    };
    return (
        <div className={styles.productReviews}>
            <div className={styles.productReviewsField}>
                <p className={styles.productReviewsTitle}>
                    {reviews.length} Reviews for {props.fullProduct?.attributes?.title}
                </p>

                {reviews.map((review, index) => {
                    return (
                        <div className={styles.productReviewItem} key={review.id}>
                            <div className={styles.productReviewCardTitle}>
                                <p className={styles.productReviewCardName}>{review.name}</p>
                                <p className={styles.productReviewCardDate}>{formatDate(review.createdAt)}</p>
                            </div>
                            <p className={styles.productReviewCardRaiting}> {renderEmptyStars(review.raiting)}</p>
                            <div className={styles.productReviewCardBody}>
                                <p>{review.reviewBody}</p>
                                {index < reviews.length - 1 && <div className={styles.productReviewCardseparator}></div>}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div>
                <div className={`${styles.productReviewsTitle} ${styles.rightTitle}`}>
                    <p>Add a Review</p>
                    <p className={styles.productReviewsSubtitle}>Your email address will not be published. Required fields are marked *</p>
                </div>

                <form className={styles.productReviewsForm} action="#">
                    <div className={styles.productReviewsInputs}>
                        <div className={styles.productReviewsFormField}>
                            <textarea className={`${styles.productInputForReview} ${styles.textarea}`} placeholder="Your review*" id="Review"></textarea>
                        </div>
                        <div className={styles.productReviewsFormField}>
                            <input className={styles.productInputForReview} type="text" placeholder="Enter your name*" />
                        </div>
                        <div className={styles.productReviewsFormField}>
                            <input className={styles.productInputForReview} type="email" placeholder="Enter your email*" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="remember me" className={styles.remember}>
                            <input type="checkbox" id="remember me" />
                            <span>Save my name, email, and website in this browser for the next time I comment</span>
                        </label>
                    </div>
                    <div className={styles.rateField}>
                        <p className={styles.rateFieldTitle}>Your Rating*</p>
                        <div className={styles.rateFieldStars}>
                            <AiOutlineStar size={18} />
                            <AiOutlineStar size={18} />
                            <AiOutlineStar size={18} />
                            <AiOutlineStar size={18} />
                            <AiOutlineStar size={18} />
                        </div>
                    </div>
                    <div className={styles.productReviewsSubmit}>
                        <button type="submit" onClick={(e) => e.preventDefault()}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductReview;
