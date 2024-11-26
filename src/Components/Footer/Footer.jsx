import React from "react";
import footerCSS from './../Footer/Footer.module.css'

function Footer() {
    return (
        <footer className={`${footerCSS.footer_wrapper} sectionss`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <h2>Maa Vaishno General Store</h2>
                    <p>"Ten years strong, and still serving our community with passion. We're more than just a grocery store; we're a part of your family, committed to providing exceptional service and quality products."Discover a sanctuary for relaxation, adventure, and memories that last a lifetime, offering a perfect retreat to unwind, reconnect, and experience life from a refreshing new perspective</p>
                </div>
            </div>

            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address: Phagwara</p>
                <p>Email: jaikartik5044@gmail.com</p>
                <p>phone: +91-8418019037</p>
            </div>
            <div className={footerCSS.FooterLinks}></div>
        </footer>
    )
}
export default Footer

