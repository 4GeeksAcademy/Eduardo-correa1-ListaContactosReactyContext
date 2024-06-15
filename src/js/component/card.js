import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = () => {
  const { store } = useContext(Context);

  
  return (
    <div className="mt-5">
      {store.listContacts.contacts && store.listContacts.contacts.length > 0 ? (
        store.listContacts.contacts.map((contact, index) => (
          <div key={index} className="card mb-3 position-relative">
            <div className="position-absolute top-0 end-0 p-3">
              <i className="fa-solid fa-pencil m-3"></i>
              <i className="fa-solid fa-trash-can m-3"></i>
            </div>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={store.image} className="img-fluid foto" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title mt-3 mb-3">{contact.name}</h5>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot" style={{ color: "#8d8b8b" }}></i> {contact.address}
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-phone-flip" style={{ color: "#8d8b8b" }}></i> {contact.phone}
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-envelope" style={{ color: "#8d8b8b" }}></i> {contact.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default Card;
