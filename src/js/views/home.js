import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.createUser();
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-light mb-3">
        <div></div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-success">Add new contact</button>
          </Link>
        </div>
      </nav> 
      <Card />     
    </div>
  );
};
