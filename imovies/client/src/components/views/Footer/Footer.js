import React from 'react'
import './Footer.css'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'



function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    
                    <ul>
                    <li><h4>company</h4></li>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <ul>
                        <li><h4>get help</h4></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
              
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><AiOutlineTwitter /></a>
                        <a href="#"><RiInstagramFill /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    )
}

export default Footer
