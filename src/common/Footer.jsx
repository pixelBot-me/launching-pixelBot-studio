import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG, FaTelegramPlane } from 'react-icons/fa';
import pixelBotLogo from '../assets/images/pixelbot-logo.svg';
import '../assets/css/footer.css';

export default function Footer() {
    return (
        <footer className="footer-section">
            <Container>
                {/* start footer row one added call mail details */}
                <div className="footer-cta pt-3 pb-3">
                    <Row>
                    <Col xl={4} md={4} className="mb-3">
                            <div className="single-cta">
                                <FaMapMarkerAlt size={30} color="#f8a22d" />
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    {/* <span><a href="https://maps.app.goo.gl/XAWMdRsqAgvCCv4fA">Padole square, opposite MH31 restaurant, 3rd Bus Stop, Gopal Nagar, Nagpur, Maharashtra 440022</a></span> */}
                                    <a href="https://maps.app.goo.gl/XAWMdRsqAgvCCv4fA" target='_blank'>
                                    Gopal Nagar, Nagpur, Maharashtra 440022</a>
                                    {/* <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.9328010314116!2d79.049081!3d21.1152451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf67a3c83c3f%3A0x941f78d5b18e8b23!2sPixelBot%20Studio!5e0!3m2!1sen!2sin!4v1737614031987!5m2!1sen!2sin" className='pt-2'
                                        width="100%" 
                                        height="100" 
                                        style={{ border: 0 }} 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="PixelBot Studio Map"
                                    ></iframe> */}
                                </div>
                            </div>

                        </Col>
                    <Col xl={4} md={4} className="mb-3">
                            <div className="single-cta">
                                <FaPhone size={30} color="#f8a22d" />
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>
                                        <a href="tel:+918308606183">+91 9876543210</a> &nbsp; | &nbsp;
                                        <a href="tel:+918308606183">+91 9876543210</a>
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={4} className="mb-3">
                            <div className="single-cta">
                                <FaEnvelopeOpen size={30} color="#f8a22d" />
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <a href="mailto:info@pixelbotstudio.com">
                                        <span>info@pixelbotstudio.com</span>
                                    </a>
                                </div>
                            </div>
                        </Col>                     
                    </Row>
                </div>
                {/* end footer row one added call mail details */}



            </Container>
            {/* copyright section starts here */}
            {/* <div className="copyright-area">
                <div className="copyright-text text-center">
                    <p>Copyright &copy; 2018, All Rights Reserved <a href="#">PxelBot Studio</a></p>
                </div>
            </div> */}
            {/* copyright section end here */}
        </footer>
    );
}
