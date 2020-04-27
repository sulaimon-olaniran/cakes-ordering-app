import React from 'react'
import './Footer.css'
import phoneicon from './phoneicon.png'
import addressicon from './addressicon.png'
import mailicon from './mailicon.png'


const Footer = () => {
    return (
        <footer>
            <div className="about-con">
                <h3>About Us</h3>
                <div className="about-message">
                    <p>We Make some of the best cakes and cup cakes,
                        we're currently only available in Lagos as we
                        are just starting up as a cake shop, with
                        your support and patronizing, we hope to grow into
                        a larger business in due .
                    </p>
                    <hr/>
                    <p>We dont have ready made cakes, cakes are made 
                        based on orders placed
                    </p>
                  <hr/>
                    <p>Below you can find ways to contact us, either by 
                        our address, email address or social medias.
                        Also follow us on our social medias for latest news
                        and updates.
                    </p>
                    <hr/>

                    <p>Thank You</p>
                </div>
            </div>

            <div className="contact-con">
                <h3>Contact Us</h3>
                <span className="span"><img src={addressicon} className="address-icon" alt="address" /> <p>7, Adigun Street, badagry town, Badagry, Lagos State</p></span>
                <p> <img src={phoneicon} alt="icon" /> 09035793269, 08032345789</p>
                <p><img src={mailicon} alt="mail" /> Leemahstreats@gmail.com </p>
            </div>

            <div className="chat-con">
                <h3>Chat with us</h3>
                <div className="chat-icons">
                    <i className="fa fa-facebook-f" style={{ fontSize: "48px", color: "lightblue" }}></i>
                    <i className="fa fa-whatsapp" style={{ fontSize: "48px", color: "green" }}></i>
                </div>
            </div>

            <div className="social-media-con">
                <h3>Follow Us</h3>
                <div className="social-media">
                    <a href="https://web.facebook.com" className="fa fa-facebook"><span className="foot-span">Link To Facebook</span></a>
                    <a href="https://twitter.com/Olami_dipupo" className="fa fa-twitter"><span className="foot-span">Link To Twitter</span></a>
                    <a href="instagram.com" className="fa fa-instagram"><span className="foot-span">Link To Instagram</span></a>
                </div>
            </div>

            

        </footer>
    )
}

export default Footer 