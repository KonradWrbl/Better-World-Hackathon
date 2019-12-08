import React from "react";
import wave from '../../assets/images/Mask Group 3.svg'
import { AdditionsWrapper } from "./styles";
import Ingredient from "./Ingredient/Ingredient";

const Additions = () => {
  return (
    <AdditionsWrapper>
      <img src={wave} alt='wave'/>
      <h2>Additions</h2>
      <p>
        You can select what additions should be mixed with our ZauryWater. 
        Choose microelements manually or connect this app with your diet app 
        and let it choose the ingredients to complement your diet.
      </p>
      <Ingredient element='Mg'/>
      <Ingredient element='Ca'/>
      <Ingredient element='K'/>
      <Ingredient element='Se'/>
      
    </AdditionsWrapper>
  );
};

export default Additions;
