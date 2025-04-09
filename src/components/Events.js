import Nav from "./Nav";
import React from 'react';
import { motion } from 'framer-motion';
import './Events.css';

const Events = () => {
    const events = [
        {
            title: "TALENT X",
            date: "10/04/2025",
            time: "3:00 PM",
            venue: "New Auditorium",
            description: "Join us for an evening of talent and entertainment at Talent X!",
            imgSrc: "/talentxposter.png",
            link: "https://forms.gle/6WMeDX8oGm2ArVBZ9"
        },
        {
            title: "GLAM IT UP",
            date: "10/04/2025",
            time: "5:30 PM",
            venue: "New Auditorium",
            description: "Witness the most glamorous fashion night in town.",
            imgSrc: "/glamitup.jpg",
            link: "https://forms.gle/EXHBRX3L6o9f1CAH8"
        }
    ];

    return (
        
        <div className="event">
             <Nav />
            <h1>Our Events</h1>
            <div className="events">
                {events.map((event, index) => (
                    <motion.div 
                        key={index}
                        className={`event-card ${index % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="event-info">
                            <h2>{event.title}</h2>
                            <h5>Date: {event.date}</h5>
                            <h5>Time: {event.time}</h5>
                            <h5>Venue: {event.venue}</h5>
                            <p>{event.description}</p>
                            <a href={event.link} target="_blank" rel="noopener noreferrer" className="register-btn">Register</a>
                        </div>
                        <div className="image-container">
                            <img src={event.imgSrc} alt={event.title} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Events;
