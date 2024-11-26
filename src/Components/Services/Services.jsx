import React from "react";
import ServicesCSS from './../Services/Services.module.css'

function Services(){
    return(
        <div className={`${ServicesCSS.Service_wrapper} section`}>
            {/* <small className="section__Heading">Cargo</small> */}
                <h2 className="section__Title">Our Best <span>Groceries</span></h2>

            <div className={ServicesCSS.Services_cards}>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-e-commerce-line"></i>
                    <h3>Fresh Produce</h3>
                    <p>- Organic Fruits</p>
                    <p>- Seasonal Vegetabless</p>
                    <p>- Herbs & Spices</p>
                    
                </div>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-e-commerce-bed-line"></i>
                    <h3>Dairy Products</h3>
                    <p>- Fresh Milk</p>
                    <p>- Butter & Cheese</p>
                    <p>- Yogurt & Paneer</p>
                </div>

                <div className={ServicesCSS.Services_card}>

                    <h3>Daily Essentials</h3>
                    <p>- Cooking Oils</p>
                    <p>- Pulses & Grains</p>
                    <p>- Tea & Coffee</p>
             
                </div>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-e-commerce-bed-line"></i>
                    <h3>Snacks & Beverages</h3>
                    <p>- Healthy Snacks</p>
                    <p>- Soft Drinks</p>
                    <p>Ready-to-Eat Meals</p>
                </div>
            </div>

        </div>

    )
}
export default Services