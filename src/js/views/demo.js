import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="text-center mt-3">
        <h1>Add a new contact</h1>
      </div>
      <form className="mt-5">
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Full Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="adress"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter address"
          />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button">
            save
          </button>
        </div>
      </form>
      <Link to="/">
        <div className="form-text mt-2">Or get back to contacts</div>
      </Link>
    </div>
  );
};
