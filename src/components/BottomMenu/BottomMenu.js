import React from "react";
import { MainContainer } from "./styles.js";
import BottomMenuIcon from "../BottomMenuIcon/BottomMenuIcon";
import { withRouter, Link } from "react-router-dom";

const BottomMenu = props => {
  const location = props.location.pathname;
  const icons = [
    { icon: "home", path: "/" },
    { icon: "cog", path: "/additions" },
    { icon: "chart-pie", path: "/stats" },
    { icon: "link", path: "/share" }
  ];
  return (
    <MainContainer>
      {icons.map((el, i) => (
        <Link key={el.icon} to={el.path}>
          <BottomMenuIcon icon={el.icon} active={el.path === location} />
        </Link>
      ))}
    </MainContainer>
  );
};

export default withRouter(BottomMenu);