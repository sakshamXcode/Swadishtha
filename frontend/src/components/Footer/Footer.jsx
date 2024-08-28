import { assets } from '../../assets/assets';
import './Footer.css';
const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img style={{width:400}} src={assets.logo} alt='' />
                    <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </p>
            </div>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="fb" />
                <img src={assets.twitter_icon} alt="X" />
                <img src={assets.linkedin_icon} alt="linkedIn" />
            </div>
            <div className="footer-content-centre">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch :</h2>
                <ul>
                    <li>+91-8081308505</li>
                    <li>contact@Swadishtha.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
          Copyright 2024 @ Swadishtha.com -All Rights Reserved. 
        </p>
    </div>
  )
}

export default Footer