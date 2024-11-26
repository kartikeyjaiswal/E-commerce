import {useEffect} from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/nav/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Rooms from './Components/Rooms/Room';
import Testimonial from './Components/Testimonials/Testimonial';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';  // Import Contact component
import MensCollection from './Components/MensCollection/MensCollection';


function App() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time){
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        }
    },[]);


    return (
        <Router>
            <Nav />
            <Routes>
                {/* Route for the home page */}
                <Route
                    path="/"
                    element={
                        <>
                            <div id="home">
                                <Header />
                            </div>
                            <div id="home">
                                <About />
                            </div>
                            <div id="home">
                                <Rooms />
                            </div>
                            
                           
                            <div id="home">
                                <Nav />
                            </div>
                            <div id="home">
                                <Services />
                            </div>
                            <div id="home">
                                <Testimonial />
                            </div>

                            <div id="home">
                                <Footer />
                            </div>
                        </>
                    }
                />

                {/* Route for the contact page */}
                <Route path="/about" element={<About />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/facility" element={<Services />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="/mens-collection" element={<MensCollection />} />
            </Routes>
        </Router>
    );
}

export default App;
