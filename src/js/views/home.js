import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store,actions} = useContext(Context)
  console.log(store)
  console.log(actions)

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
    <div className="text-center mt-5">
    <div class="card mb-3" style={{maxWidth: "540px;"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={store.image} class="img-fluid foto" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};
