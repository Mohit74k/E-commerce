import React from 'react'
import { Link } from 'react-router-dom'

const PaymentQR = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                     <h1 className='text-center ph1  mt-3'>Scan This QR</h1>
                     <img className='payment-img' src="mohit-payment.png" alt="" />
                     <Link to="/"><button className='btn btn-dark backbutton'>Back to Home Page</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PaymentQR