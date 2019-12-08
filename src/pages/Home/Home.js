import React, { useState } from "react";
import Map from "../../components/Map/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ContentWrapper,
  SlideButton,
  DropWrapper,
  AddButton,
  DropNum,
  DropUnit,
  DropText
} from "./styles";
import SavedSection from "../../components/SavedSection/SavedSection";
import AdditionsSection from "../../components/AdditionsSection/AdditionsSection";

const Home = () => {
  const [slided, toggleSlide] = useState(false);
  const handleClick = () => {
    toggleSlide(!slided);
  };

  return (
    <div>
      <Map handleClick={handleClick} />
      <ContentWrapper slided={slided}>
        <SlideButton onClick={handleClick}>
          <FontAwesomeIcon icon="chevron-up" />
        </SlideButton>
        <DropWrapper>
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="152" height="195" viewBox="0 0 152 195"><defs><clipPath id="a"><rect width="152" height="195" transform="translate(104 86)" fill="#7b2020" stroke="#707070" strokeWidth="1"/></clipPath><filter id="b" x="-21" y="-21.075" width="193.718" height="237.148" filterUnits="userSpaceOnUse"><feOffset input="SourceAlpha"/><feGaussianBlur stdDeviation="7.5" result="c"/><feFlood floodColor="#2256c9" floodOpacity="0.059"/><feComposite operator="in" in2="c"/><feComposite in="SourceGraphic"/></filter><clipPath id="d"><path d="M163.932,150.554S97.5,217.139,97.5,260.657s33.006,64.035,66.435,63.97,67.282-20.709,67.282-64.227S163.932,150.554,163.932,150.554Z" transform="translate(-97.497 -150.554)" fill="none" stroke="#fff" strokeWidth="15"/></clipPath><linearGradient id="e" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#8ce7f5"/><stop offset="1" stopColor="#2256c9"/></linearGradient></defs><g transform="translate(-104 -86)" clipPath="url(#a)"><g transform="translate(10.503 -47.554)"><g transform="matrix(1, 0, 0, 1, 93.5, 133.55)" filter="url(#b)"><path d="M163.932,150.554S97.5,217.139,97.5,260.657s33.006,64.035,66.435,63.97,67.282-20.709,67.282-64.227S163.932,150.554,163.932,150.554Z" transform="translate(-88.5 -138.55)" fill="#fff" stroke="#fff" strokeWidth="15"/></g><g transform="translate(102.497 145.554)" clipPath="url(#d)"><path d="M82.385,245.046s26.629-8.486,54.623-7.023,30.854,16.472,61.256,15.216S252.5,238.023,252.5,238.023L236.109,352.341H89.018Z" transform="translate(-96.196 -178.451)" fill="#489af1"/><path d="M252.5,245.074a459.333,459.333,0,0,0-49.551,0c-27.994,1.463-40.608,15.691-71.01,14.436s-49.551-21.459-49.551-21.459L98.772,352.369H245.864Z" transform="translate(-96.196 -178.479)" opacity="0.7" fill="url(#e)"/></g><path d="M163.932,150.554S97.5,217.139,97.5,260.657s33.006,64.035,66.435,63.97,67.282-20.709,67.282-64.227S163.932,150.554,163.932,150.554Z" transform="translate(5 -5)" fill="none" stroke="#fff" strokeWidth="15"/></g></g></svg>
          <DropText>
            <DropNum>9,45</DropNum>
            <DropUnit>liters</DropUnit>
          </DropText>
          <AddButton>+</AddButton>
        </DropWrapper>
        <SavedSection />
        <AdditionsSection />
      </ContentWrapper>
    </div>
  );
};

export default Home;
