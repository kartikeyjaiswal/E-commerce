import React from "react";
import { Link } from 'react-router-dom';
import roomsCSS from './../Rooms/Room.module.css'
function Rooms(){
    return(
        <div className={`${roomsCSS.Rooms_container} section`}>
            <small className="section__Heading">Where Quality Meets Class.</small>
            <h2 className="section__Title">Our Best <span>Collections</span></h2>

            <div className={roomsCSS.cards}>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front1}`}>
                            <button>Fruits</button>
                        </div>
                        <div className={roomsCSS.Card_Back}>
                            <div className={roomsCSS.price}>
                                {/* <p>Rs:1200/N</p> */}
                            </div>
                            <div className={roomsCSS.Card_cont}>
                                <h3>Fruits</h3>
                                <p> - Fresh Products </p>
                                <p> - Organic Farming </p>
                                <p> - Quality </p>
                                {/* <p> -  </p> */}
                            </div>
                            <div className={roomsCSS.BooKNow}>
                            {/* <Link to="./MensCollection/MensCollection">
                             */}
                    <Link to="/mens-collection">
                    <button className={roomsCSS.btn}>Order Now</button>
                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front2}`}>
                            <button>Vegetable</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back2}`}>
                            <div className={roomsCSS.price}>
                                {/* <p>Rs:1400/N</p> */}
                            </div>
                            <div className={roomsCSS.Card_cont}>
                                <h3>Vegetable</h3>
                                {/* <h3>Mens Collection</h3> */}
                                <p> - Fresh Fruits </p>
                                <p> - Organic Farming </p>
                                <p> - Quality </p>
                            </div>
                            <div className={roomsCSS.BooKNow}>
                            <Link>
                    <button className={roomsCSS.btn}>Order Now</button>
                    </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front3}`}>
                            <button>Dairy-Products</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back3}`}>
                            <div className={roomsCSS.price}>
                                {/* <p>Rs:1800/N</p> */}
                            </div>
                            <div className={roomsCSS.Card_cont}>
                                <h3>Dairy-Products</h3>
                                <p> - Fresh Products </p>
                                <p> - Organic Farming </p>
                                <p> - Quality </p>
                            </div>
                            <div className={roomsCSS.BooKNow}>
                            <Link to="/contact">
                    <button className={roomsCSS.btn}>Order Now</button>
                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front4}`}>
                            <button>Ketch-Up</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_4}`}>
                            <div className={roomsCSS.price}>
                                {/* <p>Rs:1900/N</p> */}
                            </div>
                            <div className={roomsCSS.Card_cont}>
                                <h3>Ketch-Up</h3>
                                <p> - Fresh Products </p>
                                <p> - Organic Farming </p>
                                <p> - Quality </p>
                            </div>
                            <div className={roomsCSS.BooKNow}>
                            <Link to="/contact">
                    <button className={roomsCSS.btn}>Order Now</button>
                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front5}`}>
                            <button>Flour</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back5}`}>
                            <div className={roomsCSS.price}>
                                {/* <p>Rs:1300/N</p> */}
                            </div>
                            <div className={roomsCSS.Card_cont}>
                                <h3>Flour</h3>
                                <p> - Fresh Products </p>
                                <p> - Organic Farming </p>
                                <p> - Quality </p>
                            </div>
                            <div className={roomsCSS.BooKNow}>
                            <Link to="/contact">
                    <button className={roomsCSS.btn}>Order Now</button>
                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front6}`}>
                            <button>Contact-us</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back6}`}>
                            <div className={roomsCSS.price}>
                                {/* <p>Rs:1200/N</p> */}
                            </div>
                            <div className={roomsCSS.Card_cont}>
                                <h3>Contact-Us</h3>
                                <p> - Handle Complaints </p>
                                <p> - Return Policy </p>
                                <p> - Exchange </p>
                            </div>
                            <div className={roomsCSS.BooKNow}>
                            <Link to="/contact">
                    <button className={roomsCSS.btn}>Contact</button>
                </Link>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Rooms