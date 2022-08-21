import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, Redirect } from "react-router-dom";


function MyVerticallyCenteredModalSocial(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Follow Us For More
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="model-body">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100084310570754&tabs=timeline&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1128816011320310"
            width={1300}
            height={500}
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100084310570754&width=450&layout=standard&action=like&size=large&share=true&height=35&appId=1128816011320310"
            width={450}
            height={35}
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder={0}
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>

          <p align="center">
            <a
              href="https://twitter.com/nodws"
              className="btn twtr"
              target="_b"
            >
              Follow me on Twitter
            </a>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          page in work
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredAbout(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body closeButton>
        <div className="side-about">
          <div className="col-7">
            <h2>A wonderful evening with BOND</h2>
            <p>
              A wonderful evening with BOND Last month, winery BOND from Napa
              Valley came to the Netherlands, where a dinner and wine tasting
              were arranged. The winery organizes these kinds of tastings every
              so often on location with its importers.
              <br /> The event was actually planned two years ago, but it
              couldn't take place at the time, for obvious reasons. Fortunately,
              the event got a green light to finally kick off on Thursday 19
              May! Maximilian Kast, the Estate Director of BOND, flew in from
              sunny California to give us an unforgettable evening at Bistro de
              la Mer in Amsterdam.
              <br /> The tasting revolved around the new vintage: the excellent
              year 2018. In this blog, we will take you along on this fantastic
              tasting and tell you everything you want to know about this unique
              winery.<br /> The event was actually planned two years ago, but it
              couldn't take place at the time, for obvious reasons. Fortunately,
              the event got a green light to finally kick off on Thursday 19
              May! Maximilian Kast, the Estate Director of BOND, flew in from
              sunny California to give us an unforgettable evening at Bistro de
              la Mer in Amsterdam.
              <br /> The tasting revolved around the new vintage: the excellent
              year 2018. In this blog, we will take you along on this fantastic
              tasting and tell you everything you want to know about this unique
              winery.
            </p>
            <div className="youtube">
              <video width="400" controls autoplay>
                <source src="movie.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Body>
    </Modal>
  );
}

const CarouselHome = () => {
  const [modalShowSocial, setModalShowSocial] = React.useState(false);
  const [modalShowStore, setModalShowStore] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const [modalShowAbout, setModalShowAbout] = React.useState(false);

  const shopNow = () => {
    setRedirect(true);
  };
  const shouldRedirect = (redirect) => {
    if (redirect) {
      console.log("redirect ", redirect);
      return <Redirect to="/shop" />;
    }
  };

  return (
    <div>
      <div className="caro">
        <main className="page-content-caro">
          <div className="card-caro">
            <div className="content-caro">
              <h2 className="title-caro">Social Media</h2>
              <p className="copy-caro">
                Check out all our most react posts, updates and products by
                getting in touch with
              </p>
              <Button
                variant="primary"
                className="btn-caro"
                onClick={() => setModalShowSocial(true)}
              >
                More Info
              </Button>
              <MyVerticallyCenteredModalSocial
                show={modalShowSocial}
                onHide={() => setModalShowSocial(false)}
              />
            </div>
          </div>
          <div className="card-caro">
            <div className="content-caro">
              <h2 className="title-caro">Recommendations</h2>
              <p className="copy-caro">
                Some stories from our favorite customers
              </p>
              <Button
                variant="primary"
                className="btn-caro"
                onClick={() => setModalShowStore(true)}
              >
                More Info
              </Button>
              <MyVerticallyCenteredModal
                show={modalShowStore}
                onHide={() => setModalShowStore(false)}
              />
            </div>
          </div>
          <div className="card-caro">
            {shouldRedirect(redirect)}
            <div className="content-caro">
              <h2 className="title-caro">Lets Shop!</h2>
              <p className="copy-caro">
                Check out our wines from all around the world!!
              </p>
              <button className="btn-caro" onClick={shopNow}>
                Shop Now
              </button>
            </div>
          </div>
          <div className="card-caro">
            <div className="content-caro">
              <h2 className="title-caro">About Us</h2>
              <p className="copy-caro">
                ounded in 2014, Israel Wine Shop strives to bring the quality
                and excellence of the ever-growing Israeli ...
              </p>
              <Button
                variant="primary"
                className="btn-caro"
                onClick={() => setModalShowAbout(true)}
              >
                More Info
              </Button>
              <MyVerticallyCenteredAbout
                show={modalShowAbout}
                onHide={() => setModalShowAbout(false)}
              />
              {/* <button className="btn-caro">Our Story</button> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default CarouselHome;
