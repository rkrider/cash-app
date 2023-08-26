import React from 'react'
import BackgroundLining from "../../assets/payments/background-lining.png";
import PaymentColumn from "../../assets/payments/payments-column.png";
import PaymentPhone from "../../assets/payments/payments-phone 1.png";
import PaymentPillerLarge from "../../assets/payments/payments-pillar-large.png";
import PaymentPillerMedium from "../../assets/payments/payments-pillar-medium.png";
import PaymentPillerSmall from "../../assets/payments/payments-pillar-small.png";


import "./style.css";

const Payments = () => {
  return (
    <div className='payments'>
        <div className='payments_main'>
        <div className='payments_bg'>
            <img className='backgroundLining' src={BackgroundLining} alt='backgroundLining'/>
        </div>
        <div className='payments_imgs'>
            <img className='paymentPhone' src={PaymentPhone} alt='paymentPhone'/>
            <img className='paymentPillersmall' src={PaymentPillerSmall} alt='paymentPillersmall'/>
            <img className='paymentPillerMedium' src={PaymentPillerMedium} alt='paymentPillerMedium'/>
            <img className='paymentPillerLarge' src={PaymentPillerLarge} alt='paymentPillerLarge'/>
            <img className='paymentColumn' src={PaymentColumn} alt='paymentColumn'/>
        </div>
        </div>

    </div>
  )
}

export default Payments