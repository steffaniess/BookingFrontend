import React from "react";
import "./Body.css";
import Footer from "../footer/Footer";
import Home from "../../views/home/Home";
import About from "../../views/about/About";
import Booking from "../../views/booking/Booking";
import Contact from "../../views/contact/Contact";

const Body = ({page}) => {
    let content;

    if(page  === 'home') {
        content = <Home />;

      } else if (page === 'about') {
        content = <About />;
      }

      else if (page === 'booking') {
        content = <Booking />;
      }

      else if (page === 'contact') {
        content = <Contact />;
      }

    return (
        <div className="home">
         
            <Body>
                {content}
            </Body>
            <Footer />
        </div>
        
    );
}

export default Body;