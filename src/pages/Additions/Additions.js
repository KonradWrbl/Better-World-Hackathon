import React from "react";
import wave from "../../assets/images/Mask Group 3.svg";
import { AdditionsWrapper } from "./styles";
import Ingredient from "./Ingredient/Ingredient";

const Additions = () => {
  const elementsListAccepted = [
    {
      elementSymbol: "Mg",
      elementName: "Magnesium",
      quantity: 10
    },
    {
      elementSymbol: "Ca",
      elementName: "Calcium"
    },
    {
      elementSymbol: "K",
      elementName: "Potassium"
    },
    {
      elementSymbol: "Se",
      elementName: "Selenium"
    }
  ];

  const elementsListDeny = [];

  const listIngredientsA = elementsListAccepted.map(element => (
    <Ingredient
      key={element.elementSymbol}
      element={element.elementSymbol}
      accepted
    />
  ));

  const listIngredientsD = elementsListDeny.map(element => (
    <Ingredient key={element.elementSymbol} element={element.elementSymbol} />
  ));

  return (
    <AdditionsWrapper>
      <img src={wave} alt="wave" />
      <h2>Additions</h2>
      <p>
        You can select what additions should be mixed with our ZauryWater.
        Choose microelements manually or connect this app with your diet app and
        let it choose the ingredients to complement your diet.
      </p>
      {listIngredientsA}
      {elementsListDeny || elementsListAccepted == [] ? null : <hr />}
      {listIngredientsD}
    </AdditionsWrapper>
  );
};

export default Additions;
