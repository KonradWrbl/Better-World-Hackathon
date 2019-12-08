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
        onLoad={() => "this.width=screen.width;this.height=screen.height;"}
      ></iframe>
    </MapWrapper>
  );
};

export default Map;
