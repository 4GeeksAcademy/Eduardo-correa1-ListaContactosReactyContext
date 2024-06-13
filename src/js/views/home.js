import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  
  useEffect(()=>{
    actions.createUser()
  },[])

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
      <div className="mt-5">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={store.image} className="img-fluid foto" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title mt-3 mb-3">Name</h5>
                <p className="card-text">Adress</p>
                <p className="card-text">Phone</p>
                <p className="card-text">Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
