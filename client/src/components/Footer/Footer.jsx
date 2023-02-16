import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-left'>
                    <h3>Get in touch</h3>
                    <p>Feel free to contact us for any questions or suggestions</p>

                    <p>Phone: +1 234 567 890</p>
                    <p>Email:
                        <a href='mailto:abdullahan1928@gmail.com' className='social-mail'>
                            abdullahan1928@gmail.com
                        </a>
                    </p>
                </div>

                <div className='footer-center'>
                    <h3>Our Social Media</h3>
                    <a href='https://www.facebook.com/abdullahan1928' target='_blank' rel='noreferrer' className='social-links'>
                        Facebook
                    </a>
                    <a href='https://www.instagram.com/abdullahan1928/' target='_blank' rel='noreferrer' className='social-links'>
                        Instagram
                    </a>
                    <a href='https://www.linkedin.com/in/abdullahan1928/' target='_blank' rel='noreferrer' className='social-links'>
                        Linkedin
                    </a>
                    <a href='https://twitter.com/abdullahan1928' target='_blank' rel='noreferrer' className='social-links'>
                        Twitter
                    </a>
                </div>

                <div className='footer-right'>
                    {/* <div className='footer-right-text'> */}
                    <h3>Subscribe to our newsletter</h3>
                    <p>Get the latest news and updates</p>
                    <div className='footer-right-input-container'>
                        <input type='text' placeholder='Enter your email' className='footer-right-input' />
                        <button className='footer-right-input-button'>Subscribe</button>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div >
    )
}

export default Footer