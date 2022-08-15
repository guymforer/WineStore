import React, { useState } from "react";
import ReactDOM from "react-dom";
// import {
//   TiChevronLeftOutline,
//   TiChevronRightOutline,
// } from "https://cdn.skypack.dev/react-icons/ti";

//  const CARDS = 10;
// const MAX_VISIBILITY = 3;

// const CardHome = ({ title, content }) => (
//   <div className="card-caro">
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </div>
// );

// const CarouselD = ({ children }) => {
//   const [active, setActive] = useState(1);
//   const count = React.Children.count(children);

//   return (
//     <div className="carousel">
//       {active > 0 && (
//         <button
//           className="nav-caro left-caro"
//           onClick={() => setActive((i) => i - 1)}
//         >
//           <TiChevronLeftOutline />
//         </button>
//       )}
//       {React.Children.map(children, (child, i) => (
//         <div
//           className="card-container-caro"
//           style={{
//             "--active": i === active ? 1 : 0,
//             "--offset": (active - i) / 3,
//             "--direction": Math.sign(active - i),
//             "--abs-offset": Math.abs(active - i) / 3,
//             "pointer-events": active === i ? "auto" : "none",
//             opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
//             display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
//           }}
//         >
//           {child}
//         </div>
//       ))}
//       {active < count - 1 && (
//         <button
//           className="nav-caro right-caro"
//           onClick={() => setActive((i) => i + 1)}
//         >
//           <TiChevronRightOutline />
//         </button>
//       )}
//     </div>
//   );
// };
const CarouselHome = () => {
  // <div className="app-caro">
  //   <CarouselD>
  //   {[...new Array(CARDS)].map((_, i) => (
  //       <CardHome
  //         title={"Card " + (i + 1)}
  //         content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //       />
  //     ))}
  //   </CarouselD>
  // </div>

  return (
    <div>
      <div className="caro">
        <main className="page-content-caro">
          <div className="card-caro">
            <div className="content-caro">
              <h2 className="title-caro">Mountain View</h2>
              <p className="copy-caro">
                Check out all of these gorgeous mountain trips with beautiful
                views of, you guessed it, the mountains
              </p>
              <button className="btn-caro">View Trips</button>
            </div>
          </div>
          <div className="card-caro">
            <div className="content-caro">
              <h2 className="title-caro">To The Beach</h2>
              <p className="copy-caro">
                Plan your next beach trip with these fabulous destinations
              </p>
              <button className="btn-caro">View Trips</button>
            </div>
          </div>
          <div className="card-caro">
            <div className="content-caro">
              <h2 className="title-caro">Desert Destinations</h2>
              <p className="copy-caro">
                It's the desert you've always dreamed of
              </p>
              <button className="btn-caro">Book Now</button>
            </div>
          </div>
          <div className="card-caro">
            <div className="content-caro">
              <h2 className="title-caro">Explore The Galaxy</h2>
              <p className="copy-caro">
                Seriously, straight up, just blast off into outer space today
              </p>
              <button className="btn-caro">Book Now</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default CarouselHome;
