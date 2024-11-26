import React from "react";
import headerCSS from './../Header/Header.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Autoplay ,Parallax} from "swiper/modules";

function Header(){
    return(
        <div className={headerCSS.header_wrapper}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                className={headerCSS.swiper}
                autoplay={{
                    delay:2500,
                }}
                Parallax={true}
                speed={1500}
                modules={[Autoplay , Parallax]}
             >
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide}  ${headerCSS.slide1}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200px">Maa Vaishno General Store</small>
                            <h2 data-swiper-parallax="-400px">Your Neighborhood<span> Grocer,</span> committed to<br />
                               <span>quality and</span>convenience.
                            </h2>
                            <p data-swiper-parallax="-600px">call Now <span>8418019037</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide}  ${headerCSS.slide2}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200px"> Maa Vaishno General Store</small>
                            <h2 data-swiper-parallax="-400px">Your Neighborhood<span> Grocer,</span> committed to<br />
                               <span>quality and</span>convenience.
                            </h2>
                            <p data-swiper-parallax="-600px">call Now <span>8418019037</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide}  ${headerCSS.slide3}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200px">Maa Vaishno General Store</small>
                            <h2 data-swiper-parallax="-400px">Your Neighborhood<span> Grocer,</span> committed to<br />
                               <span>quality and</span>convenience.
                            </h2>
                            <p data-swiper-parallax="-600px">call Now <span>8418019037</span></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header