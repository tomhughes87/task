import React from "react";
import BadgeCard from "../BadgeCard/index";
import "./styles.css";
import "../../App.css";
import BadgeSection from "../BadgeSection/BadgeSection";

export default function MainContrainer() {
  return (
    <div id="main-contrainer">
      <div id="header-main-container" className="our-border">
        <p>Badges</p>
      </div>
      <BadgeSection />
      <div id="content-main-container"></div>
    </div>
  );
}
