// Import React and CSS 
import React from "react"; 
import "./Body.css";

// Import child components
import Footer from "../footer/Footer";
import Home from "../../views/home/Home";
import About from "../../views/about/About";
import Booking from "../../views/booking/Booking";
import Contact from "../../views/contact/Contact";

// Body component to render different page content  
const Body = ({page}) => {

  // Determine which page content to render
  let content;

  if(page  === 'home') {
    content = <Home />;

  } else if (page === 'about') {
    content = <About />;
  
  } else if (page === 'booking') {
    content = <Booking />;
  
  } else if (page === 'contact') {
    content = <Contact />;
  }

  // Render page content and footer 
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
