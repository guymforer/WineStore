import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer=()=> {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks : </span>
       
          <a href='https://www.facebook.com/profile.php?id=100084310570754' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://www.twitter.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
        </div>
          </section>
        

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                A La Vino
              </h6>
              <p>
                thanks for visiting our shop, we will love to see you also in our real life shops.
              </p>
            </MDBCol>


            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Eli Vizel 2, Rishon Lezion
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                for more info, our managemet creator: adicohen28x@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 972 050 333 9698
             
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: COHEN-FORER-MENACHEM
        
      </div>
    </MDBFooter>
  );
}

export default Footer;