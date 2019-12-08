import React from "react";
import Element from "../../../components/Element/Element";
import { IngredientContainer, ElementName } from "./styles";
import DeleteButton from "../DeleteButton/DeleteButton";

const Ingredients = ({ element }) => {
  console.log(element);
  return (
    <IngredientContainer element={element.symbol}>
      <Element element={element.symbol} />
      <ElementName>{element.name}</ElementName>
      <DeleteButton quantity={element.quantity} />
    </IngredientContainer>
  );
};

export default Ingredients;
