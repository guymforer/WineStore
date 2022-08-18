import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { getAdresses } from "./apiCore";
import { API } from "../config";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

var markersToMark = [
  { lat: 32.07984, lng: 34.77354, title: "Store 1" },
  { lat: 31.96452, lng: 34.77119, title: "store 2" },
  { lat: 30.96452, lng: 35.77119, title: "Store 3" },
];

export default function SimpleMap() {
  const [markers1, setMarkers] = useState([]);

  // const loadMarkers = () => {
  //   getAdresses().then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setMarkers(data);
  //     }
  //   });
  // };

  useEffect(() => {
    console.log("useEffect");

    const res = fetch(`${API}/map/`).then((response) =>
      response.json().then((data) => {
        setMarkers(data);
      })
    );
  }, []);

  const defaultProps = {
    center: {
      lat: 31.96102,
      lng: 34.80162,
    },
    zoom: 12,
  };

  const renderMarkers = (map, maps) => {
    console.log("Markers 1 = ", markers1);
    var markers = markers1.map((x) => {
      return new maps.Marker({
        position: { lat: x.latitude, lng: x.longitude },
        map,
        title: x.name,
      });
    });

    // console.log("markers: ", markers);
    return markers;
  };
  if (markers1.length > 0) {
    return (
      // Important! Always set the container height explicitly

      <div style={{ height: "50vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD9a5GRzzJrv21Wz64PqcarLMWdecfFzQE" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({ map, maps }) => {
            //loadMarkers();
            // console.log("onGoogleApiLoaded");
            renderMarkers(map, maps);
          }}
        ></GoogleMapReact>
      </div>
    );
  }
}
