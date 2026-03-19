import React from 'react';
import Backgroundimage from '../../assets/images/Contact Us - AW/CU_1880_×_919_px.png';
import { Link } from 'react-router-dom'
import logonew from '../../assets/images/logo.png'

function Main() {
    return (
        <>
            <footer className="main-footer">
                <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}> </div>
                <div className="upper-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="footer-col info-col col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="content">
                                        <div className="logo"><Link to="/" title="APONNAR"><img src={logonew} alt="" title="Delici - Restaurants HTML Template" /></Link></div>
                                        <div className="info">
                                            <ul>
                                                <li>21 Walm Ln, London NW2 5SH</li>
                                                <li><Link to="mailto:admin@arponnar.com">admin@arponnar.com</Link></li>
                                                <li><Link to="tel:+447576607122">Booking Request : +44 7576 607122</Link></li>
                                                <li>Mon/Wed-Fri: 1-10pm | Tue: 6-10pm | Sat-Sun: 11am-10pm</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-col links-col col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul className="links">
                                        <li> <Link to="/">Home</Link></li>
                                        <li> <Link to="/menu">Menus</Link></li>
                                        <li> <Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-col links-col last col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul className="links">
                                        <li> <Link to="https://www.facebook.com">facebook</Link></li>
                                        <li> <Link to="https://www.instagram.com">instagram</Link></li>
                                        <li> <Link to="https://twitter.com">Twitter</Link></li>
                                        <li> <Link to="https://www.youtube.com">Youtube</Link></li>
                                        <li> <Link to="https://www.google.com/maps">Google map</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="copyright">&copy; 2025 Arponnar. All Rights Reserved</div>
                    </div>
                </div>

            </footer>
            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon fa fa-angle-up"></span></div>
        </>
    )
}

export default Main
