import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from '../features/Cartslice';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Productcart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allcard.items);
  console.log(items);

  const [inputtext, setInputtext] = useState("");

  const inputhandler = (e) => {
    setInputtext(e.target.value.toLowerCase());
  };

  // Filter the items based on the search input
  const filteredItems = items.filter((el) =>
    el.title.toLowerCase().includes(inputtext)
  );

  return (
    <div className='container-fluid'>
      <input
        id="search-bar"
        type='search'
        className='form-control rounded'
        placeholder='Search'
        aria-label='Search'
        aria-describedby='Search-addon'
        onChange={inputhandler}
        value={inputtext}
      />
      
      <div className='row'>
        {filteredItems.length > 0 ? (
          filteredItems.map((data) => (
            <div className='col-md-4 ms-auto' key={data.id}>
              <MDBCard className='card'>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image bgcartimg hover-overlay'>
                  <MDBCardImage src={data.image} style={{ height: "22rem" }} fluid alt={data.title} />
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>

                <MDBCardBody className='card-body-cart'>
                  <MDBCardTitle>{data.title}</MDBCardTitle>
                  <MDBCardText>Price: ${data.price}</MDBCardText>
                  <MDBCardText>{data.description}</MDBCardText>
                  <MDBBtn type="button" onClick={() => dispatch(addtocart(data))}>
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))
        ) : (
          <div className="col-12">
            <h3 className='mt-3'>No results found 😢</h3>
          </div>
        )}


      </div>

      <MDBFooter bgColor='light' className='text-center mt-5 mb-0 text-lg-start text-muted fluid-footer '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom footermain'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Mohit Mobile's Company
              </h6>
              <p>
                Here you can purchase any item which on you like the most you can buy easily by using this website,
                 this is free website to purchase mobiles..
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  I-PHONE
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  SAMSUNG
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  VIVO
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  OPPO
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Rajasthan, In 302039, In
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                mohit74k@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 88 9059 5701
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center lastline p-4'>
        © 2025 Copyright:
        <a className='text-reset fw-bold' href=''>
          Mohitkumawat74
        </a>
      </div>
    </MDBFooter>
      
    </div>
  );
};

export default Productcart;
