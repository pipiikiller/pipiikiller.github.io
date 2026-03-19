import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Bgtwo from '../../assets/images/background/image-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import author1 from '../../assets/images/resource/author-thumb-1.jpg'
import author2 from '../../assets/images/resource/author-thumb-2.jpg'
import author3 from '../../assets/images/resource/author-thumb-3.jpg'
import SwiperCore, { Controller } from 'swiper';
import { sendReservationEmail } from '../../services/emailService';

SwiperCore.use([Controller]);
function Contact() {

    const swiper1 = useRef(null);
    const swiper2 = useRef(null);

    const [flag, setflag] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        guests: '1 Person',
        date: '',
        time: '08 : 00 am',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const slider2 = useRef()
    const duration = 500;
    const syncPosition = (e) => {
        if (!flag) {
            setflag(false)
            if (slider2.current) {
                slider2.current.to(e.item.index, duration)
            }
            setflag(false)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus({ type: '', message: '' });

        try {
            await sendReservationEmail(formData);
            setSubmitStatus({
                type: 'success',
                message: 'Reservation request sent successfully! We will contact you shortly.'
            });
            // Reset form
            setFormData({
                name: '',
                phone: '',
                guests: '1 Person',
                date: '',
                time: '08 : 00 am',
                message: ''
            });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send reservation. Please call us at +44 7576 607122'
            });
        }
    };

    return (
        <>
            <div className="testimonials-section" >
                <div className="image-layer" style={{ backgroundImage: `url(${Bgtwo})` }}></div>
                <div className="auto-container">
                    <div className="carousel-box owl-theme">
                        <Swiper className="testi-top"
                            ref={swiper1}
                            controller={{ control: swiper2.current }}
                            items={1} loop margin={10} autoplay onChange={(e) => syncPosition(e)}>
                            <SwiperSlide className="slide-item">
                                <div className="slide-content">
                                    <div className="quotes">”</div>
                                    <div className="text quote-text">I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.</div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide className="slide-item">
                                <div className="slide-content">
                                    <div className="quotes">”</div>
                                    <div className="text quote-text">I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.</div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide className="slide-item">
                                <div className="slide-content">
                                    <div className="quotes">”</div>
                                    <div className="text quote-text">I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.</div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide className="slide-item">
                                <div className="slide-content">
                                    <div className="quotes">”</div>
                                    <div className="text quote-text">I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.</div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide className="slide-item">
                                <div className="slide-content">
                                    <div className="quotes">”</div>
                                    <div className="text quote-text">I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.</div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide className="slide-item">
                                <div className="slide-content">
                                    <div className="quotes">”</div>
                                    <div className="text quote-text">I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.</div>
                                </div>
                            </SwiperSlide >
                        </Swiper>
                        <div className="separator"><span></span><span></span><span></span></div>
                        <div className="thumbs-carousel-box">
                            <Swiper className="testi-thumbs" loop={true} autoplay={true}>
                                <SwiperSlide className="slide-item">
                                    <div className="image">
                                        <img src={author1} alt="" />
                                    </div>
                                    <div className="auth-title">Sam Jhonson</div>
                                </SwiperSlide >
                                <SwiperSlide className="slide-item">
                                    <div className="image">
                                        <img src={author2} alt="" /></div>
                                    <div className="auth-title">Ian Botham</div>
                                </SwiperSlide >
                                <SwiperSlide className="slide-item">
                                    <div className="image"><img src={author3} alt="" /></div>
                                    <div className="auth-title">Dan Bitson</div>
                                </SwiperSlide >
                                <SwiperSlide className="slide-item">
                                    <div className="image"><img src={author1} alt="" /></div>
                                    <div className="auth-title">Sam Jhonson</div>
                                </SwiperSlide >
                                <SwiperSlide className="slide-item">
                                    <div className="image"><img src={author2} alt="" /></div>
                                    <div className="auth-title">Ian Botham</div>
                                </SwiperSlide >
                                <SwiperSlide className="slide-item">
                                    <div className="image"><img src={author3} alt="" /></div>
                                    <div className="auth-title">Dan Bitson</div>
                                </SwiperSlide >
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <section className="reserve-section">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row clearfix">
                            <div className="reserv-col col-lg-8 col-md-12 col-sm-12">
                                <div className="inner">
                                    <div className="title">
                                        <h2>Online Reservation</h2>
                                        <div className="request-info">Booking request <Link to="#">+44 7576 607122</Link> or fill out the order form</div>
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
                                        <form onSubmit={handleSubmit}>
                                            <div className="row clearfix">
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
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
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
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
                                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                                    <div className="field-inner">
                                                        <span className="alt-icon far fa-user"></span>
                                                        <select
                                                            className="l-icon"
                                                            name="guests"
                                                            value={formData.guests}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option>1 Person</option>
                                                            <option>2 Person</option>
                                                            <option>3 Person</option>
                                                            <option>4 Person</option>
                                                            <option>5 Person</option>
                                                            <option>6 Person</option>
                                                            <option>7 Person</option>
                                                        </select>
                                                        <span className="arrow-icon far fa-angle-down"></span>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                                    <div className="field-inner">
                                                        <span className="alt-icon far fa-calendar"></span>
                                                        <input
                                                            className="l-icon datepicker"
                                                            type="date"
                                                            name="date"
                                                            value={formData.date}
                                                            onChange={handleInputChange}
                                                            placeholder="DD-MM-YYYY"
                                                            required
                                                        />
                                                        <span className="arrow-icon far fa-angle-down"></span>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-4 col-md-12 col-sm-12">
                                                    <div className="field-inner">
                                                        <span className="alt-icon far fa-clock"></span>
                                                        <select
                                                            className="l-icon"
                                                            name="time"
                                                            value={formData.time}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option>08 : 00 am</option>
                                                            <option>09 : 00 am</option>
                                                            <option>10 : 00 am</option>
                                                            <option>11 : 00 am</option>
                                                            <option>12 : 00 pm</option>
                                                            <option>01 : 00 pm</option>
                                                            <option>02 : 00 pm</option>
                                                            <option>03 : 00 pm</option>
                                                            <option>04 : 00 pm</option>
                                                            <option>05 : 00 pm</option>
                                                            <option>06 : 00 pm</option>
                                                            <option>07 : 00 pm</option>
                                                            <option>08 : 00 pm</option>
                                                            <option>09 : 00 pm</option>
                                                            <option>10 : 00 pm</option>
                                                        </select>
                                                        <span className="arrow-icon far fa-angle-down"></span>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <div className="field-inner">
                                                        <textarea
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleInputChange}
                                                            placeholder="Message"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <div className="field-inner">

                                                        <button type="submit" className="theme-btn btn-style-one clearfix">
                                                            <span className="btn-wrap">
                                                                <span className="text-one">book a table</span>
                                                                <span className="text-two">book a table</span>
                                                            </span>
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="info-col col-lg-4 col-md-12 col-sm-12">
                                <div className="inner">
                                    <div className="title">
                                        <h2>Contact Us</h2>
                                    </div>
                                    <div className="data">
                                        <div className="booking-info">
                                            <div className="bk-title">Booking request</div>
                                            <div className="bk-no"><Link to="tel:+447576607122">+44 7576 607122</Link></div>
                                        </div>
                                        <div className="separator"><span></span></div>
                                        <ul className="info">
                                            <li><strong>Location</strong><br />21 Walm Ln, London NW2 5SH</li>
                                            <li><strong>Opening Hours</strong><br />
                                                Monday: 1:00 pm - 10:00 pm<br />
                                                Tuesday: 6:00 pm - 10:00 pm<br />
                                                Wednesday: 1:00 pm - 10:00 pm<br />
                                                Thursday: 1:00 pm - 10:00 pm<br />
                                                Friday: 1:00 pm - 10:00 pm<br />
                                                Saturday: 11:00 am - 10:00 pm<br />
                                                Sunday: 11:00 am - 10:00 pm
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
