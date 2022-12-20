import React from "react";
import BadgeCard from "../BadgeCard"; //the card component
import "./styles.css";

// import backgrounds
import bg1 from "./badge-bg/badge-1.svg";
import bg2 from "./badge-bg/badge-2.svg";
import bg3 from "./badge-bg/badge-3.svg";
import bg4 from "./badge-bg/badge-4.svg";
import bg5 from "./badge-bg/badge-5.svg";

// import foregrounds
import fg1 from "./badge-icons/flag.svg";
import fg2 from "./badge-icons/podium.svg";
import fg3 from "./badge-icons/medal-1.svg";
import fg4 from "./badge-icons/medal-2.svg";
import fg5 from "./badge-icons/target.svg";

export default function BadgeSection() {
  // Data for mapping the badges, could(should) be stored elsewhere and imported
  let badgeData = [
    {
      name: "You",
      background: bg1,
      foreground: fg1,
      earned: "", //"" = badge is earned (could be a bool)
    },
    {
      name: "Should",
      background: bg2,
      foreground: fg2,
      earned: "disabled", // "disbaled" =  badge is NOT earned
    },
    {
      name: "Hire",
      background: bg3,
      foreground: fg3,
      earned: "disabled",
    },
    {
      name: "Tom",
      background: bg4,
      foreground: fg4,
      earned: "disabled",
    },
    {
      name: "Hughes",
      background: bg5,
      foreground: fg5,
      earned: "disabled",
    },
  ];

  return (
    <div id="badge-section">
      {badgeData.map((items: any) => (
        // map over the data array, for each make a new badge card and send the data to the component as a prop
        <BadgeCard
          name={items.name}
          earned={items.earned}
          foreground={items.foreground}
          background={items.background}
        />
      ))}
    </div>
  );
}
