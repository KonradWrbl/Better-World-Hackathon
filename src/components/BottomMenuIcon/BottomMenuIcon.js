import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconsContainer } from "./styles";

const BottomMenuIcon = ({ icon, active }) => {
  return (
    <IconsContainer active={active}>
      <FontAwesomeIcon
        size="1x"
        icon={icon}
        color={active ? "#489AF1" : "rgba(51,51,51,.16)"}
      />
    </IconsContainer>
  );
};

export default BottomMenuIcon;
