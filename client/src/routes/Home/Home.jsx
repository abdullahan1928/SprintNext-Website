import React from 'react'
import './Home.scss'
import HeroImage from '../../assets/1.png'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-header-section'>
                <div className='home-desc'>
                    <h1>
                        Hire World's Best Talent
                        <br />
                        Within&nbsp;
                        <span style={{ 'color': '#004AAD' }}>
                            24 Hours
                        </span>
                    </h1>
                    <p>
                        Our team of experienced developers, designers, and project managers
                        works closely with our clients to deliver custom software solutions that
                        meet their unique business needs.
                    </p>

                    <button className='home-button'>Why Choose Us?</button>
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

export default Home