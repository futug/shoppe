import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../feauters/productById/productByIdSlice";
import { createBreakpoint } from "react-use";

//styles
import styles from "./ProductById.module.css";
import ProductByIdCard from "../components/ProductByIdCard/ProductByIdCard";
import ProductInformDesc from "../components/ProductInformDesc/ProductInformDesc";

const useBreakpoint = createBreakpoint({ S: 425, M: 576, L: 992, XL: 1200 });

const ProductById = () => {
    const breakpoint = useBreakpoint();

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);

    const { productById, isLoading, isRejected } = useSelector((state) => state.productById);

    const images = [
        productById.attributes?.goldImage.data.attributes,
        productById.attributes?.silverImage.data?.attributes,
        productById.attributes?.roseGoldImage.data?.attributes,
    ].filter((image) => image !== null && image !== undefined);

    const fullProduct = productById;
    console.log(fullProduct);
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
            <div className={styles.ProductById}>
                <ProductByIdCard images={images} fullProduct={fullProduct} />
                <div className={styles.seporator}></div>
                {breakpoint !== "S" ? <ProductInformDesc fullProduct={fullProduct} /> : null}
            </div>
        </div>
    );
};

export default ProductById;
