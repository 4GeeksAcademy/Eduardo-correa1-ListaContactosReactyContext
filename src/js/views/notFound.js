import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/notFound.css";

export const NotFound = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="not-found-container">
        <img 
            src={store.image2} 
            alt="Lost contact"
            className="not-found-image"
        />
        <h1>404 - Contact Not Found</h1>
        <p>Oops! It looks like the contact you're looking for has vanished into thin air. Maybe they're out networking?</p>
        <p>Don't worry, you can always <Link to="/">go back to the homepage</Link> and try again!</p>
    </div>
);
}