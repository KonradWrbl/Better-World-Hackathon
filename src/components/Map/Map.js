import React from "react";
import { MapWrapper } from "./styles";

const Map = () => {
  return (
    <MapWrapper>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=15eKmT6omVwczVIfuqd9YrkPFx-FbqFLh"
        width="360"
        height="640"
      ></iframe>
    </MapWrapper>
  );
};

export default Map;
