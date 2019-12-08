import React, { useState, useEffect } from "react";
import wave from "../../assets/images/Mask Group 3.svg";
import { AdditionsWrapper } from "./styles";
import Ingredient from "./Ingredient/Ingredient";
import beer from "../../assets/images/icons8-beer-48.png";
import coffee from "../../assets/images/icons8-coffee-pot-48.png";
import sun from "../../assets/images/icons8-sun-48.png";

const Additions = () => {
  const [list, setList] = useState([]);
  const backendUrl = "http://51.75.203.44:8050/";
  const token =
    "c2979ce5a544044fe4e12fb4f0dff5ab-0a04968933886c770889fa8e64f07155-cd5952682d5c059a1f1b0fa75d8cdba5";

  useEffect(() => {
    async function getElements() {
      const listFetch = await fetch(backendUrl + "mineralInfo/get/", {
        method: "GET",
        headers: {
          Authorization: token
        }
      });
      let message = await listFetch.json();
      setList(Array.from(message));
      return message;
    }
    getElements();
  }, []);

  return (
    <AdditionsWrapper>
      <img
        src={wave}
        alt="wave"
        style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      />
      <h2>Additions</h2>
      <p>
        You can select what additions should be mixed with our ZauryWater.
        Choose microelements manually or connect this app with your diet app and
        let it choose the ingredients to complement your diet.
      </p>

      <div class="horizontal-scroll">
        <div class="horizontal-scroll__wrapper">
          <ul class="popular-widget__list">
            <li class="popular-widget__item">
              <img src={beer} alt="" />
              <span>
                {" "}
                Hangover <br /> pack{" "}
              </span>
            </li>
            <li class="popular-widget__item">
              <img src={coffee} alt="" />
              <span>
                {" "}
                Coffee <br /> fan{" "}
              </span>
            </li>
            <li class="popular-widget__item">
              <img src={sun} alt="" />
              <span>
                {" "}
                Hot <br />
                summer{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {list &&
        list.map(element => {
          console.log(element);
          return <Ingredient key={element.symbol} element={element} accepted />;
        })}

      {/*{elementsListDeny || elementsListAccepted == [] ? null : <hr />}*/}
      {/*{listIngredientsD}*/}
    </AdditionsWrapper>
  );
};

export default Additions;
