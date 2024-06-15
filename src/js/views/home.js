import React, { Component, useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../component/card";


export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.createUser();
    actions.fetchContacts();
  }, []);

console.log(store.listContacts)

  

  return (
    <div className="container">
      <nav className="navbar navbar-light">
        <div className="d-flex w-100">
          <div className="ms-auto mt-2">
            <Link to="/demo">
              <button className="btn btn-success">Add new contact</button>
            </Link>
          </div>
        </div>
      </nav>
      <Card />      
    </div>
  );
};
