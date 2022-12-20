import React from "react";
import "./styles.css";
import "../../App.css";

export default function BadgeCard(props: any) {
  function handleClickedMenu(e: any) {
    let hiddenMenu = e.target.parentElement.childNodes[2]; // when the kebab btn is clicked, navigate to the corisponding hidden menu
    hiddenMenu?.classList.toggle("disabled"); //turn off/on the menu
  }

  return (
    <div id="badge-card-main">
      {/* The 'earned' tag */}
      <div id="earned-tag" className={props.earned}>
        <img id="trophy-icon" src="" alt=""></img>
        <p id="earned-text">Earned</p>
      </div>
      {/* The badge images (foreground and background) */}
      <div id="badge-image-container">
        <img
          src={props.background}
          alt="background-badge"
          className="bagdge-img badge-bg"
        />
        <img
          src={props.foreground}
          alt="forground-badge"
          className="bagdge-img badge-fg"
        />
      </div>
      {/* bottom pannel of the badge care with kebab btn and the name of the badge */}
      <div id="badge-card-bottom">
        <p id="badge-title">{props.name}</p>

        {/* the kebab menu, ...terrible id name */}
        <p id="badge-menu" onClick={handleClickedMenu}>
          ...
        </p>
        {/* the menu to turn on/off when the kebab btn is pressed */}
        <div id="hidden-menu" className="disabled">
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
}
