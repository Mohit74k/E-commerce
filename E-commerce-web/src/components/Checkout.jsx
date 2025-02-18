// CheckoutButton.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Checkout = () => {

    const { totalQuantity, totalPrice } = useSelector((state) => state.allcard);
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [name, setName] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");

    const handlePayment = () => {
        if (cardNumber && expiryDate && cvv && name) {
            setPaymentStatus("Payment Successful! 🎉");
        } else {
            setPaymentStatus("Please fill all the fields.");
        }
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="checkout-box">
                        <h1 className="checkout-description">
                            Review your items on Cart and proceed to secure checkout.
                        </h1>
                    </div>

                </div>

            </div>

            <div className="col-md-6  summary-card">
                <div className="card mb-4 " >
                    <div className=" card-header border border-dark py-3">
                        <h5 className="mb-0">Summary</h5>
                    </div>
                    <div className="card-body summary-details">
                        <ul className="summary-list">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 summary-details">
                                <div>
                                    <strong>Total amount</strong>
                                    <p className="mb-0">(including VAT)</p>
                                </div>
                                <span><strong>${totalPrice}</strong></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Total Quantity</strong>
                                </div>
                                <span><strong>{totalQuantity}</strong></span>
                            </li>
                        </ul>

                    </div>
                </div>
                <h1>Get QR Code</h1>
                <Link to="/PaymentQR" ><button className="btn btn-dark mt-2">get</button></Link>
            </div>

            <div className="col-md-8 " id="payment-card">

                <div className="payment-box">
                    <h2>Payment Details</h2>

                    <div className="payment-form">
                        <div className="input-group">
                            <label>Card Number</label>
                            <input
                                type="text"
                                maxLength="16"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="Enter your card number"
                            />
                        </div>

                        <div className="input-group">
                            <label>Cardholder Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="input-group">
                            <label>Expiry Date</label>
                            <input
                                type="text"
                                maxLength="5"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                placeholder="MM/YY"
                            />
                        </div>

                        <div className="input-group">
                            <label>CVV</label>
                            <input
                                type="text"
                                maxLength="3"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                placeholder="CVV"
                            />
                        </div>

                        <button className="payment-btn" onClick={handlePayment}>
                            Pay Now
                        </button>

                        {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
                    </div>
                    
                </div>
                
            </div>


        </div>
    );
};

export default Checkout;
