import React from 'react'
import './Home.scss'
import HeroImage from '../../assets/1.png'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-heder-section'>
                <img src={HeroImage} alt="Hero" className='hero-image' />
                <div className='home-desc'>
                    <h2>
                        Hire World's Best Talent
                    </h2>
                    <p>
                        SprintNext is a flexible platform to vet and hire a talent like software developers, designers and quality assurance engineers that match your time zone and work model. We are a team of experienced software developers and designers who have worked with startups and enterprises across the globe. We have a strong network of developers and designers who are ready to work with you.
                    </p>

                    <button className='home-button'>Hire the best</button>
                </div>
            </div>

        </div>
    )
}

export default Home