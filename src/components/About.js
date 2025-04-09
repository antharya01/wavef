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
                <h1>ABOUT US</h1>
                <p>
                Where creativity sparks like wildfire and every heartbeat echoes with passion, a celebration like no other emerges at NIT Durgapur — Wavecraze!
      </p>
      <p>
Radio NITroz, the Official Entertainment Club of NIT Durgapur proudly presents Wavecraze 2025, a symphony of expression, a carnival of colors, and a gathering of dreamers, performers, and believers. Within this whirlwind of excitement, the campus transforms into a stage where every talent finds its voice and every soul finds its rhythm.
</p>    <p>
As the curtain rises, Wavecraze unveils a treasure trove of surprises, thrilling events, and unforgettable memories. Picture yourself, swaying to soulful symphonies at musical nights to cheering through the glitz and glamour of stunning ramp walks as Wavecraze brings together an unforgettable blend of performances, competitions, and showcases designed to stir the senses and celebrate the human spirit.
</p>   <p>
The countdown has begun. 
Stay tuned cause the wave is about to hit!
</p>
            </div>
            <div className="about-image">
                <img src="/waveposter.jpg" alt="About" />
            </div>
        </div>
    );
};

export default About;
