import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 32.07984,
      lng: 34.77354,
    },
    zoom: 15,
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 32.07984, lng: 34.77354 },
      map,
      title: "Our Store!",
    });
    return marker;
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD9a5GRzzJrv21Wz64PqcarLMWdecfFzQE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
}
