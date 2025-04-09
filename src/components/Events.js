import React from 'react';
import { motion } from 'framer-motion';
import './Events.css';

const Event = () => {
    const events = [
        {
            title: "Talent X",
            date: "29/03/2025",
            time: "6:00 PM",
            venue: "Lords",
            description: "Join us for an evening of talent and entertainment at Talent X!",
            imgSrc: "rcomedynight.jpg",
            link: "https://forms.gle/sampleTalentX"
        },
        {
            title: "Comedy Night",
            date: "30/03/2025",
            time: "7:00 PM",
            venue: "Grand Hall",
            description: "A night of laughter with some of the best comedians.",
            imgSrc: "rcomedynight.jpg",
            link: "https://forms.gle/sampleComedyNight"
        },
        {
            title: "Glam It Up",
            date: "31/03/2025",
            time: "8:00 PM",
            venue: "Fashion Arena",
            description: "Witness the most glamorous fashion night in town.",
            imgSrc: "rcomedynight.jpg",
            link: "https://forms.gle/sampleGlamItUp"
        },
        {
            title: "Movie Mystic",
            date: "01/04/2025",
            time: "9:00 PM",
            venue: "Open Air Theater",
            description: "A special screening of classic and new films.",
            imgSrc: "rcomedynight.jpg",
            link: "https://forms.gle/sampleMovieMystic"
        }
    ];

    return (
        <div className="event">
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

export default Event;