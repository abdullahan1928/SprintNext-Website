import React from 'react'
import HeroImage from '../../assets/3.png'
import './Services.scss'

const Services = () => {
    return (
        <div className='services-container'>
            <div className='services-heder-section'>
                <div className='services-left-header'>
                    <img src={HeroImage} alt="Hero" className='hero-image' />
                </div>
                <div className='services-right-header'>
                    <div className='services-desc'>
                        <h1>
                            <span style={{ 'color': '#004AAD' }}>
                                Services&nbsp;
                            </span>
                            we provide
                        </h1>
                        <p>
                            Our team of experienced developers, designers, and project managers works closely with our clients to deliver custom software solutions that meet their unique business needs.
                        </p>
                    </div>
                    <img src={HeroImage} alt="Hero" className='hero-image' />
                </div>
            </div>
        </div>
    )
}

export default Services