import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./EditList.module.css";
import IndividualEdit from "./IndividualEdit";

const EditList = () => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");

  const nav = useNavigate();

  const submitTest = (cards) => {
    cards = cards.filter((item) => item.question);
    localStorage.setItem(pathName, JSON.stringify(cards));
    nav("/review/" + pathName);
  };

  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        <IndividualEdit submitTest={submitTest} />
      </div>
    </div>
  );
};

export default EditList;
