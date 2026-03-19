import React from 'react'
import Backgroundimage from '../../assets/images/background/image-12.jpg';

function Quotesection() {
  return (
    <>
      <section className="intro-section quote">
        <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}></div>
        <div className="auto-container">
          <div className="content-box">
            <h3>Authentic Burmese cuisine crafted with traditional flavours and time-honoured recipes.</h3>
            <div className="separator"><span></span><span></span><span></span></div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Quotesection