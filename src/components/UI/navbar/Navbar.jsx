import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import H5 from "../Typography/h5/H5";

// images&icons
import LOGO from "../../../images/SHOPPE.svg";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";
export const Navbar = () => {
    const [searchIsActive, setSearchIsActive] = useState(false);
    const handleSearch = () => {
        setSearchIsActive(!searchIsActive);
    };

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    useEffect(() => {
        document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
    }, [menuIsOpen]);
    return (
        <header>
            <div className={styles.Navbar}>
                <div className={styles.logoGroup}>
                    <Link to={"/"}>
                        <img className={styles.logo} src={LOGO} alt="logo" />
                    </Link>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.linkGroup}>
                        <Link className={styles.link} to={"/Shop"}>
                            <H5>Shop</H5>
                        </Link>
                        <Link className={styles.link} to={"/Blog"}>
                            <H5>Blog</H5>
                        </Link>
                        <Link className={styles.link} to={"/OurStory"}>
                            <H5>Our Story</H5>
                        </Link>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.interactive}>
                        <div className={styles.searchBlock} onClick={handleSearch}>
                            <AiOutlineSearch size={20} />
                        </div>
                        <div className={styles.cart}>
                            <AiOutlineShoppingCart size={20} />
                            <span className={styles.cartCount}>5</span>
                        </div>
                        <div className={styles.signBlock}>
                            <Link to={"/MyAccount"}>
                                <MdPersonOutline size={20} />
                            </Link>
                        </div>
                        <div onClick={handleMenu} className={styles.burger}>
                            {menuIsOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.searchField}>
                <input className={styles.searchInput} type="search" />
                <AiOutlineSearch size={20} />
            </div>
            <div className={styles.menu} style={menuIsOpen ? { height: "100vh" } : null}>
                <div className={styles.content} onClick={handleMenu}>
                    <div>
                        <Link className={styles.link} to={"/Shop"}>
                            <H5>Shop</H5>
                        </Link>
                        <Link className={styles.link} to={"/Blog"}>
                            <H5>Blog</H5>
                        </Link>
                        <Link className={styles.link} to={"/OurStory"}>
                            <H5>Our Story</H5>
                        </Link>
                        <Link className={styles.link} to={"/Contacts"}>
                            <H5>Contacts</H5>
                        </Link>
                        <Link className={styles.link} to={"/Privacy"}>
                            <H5>Terms</H5>
                        </Link>
                        <Link className={styles.link} to={"/Shipping"}>
                            <H5>Shipping and return</H5>
                        </Link>
                    </div>
                    <div className={styles.menuSeparator}></div>
                    <div>
                        <div>
                            <Link className={styles.myAcc} to={"/MyAccount"}>
                                <MdPersonOutline size={20} />
                                My account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
