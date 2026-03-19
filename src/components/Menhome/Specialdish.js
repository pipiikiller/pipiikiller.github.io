import React from 'react'
import Backgroundoffer from '../../assets/images/lobster/Lobster_33p16x31.75.png';
import record3 from '../../assets/images/Home Page - AW/H (373 × 358 px).png'
import recordbg1 from '../../assets/images/background/image-1.jpg'
import recordbg2 from '../../assets/images/Home Page - AW/H (179 × 361 px).png'
import recordbg3 from '../../assets/images/resource/badge-2.png'

function Specialdish() {
    return (
        <>
            <section className="special-dish">
                <div className="bottom-image"><img src={record3} alt="" title="" /></div>
                <div className="outer-container">
                    <div className="row clearfix">
                        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image-layer" style={{ backgroundImage: `url(${Backgroundoffer})` }}></div>
                                <div className="image"><img src={recordbg1} alt="" /></div>
                            </div>
                        </div>
                        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="right-bg"><img src={recordbg2} alt="" title="" /></div>
                            <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">

                                <div className="title-box">
                                    <span className="badge-icon"><img src={recordbg3} alt="" title="" /></span>
                                    <div className="subtitle"><span>Special dish</span></div>

                                    <div className="pattern-image">
                                        <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                    </div>

                                    <h2>Mont-Hinn-Ngar</h2>
                                    <div className="text">A traditional Burmese rice-noodle soup with a savoury, aromatic fish-based broth, featuring a variety of garnishes</div>
                                </div>

                                <div className="price"><span className="new">£10.50</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Specialdish
