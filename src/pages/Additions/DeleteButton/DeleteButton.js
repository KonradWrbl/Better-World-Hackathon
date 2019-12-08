import React from "react";
import { DeleteButtonContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteButton = ({ quantity }) => {
  return (
    <DeleteButtonContainer>
      {/* <FontAwesomeIcon color="white" size="2x" icon="times" /> */}
      <div>{quantity}</div>
      <div> mg/l </div>
    </DeleteButtonContainer>
  );
};

export default DeleteButton;
