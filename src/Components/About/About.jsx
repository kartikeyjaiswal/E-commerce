import React from 'react';
import aboutCSS from './../About/About.module.css'
import aboutImg from './../../assets/about-one.png'

function About(){
    return(
        <div className={`${aboutCSS.about_wrapper} sections`}>
            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="about-img"/>
            </div>
            <div className={aboutCSS.about_content}>
                <small className="section__Heading">Maa Vaishno General Store</small>
                <h2 className="section__Title">A Touch of Elegance, A Taste of <span>Perfection</span></h2>
                <p>"A decade of trust, a lifetime of flavor. We're committed to providing a warm and welcoming shopping experience, offering a perfect blend of traditional values and modern convenience."</p>

                <p><h3>Visit us today and experience the best of materials!</h3>

                We invite you to explore our store and experience the best and
        finest that defines .
        Fresh, friendly, and fast.</p>
                <div className={aboutCSS.cards}>
                        <p>10+ <span>For 10+ years</span></p>
                        <p>500+ <span> Products</span></p>
                        <p>10,000 <span>10,000+ Happy Customers</span></p>
                </div>
            </div>
        </div>
    )
}
export default About