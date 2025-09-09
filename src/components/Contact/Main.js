import React from 'react'
import Contactbanner from '../Mencontactus/Contactbanner'
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/Contact Us - AW/CU_1880_600_px.png'

function Main() {
  return (
    <>
      <Bredcrumb title="ANY QUERY ?" subtitle="Contact Us" Img={Img} />
      <Contactbanner />
    </>
  )
}

export default Main
