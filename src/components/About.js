import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const currentRef = aboutRef.current; // Store reference in a variable
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.2 }
        );
    
        if (currentRef) {
            observer.observe(currentRef);
        }
    
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    

    return (
        <div className="about" ref={aboutRef}>
            <div className="about-content">
                <h1>About Us</h1>
                <p>
                    
                WAVECRAZE was nothing short of a wild ride—an explosion of energy, creativity, and pure excitement! Every moment was packed with high-octane events, mind-blowing performances, and a crowd that brought unmatched energy. From epic battles to jaw-dropping acts, it was the kind of festival that left everyone craving more. The hype, the passion, the vibes—WAVECRAZE had it all.
                </p>
                <p>
              Radio Nitroz proudly presents the Aftermovie of WAVECRAZE—a celebration of madness immortalized in every frame! Relive the chaos, the passion, and the pure fun as we rewind to the moments that made WAVECRAZE legendary. Watch the Aftermovie and let the vibe hit you like never before!
                </p>
            </div>
            <div className="about-image">
                <img src="/bgimg2.jpg" alt="About" />
            </div>
        </div>
    );
};

export default About;
