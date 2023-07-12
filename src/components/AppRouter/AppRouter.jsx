import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import { Contacts } from "../../pages/Contacts";
import MyAccount from "../../pages/MyAccount";
import Shop from "../../pages/Shop";
import Blog from "../../pages/Blog";
import OurStory from "../../pages/OurStory";
import Privacy from "../../pages/Privacy";
import ShippingAndReturn from "../../pages/ShippingAndReturn";
import PasswordRefuse from "../../pages/PasswordRefuse";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/OurStory" element={<OurStory />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/Shipping" element={<ShippingAndReturn />} />
            <Route path="/Restore-the-password" element={<PasswordRefuse/>} />
        </Routes>
    );
};

export default AppRouter;
