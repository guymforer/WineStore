import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import SingleStockReport from "./SingleStockReport";
import { Link } from "react-router-dom";
import ChatApp from "../ChatApp"

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks : </span>

          <a
            href="https://www.facebook.com/profile.php?id=100084310570754"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://www.twitter.com/" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="https://www.google.com/" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-10">
          <MDBRow className="mt-3">
            <MDBCol md="4" lg="4" xl="3" className="mx-0 mb-4" id="col">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />A La Vino
              </h6>
              <p>
                thanks for visiting our shop, we will love to see you also in
                our real life shops.
              </p>
            </MDBCol>

            <MDBCol md="6" lg="6" xl="6" className="mx-0 mb-5" id="col">
              {/* Breaking News Area */}
              <div className="">
                <div className="text-uppercase fw-bold mb-4">
                  <p> Troubled with USD ? </p>
                  <h6 className="text-lowercase fw-none mb-4">
                    Options To Convert Your Money
                  </h6>
                </div>
              </div>
              {/* Stock News Area */}
              <div className="col-md-6 mx-auto" id="news">
                <div className="stock-news-area">
                  <div id="stockNewsTicker" className="ticker">
                    <div className="column">
                      <div className="card">
                        <SingleStockReport currSymbol={"ILS"} />
                        <SingleStockReport currSymbol={"EUR"} />
                        <SingleStockReport currSymbol={"GBP"} />
                      </div>
                    </div>

                    <div className="column">
                      <div className="card">
                        <SingleStockReport currSymbol={"CAD"} />
                        <SingleStockReport currSymbol={"RON"} />
                        <SingleStockReport currSymbol={"AUD"} />
                      </div>
                    </div>

                    <div className="column">
                      <div className="card">
                        <SingleStockReport currSymbol={"DKK"} />
                        <SingleStockReport currSymbol={"CHF"} />
                        <SingleStockReport currSymbol={"PLN"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MDBCol>

            <MDBCol md="4" lg="4" xl="3" className="mx-0 mb-4" id="col">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
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
              <p>
               <ul>
                  <li className="nav-link ">
                    <Link className="nav-item  me-3" to="/chatapp">
                    <MDBIcon icon="far fa-comment-dots" className="me-3" />  Customer Service
                      {/* <sup>
                        <small className="cart-badge">Chat</small>
                      </sup> */}
                    </Link>
                  </li>
                </ul>
              </p>

              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright: COHEN-FORER-MENACHEM
      </div>
    </MDBFooter>
  );
};

export default Footer;
