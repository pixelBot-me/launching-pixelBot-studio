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
                                    <a href="https://maps.app.goo.gl/XAWMdRsqAgvCCv4fA" target='_blank'>
                                    Gopal Nagar, Nagpur, Maharashtra 440022</a>
                                </div>
                            </div>

                        </Col>
                    <Col xl={4} md={4} className="mb-3">
                            <div className="single-cta">
                                <FaPhone size={30} color="#f8a22d" />
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>
                                        <a href="tel:+918623087995">+91 8623087995</a> &nbsp; | &nbsp;
                                        <a href="tel:+918446297665">+91 8446297665</a>
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
