import React from "react";
import testimonialCSS from './../Testimonials/Testimonial.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Parallax } from "swiper/modules";

import img4 from './../../assets/fi1.png';
import img2 from './../../assets/fi2.png';
import img3 from './../../assets/fi3.png';

function Testimonial() {
    return (

        <div id="testimonials" className={`${testimonialCSS.testimonial_wrapper} section`}>
            <small className="section__Heading">Testimonials</small>
            <h2 className="section__Title">What Our Clients <span>Says</span></h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                
                speed={1500}
                modules={[Autoplay]}
                className={testimonialCSS.swiper}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img4} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>Amarjit kumar <span>Customer</span></h3>
                            <p>"Exceptional service! The quality of dairy products is excellent, and I love the convenience of same-day delivery. It’s great to see such reliability from a local e-commerce store. Keep up the great work!"

</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img3} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>kamlesh pandey <span>Customer</span></h3>
                            <p>"This grocery site has saved me so much time! The variety of products is fantastic, and their deals are unbeatable. Customer support is also very responsive. A one-stop solution for all my kitchen needs!"

</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img2} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>Sunil Upadhyay<span>Customer</span></h3>
                            <p>"I’ve been ordering groceries from here for over a year, and it’s been amazing. The fresh fruits and vegetables are always top-notch, and delivery is always on time. Highly recommend this platform for hassle-free shopping!"

</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonial;
