import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconsContainer } from "./styles";

const BottomMenuIcon = ({ icon }) => {
  return (
    <IconsContainer>
      <FontAwesomeIcon size="1x" icon={icon} />
    </IconsContainer>
  );
};

export default BottomMenuIcon;
