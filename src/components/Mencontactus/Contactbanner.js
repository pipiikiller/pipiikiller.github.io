import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'
import bg25 from '../../assets/images/Contact Us - AW/CU_(321 × 371 px).png'
import bg6 from '../../assets/images/Contact Us - AW/CU_(640 × 417 px).png'
import restro from '../../assets/images/Contact Us - AW/CU_(526 × 629 px).png'
import { sendReservationEmail } from '../../services/emailService'

function Contactbanner() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        console.log('🔴 Contact form submitted:', formData);
        setSubmitStatus({ type: '', message: '' });

        // Send email using the same service
        const reservationData = {
            name: formData.name,
            phone: formData.phone,
            guests: 'Contact Form',
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            message: `Email: ${formData.email}\n\n${formData.message}`
        };

        sendReservationEmail(reservationData)
            .then((result) => {
                console.log('✅ Contact message sent:', result);
                setSubmitStatus({
                    type: 'success',
                    message: 'Message sent successfully! We will get back to you soon.'
                });

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('❌ Error sending message:', error);
                setSubmitStatus({
                    type: 'error',
                    message: 'Failed to send message. Please call us at +44 7576 607122'
                });
            });

        return false;
    };

    return (
        <>
            <div className="contact-map">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.3477108833875!2d-0.222606!3d51.548360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876101188cb0dd5%3A0xf4b5d2d6e3d1b7e0!2sArponnar%2C%2021%20Walm%20Ln%2C%20London%20NW2%205SH!5e0!3m2!1sen!2suk!4v1694272000000!5m2!1sen!2suk"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></Iframe>
            </div>

            <section className="contact-page">
                <div className="left-bg"><img src={bg25} alt="" title="" /></div>
                <div className="right-bg"><img src={bg6} alt="" title="" /></div>

                <div className="location-center">
                    <div className="auto-container">
                        <div className="cinfo-box">
                            <div className="row clearfix">

                                <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                        <h4>Opening Hours</h4>
                                        <div className="text">
                                            Monday: 1:00 pm - 10:00 pm<br />
                                            Tuesday: 6:00 pm - 10:00 pm<br />
                                            Wed-Fri: 1:00 pm - 10:00 pm<br />
                                            Sat-Sun: 11:00 am - 10:00 pm
                                        </div>
                                    </div>
                                </div>


                                <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
                                    <div className="inner-box cp-seprator wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                        <h4>Contact Info</h4>
                                        <div className="text">21 Walm Ln, London NW2 5SH<br />Email : admin@arponnar.co.uk</div>
                                        <div className="more-link"><Link to="#">Booking : +44 7576 607122</Link></div>
                                    </div>
                                </div>


                                <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                        <h4>We are Open Daily</h4>
                                        <div className="text">Varying Hours<br />See Opening Hours for Details</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="auto-container">
                    <div className="c-page-form-box">
                        <div className="row clearfix">

                            <div className="loc-block col-lg-6 col-md-12 col-sm-12">
                                <div className="title-box centered">
                                    <h2>Message us</h2>
                                    <div className="text desc">Have a question about the our service? We're here to help, contact us today</div>
                                </div>
                                <div className="default-form reservation-form">
                                    {submitStatus.message && (
                                        <div style={{
                                            padding: '15px',
                                            marginBottom: '20px',
                                            borderRadius: '4px',
                                            backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                                            color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                                            border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                                        }}>
                                            {submitStatus.message}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} action="#">
                                        <div className="clearfix">
                                            <div className="form-group">
                                                <div className="field-inner">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        placeholder="Your Name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="field-inner">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="Your Email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <div className="field-inner">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        placeholder="Phone Number"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group ">
                                                <div className="field-inner">
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        placeholder="Special Request"
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <button type="submit" className="theme-btn btn-style-one clearfix">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">send your message</span>
                                                        <span className="text-two">send your message</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                            <div className="loc-block col-lg-6 col-md-12 col-sm-12">
                                <img src={restro} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contactbanner
