import React from "react";
import { MapWrapper, BackButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Map = ({ handleClick }) => {
  return (
    <MapWrapper>
      <BackButton onClick={handleClick}>
        <FontAwesomeIcon icon="chevron-down" />
      </BackButton>
      <iframe
        title="map"
        src="https://www.google.com/maps/d/embed?mid=15eKmT6omVwczVIfuqd9YrkPFx-FbqFLh"
        width="360"
        height="640"
      ></iframe>
    </MapWrapper>
  );
};

export default Map;
