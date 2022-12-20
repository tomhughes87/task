import React from "react";
import "./styles.css";
import "../../App.css";

export default function BadgeCard(props: any) {
  function handleClickedMenu(e: any) {
    let hiddenMenu = e.target.parentElement.childNodes[2];
    hiddenMenu?.classList.toggle("disabled");
  }

  return (
    <div id="badge-card-main">
      <div id="earned-tag" className={props.earned}>
        <img id="trophy-icon" src="" alt=""></img>
        <p id="earned-text">Earned</p>
      </div>
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
      <div id="badge-card-bottom">
        <p id="badge-title">{props.name}</p>

        <p id="badge-menu" onClick={handleClickedMenu}>
          ...
        </p>
        <div id="hidden-menu" className="disabled">
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
}
