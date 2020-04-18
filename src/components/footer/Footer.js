import React from 'react'
import './Footer.css'
import phoneicon from './phoneicon.png'
import addressicon from './addressicon.png'
import mailicon from './mailicon.png'


const Footer = () => {
    return (
        <footer>
            <div className="contact-con">
                <h3>Contact Us</h3>
               <span className="span"><img src={addressicon} alt="address" /> <p>7, Adigun Street, badagry town, Badagry, Lagos State</p></span>
               <p> <img src={phoneicon} alt="icon"/> 09035793269, 08032345789</p>
               <p><img src={mailicon} alt="mail" /> Leemahstreats@gmail.com </p>
            </div>

            <div className="social-media">
                <a href="https://web.facebook.com" className="fa fa-facebook"><span className="foot-span">Link To Facebook</span></a>
                <a href="https://twitter.com/Olami_dipupo" className="fa fa-twitter"><span className="foot-span">Link To Twitter</span></a>
                <a href="instagram.com" className="fa fa-instagram"><span className="foot-span">Link To Instagram</span></a>
            </div>

            <div className="about-con">
                <h3>About Us</h3>
                <p>We bake great cakes and we deliver accross Lagos</p>
            </div>
           
        </footer>
    )
}

export default Footer 