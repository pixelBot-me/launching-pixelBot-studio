import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG, FaTelegramPlane } from 'react-icons/fa';
import pixelBotLogo from '../assets/images/pixelbot-logo.svg';
import '../assets/css/footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-cta pt-5 pb-5">
          <Row>
            <Col xl={4} md={4} className="mb-3">
              <div className="single-cta">
                <FaMapMarkerAlt size={30} color="#ff5e14" />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, SW 54321, Chandigarh</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} className="mb-3">
              <div className="single-cta">
                <FaPhone size={30} color="#ff5e14" />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} className="mb-3">
              <div className="single-cta">
                <FaEnvelopeOpen size={30} color="#ff5e14" />
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

        <div className="footer-content pt-5 pb-5">
          <Row>
            <Col xl={4} lg={4} className="mb-4">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={pixelBotLogo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><FaFacebookF className="facebook-bg" size={16} /></a>
                  <a href="#"><FaTwitter className="twitter-bg" size={16} /></a>
                  <a href="#"><FaGooglePlusG className="google-bg" size={16} /></a>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} className="mb-3">
              <div className="footer-widget">
                <h3>Useful Links</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} className="mb-4">
              <div className="footer-widget">
                <h3>Subscribe</h3>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <Form action="#">
                    <Form.Control type="email" placeholder="Email Address" />
                    <Button variant="orange" className="subscribe-btn">
                      <FaTelegramPlane size={22} color="white" />
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="copyright-area">
          <Row>
            <Col xl={6} lg={6} className="text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2018, All Rights Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
              </div>
            </Col>
            <Col xl={6} lg={6} className="d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
