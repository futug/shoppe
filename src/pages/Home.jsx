import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../feauters/products/productsSlice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { productsList } = useSelector((state) => state.products);

    console.log(productsList);

    return <div>Home</div>;
};

export default Home;
