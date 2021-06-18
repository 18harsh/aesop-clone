import React from 'react'
import './Footer.css'
import { TextField  } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__row mobileView">
               
                <div className="footer__col">
                     <>
                    <div className="footer__Input">
                        <input
                        className="footer__emailInput"
                            type="email"
                            placeholder="Email address"
                        />
                        <ArrowForwardIcon className="footer__arrowIcon"/>
                    </div>
                    <div className="footer__check">
                        <input type="checkbox" id="" name="" value=""/>
                        <label for="">Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy.
                        </label>
                    </div>
                   </>
                    </div>
                     <div className="allAbout">
                <div className="about">
                    <p>
                        Orders and support
                    </p>
                    <hr />
                    <p>Contact us </p>
                    <p>FAQs </p>
                    <p>Delivery and returns </p>
                    <p>Terms and conditions</p>
                </div>
                <div className="about">
                    <p>
                        Services
                    </p>
                    <hr />
                    <p>Live assistance</p>
                    <p>Corporate gifts</p>
                    <p>Facial appointments</p>
                </div>
                <div className="about">
                    <p>
                        Location preferences
                    </p>
                    <hr />
                    <p>Shipping: Hong Kong (S.A.R)</p>
                    <p>Language: English</p>
                    </div>
                    </div>
            </div>
            <div className="footer__row">
                <div className="footer__col">
                    <p className="footer__colp">
                        Sustainability
                    </p>
                    <hr />
                    <p className="footer__colp">All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more </p>
                </div>
                <div className="about">
                    <p>
                        About
                    </p>
                    <hr />
                    <p>Our story</p>
                    <p>Foundation </p>
                    <p>Careers</p>
                    <p>Privacy policy</p>
                    <p>Accessibility</p>
                </div>
                <div className="about">
                    <p>
                        Social media
                    </p>
                    <hr />
                    <p>Instagram </p>
                    <p>Twitter </p>
                    <p>LinkedIn </p>
                    <p>WeChat</p>
                    <p>Weibo</p>
                </div>
            </div>
            <hr />
            <div className="footer__footer">
                <p>© Aesop</p>
            </div>
        </div>
    )
}

export default Footer
