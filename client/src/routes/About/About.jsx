import React from 'react'
import HeroImage from '../../assets/2.png'
import './About.scss'

const About = () => {
    return (
        <div className='about-container'>   
            <div className='about-header-section'>
                <div className='about-desc'>
                    <h1>
                        About&nbsp;
                        <span style={{ 'color': '#004AAD' }}>
                            Us
                        </span>
                    </h1>
                    <p> 
                        We are an innovative IT company dedicated to providing cutting-edge solutions that empower businesses to achieve their goals. Our team of skilled professionals is committed to delivering top-notch services and exceeding our clients' expectations.
                    </p>

                    <button className='about-button'>Meet our team</button>
                    <div className='demographics'>
                        <div className='demographic-item'>
                            <span>200+</span>
                            <span>Projects Done</span>
                        </div>
                        <div className='demographic-item'>
                            <span>500+</span>
                            <span>Team Members</span>
                        </div>
                        <div className='demographic-item'>
                            <span>1000+</span>
                            <span>Happy Reviews</span>
                        </div>
                    </div>
                </div>
                <img src={HeroImage} alt="Hero" className='hero-image' />
            </div>
        </div>
    )
}

export default About