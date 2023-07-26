import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Navbar.module.css";
import H5 from "../Typography/h5/H5";
import AddToCart from "../buttons/addButton/AddToCart";

// images&icons
import LOGO from "../../../images/SHOPPE.svg";
import { AiFillCheckCircle, AiOutlineClose, AiOutlineMenu, AiOutlineMinus, AiOutlinePlus, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const [searchIsActive, setSearchIsActive] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const cartMenuRef = useRef();
    const cartIcoRef = useRef();

    const handleCart = () => {
        setCartIsOpen(!cartIsOpen);
    };

    const handleSearch = () => {
        setSearchIsActive(!searchIsActive);
    };

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    useEffect(() => {
        document.body.style.overflow = menuIsOpen || cartIsOpen ? "hidden" : "auto";

        const handleOutsideClick = (event) => {
            if (cartMenuRef.current && !cartMenuRef.current.contains(event.target) && cartIcoRef.current && !cartIcoRef.current.contains(event.target)) {
                setCartIsOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menuIsOpen, cartIsOpen]);

    const items = cart?.items;

    const totalQuantity = items.slice(1).reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const totalPrice = items.reduce((total, item) => {
        if (item && item.attributes && item.attributes.price) {
            const itemTotal = item.quantity * item.attributes.price;
            return total + itemTotal;
        }
        return total;
    }, 0);

    console.log(totalQuantity);

    return (
        <header>
            <div className={styles.Navbar}>
                <div ref={cartMenuRef} className={styles.cartWrapper} style={{ transform: cartIsOpen ? "translateX(0)" : "translateX(100%)" }}>
                    <div className={styles.cartContent}>
                        <div className={styles.cartHeader}>
                            <div className={styles.cartHeaderTitleGroup}>
                                <div className={styles.cartTitle}>Shopping Bag</div>
                                <div className={styles.cartClose} onClick={handleCart}>
                                    <AiOutlineClose size={15} />
                                </div>
                            </div>
                            <p className={styles.totalQuantity}>{totalQuantity} items</p>
                        </div>

                        <div className={styles.cartBody}>
                            {items.map((item) => {
                                if (!item || !item.attributes) {
                                    return null;
                                }

                                return (
                                    <div key={item.id} className={styles.cartItem}>
                                        <div className={styles.cartItemImageWrapper}>
                                            <img className={styles.cartItemImage} src={item.attributes.goldImage?.data?.attributes?.url} alt="" />
                                        </div>
                                        <div className={styles.cartItemDescription}>
                                            <div>
                                                {" "}
                                                <div className={styles.cartItemTitle}>{item.attributes.title}</div>
                                                <div className={styles.cartItemPrice}>$ {item.attributes.price}</div>
                                            </div>
                                            <div className={styles.cartItemQuantity}>
                                                QTY :
                                                <button>
                                                    <AiOutlineMinus size={8} />
                                                </button>
                                                {item.quantity}
                                                <button>
                                                    <AiOutlinePlus size={8} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className={styles.cartItemRemove}>
                                            <AiOutlineClose size={10} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.cartFooter}>
                            <hr />
                            <div className={styles.cartTotal}>
                                <p>Subtotal ({totalQuantity})</p>
                                <p>$&nbsp;{totalPrice}</p>
                            </div>
                            <div>
                                <Link to={"/Cart"}>
                                    <AddToCart>View Cart</AddToCart>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <div ref={cartIcoRef} onClick={handleCart} className={styles.cart}>
                            <AiOutlineShoppingCart size={20} />
                            {totalQuantity === 0 ? null : <span className={styles.cartCount}>{totalQuantity}</span>}
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
                <div className={styles.cartAddSign}>
                    <div className={styles.cartAddSignContent}>
                        <span>
                            <AiFillCheckCircle color="#a18a68" size={20} />
                        </span>
                        The item added to your Shopping bag.
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
