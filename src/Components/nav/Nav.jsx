import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import navCSS from './../nav/Nav.module.css';

function Nav() {
    const menu = useRef();
    const navbar = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.showNav);
    };

    const closeMenuOnLinkClick = () => {
        if (menu.current.classList.contains(navCSS.showNav)) {
            menu.current.classList.remove(navCSS.showNav);
        }
    };

    window.addEventListener('scroll', function () {
        if (this.window.scrollY > 100) {
            navbar.current.classList.add(navCSS.navbarScroll);
        } else {
            navbar.current.classList.remove(navCSS.navbarScroll);
        }
    });

    const bullet = {
        listStyleType: "none"
    };
    return (
        <div className={navCSS.nav_wrapper} ref={navbar}>
            <div className={navCSS.logo}>
                <a href="#"><span>Maa Vaishno General Store</span></a>
            </div>
            <ul ref={menu} style={bullet}>
               
                <li><Link to="/">Home</Link></li>
               
            {/* <li><Link to="/facility">Shop</Link></li> */}
                <li><Link to="/rooms">Stores</Link></li>
                <li><Link to="/testimonial">Testinomials</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>

            <div className={navCSS.Nav_btns}>
                <Link to="/contact">
                    <button className={navCSS.btn}>Cart 🛒</button>
                </Link>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
    );
}

export default Nav;