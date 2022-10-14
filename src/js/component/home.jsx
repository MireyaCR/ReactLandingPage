import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<a className="navbar-brand" href="#">Start Bootstap</a>
			<div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
				<a className="navbar-brand"></a>
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0" href="#">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
					</li>
					<li className="nav-item ">
						<a className="nav-link" href="#">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Services</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Contact</a>
					</li>	  			
				</ul>
    		</div>
		</nav>		
	);
};

const JumBotron = () => {
	return (
        <div className="jumbotron m-5">
			<h1 className="display-4"></h1>
			<p className="lead"></p>
			<a className="btn btn-primary btn-lg" href="" role="button"></a>
		</div>
    )
 };
 const Cartas=()=>{
	return(
		<div class="row row-cols-1 row-cols-md-3 g-4">
			<div class="col">
				<div class="card h-100">
					<img src="..." class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
					<div class="card-footer">
						<small class="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
  			</div>
		</div>
	)
 };

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<JumBotron/>
			<Cartas/>
		</div>
	);
};

export default Home;
