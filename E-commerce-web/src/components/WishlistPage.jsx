import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal, removeFromWishlist, removeItem } from '../features/Cartslice';

const WishlistPage = () => {
  const { cart } = useSelector((state) => state.allcard) || { cart: [] };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]); // Runs only once when component mounts

  return (
    <section className="h-100 gradient-custom cartpage">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Wishlist Items ({cart.length})</h5>
              </div>
              <div className="card-body">
                {cart.length > 0 ? (
                  cart.map((data) => (
                    <div className="row mb-4" key={data.id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded">
                          <img src={data.image} alt={data.title} className="img-fluid" />
                          <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{data.title}</strong></p>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm me-1 mb-2"
                          onClick={() => dispatch(removeFromWishlist(data.id))}>
                        
                          <i className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">Your wishlist is empty.</p>
                )}
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistPage;
