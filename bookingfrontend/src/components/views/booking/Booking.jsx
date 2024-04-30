import React, { useState } from 'react';
import BookingForm from './BookingForm';

const Booking = () => {
    // State för att hålla formulärdata
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        date: '',
        location: ''
    });

    // Funktion för att hantera ändringar i formuläret
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    // Funktion för att hantera bokningsknappens klickhändelse
    const handleBookingSubmit = (e) => {
        e.preventDefault();
        // Här kan du skicka bokningsdata till backend och hantera resultatet
        console.log('Bokningsdata:', bookingData);
        // Återställ formuläret efter att bokningen är skickad
        setBookingData({
            name: '',
            email: '',
            date: '',
            location: ''
        });
    };

    return (
        <div>
            <h2>FellowBots Simulator Booking</h2>
            <p>The future of driving licenses</p>
            {/* Bokningsformulär */}
            <BookingForm
                bookingData={bookingData}
                onInputChange={handleInputChange}
                onBookingSubmit={handleBookingSubmit}
            />
        </div>
    );
};

export default Booking;
