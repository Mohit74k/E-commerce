import React, { useEffect } from 'react';
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../features/Cartslice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWishlist } from '../features/Cartslice';


const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);


  const handleCheckoutClick = () => {
    alert("Redirecting to Checkout...");
    // Here, you can add your routing logic to go to the checkout page.
  };
  return (
    <div className="container-cart">
      <section className="h-100 gradient-custom cartpage">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart-Items {cart.length}</h5>
                </div>
                <div className="card-body">
                  {cart.map((data) => (
                    <div className="row" key={data.id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded">
                          <img src={data.image} alt={data.title} />
                          <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{data.title}</strong></p>
                        <button type="button" className="btn btn-primary btn-sm me-1 mb-2"
                          onClick={() => dispatch(removeItem(data.id))}>
                          <i className="fas fa-trash" />
                        </button>
                        <Link to="/Wishlist"><button type="button" className="btn btn-danger btn-sm mb-2"
                        onClick={() => {dispatch(addToWishlist(data.id))}}>
                          <i className="fas fa-heart" />
                        </button></Link>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                          <button className="btn btn-primary px-3 me-2"
                            onClick={() => dispatch(decreaseItemQuantity(data.id))}>
                            <i className="fas fa-minus" />
                          </button>
                          <div className="form-outline">
                            <input id="form1" min={0} name="quantity" defaultValue={data.quantity} type="number" className="form-control" />
                            <label className="form-label" htmlFor="form1">Quantity</label>
                          </div>
                          <button className="btn btn-primary px-3 ms-2"
                            onClick={() => dispatch(increaseItemQuantity(data.id))}>
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          Total Quantity <span>{data.quantity}</span>
                        </li>
                      </div>
                    </div>
                  ))}
                  <hr className="my-4" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
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
                  <Link to="/Checkout"> <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleCheckoutClick}>
                    Go to checkout
                  </button></Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
