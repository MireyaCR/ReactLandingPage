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
		<div className= "container-fluid ">
			<div className="jumbotron m-5 p-5 py-5 bg-light">
				<h1 className="display-4">A Warm Welcome</h1>
				<p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia magni, ipsum suscipit culpa pariatur deserunt delectus quaerat blanditiis quis at beatae optio! Temporibus numquam voluptatum, ipsa officia rerum esse?</p>
				<a className="btn btn-primary btn-lg" href="" role="button">Call to Action!</a>
			</div>
		</div>
    )
 };
 const Cartas=()=>{
	return(
		<div className="album py-5 bg_light">
			<div className="container-fluid">
				<div className="row row-cols-3 row-cols-md-4 g-4 p-5 py-5 ">
					<div className="col">
						<div className="card h-100">
						<div class="card-header p-5 text-muted text-center"> 500 x 325</div>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							</div>
							<div className="card-footer text-center">
							<a className="btn btn-primary btn-lg" href="" role="button">Call to Action!</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img src="..." className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							</div>
							<div className="card-footer">
								<small className="text-muted">Last updated 3 mins ago</small>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card ;">
							<img src="..." className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							</div>
							<div className="card-footer">
								<small className="text-muted">Last updated 3 mins ago</small>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img src="..." className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							</div>
							<div className="card-footer">
								<small className="text-muted">Last updated 3 mins ago</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
 };
 const Footer=()=>{
	return (
			<div className="text-muted bg-dark py-8 mb-2">
				<p className="text-light text-center">Copiryht</p>
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
			<Footer/>
		</div>
	);
};

export default Home;
