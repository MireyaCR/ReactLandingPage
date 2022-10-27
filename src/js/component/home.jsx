import React from "react";
import Navbar from "./navbar.jsx";
import Cuerpo from "./cuerpo.jsx";
import Footer from "./footer.jsx";
// import PropType from "prop-types";


// const JumBotron = () => {
// 	return (
// 			<div className="jumbotron m-5 p-4 py-5 bg-light mx-5">
// 				<h1 className="display-4">A Warm Welcome</h1>
// 				<p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia magni, ipsum suscipit culpa pariatur deserunt delectus quaerat blanditiis quis at beatae optio! Temporibus numquam voluptatum, ipsa officia rerum esse?</p>
// 				<a className="btn btn-primary btn-lg " href="" role="button">Call to Action!</a>
// 			</div>		
//     )
//  };

//  const Carta = (props) => {
// 	return(			
// 				<div className="col text-center">	
// 					<div className="card bd-light">
// 						<div className="card-header">
// 							<img src={props.imageUrl} className="card-img" alt=""/> 
// 						</div>
// 						<div className="card-body">
// 							<h5 className="card-title">{props.title}</h5>
// 							<p className="card-text"><small>{props.description}</small></p>
// 						</div>
// 						<div className="card-footer">
// 							<a href={props.buttonUrl} className="btn btn-primary btn-sm">{props.buttonLabel}</a>
// 						</div>
// 					</div>
// 				</div>		
// 	)
//  }
//  Carta.propTypes = {
// 	imageUrl: PropType.string,
// 	title: PropType.string,	
// 	description: PropType.string,
// 	buttonUrl: PropType.string,
// 	buttonLabel: PropType.string,
// };

//  const Cuerpo=()=>{
// 	return(
// 		 <div className="container-fluid">
// 			<div className="row-fluid">
// 				<JumBotron/>
// 			</div>
// 			<div className="row row-cols-1 row-cols-md-4 g-4 mx-5 mb-5">
// 				<Carta
// 				title="Card tittle"
// 				imageUrl="https://cdn.pixabay.com/photo/2022/08/31/10/20/buttercup-7422987_640.jpg"
// 				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia magni, ipsum suscipit culpa pariatur deserunt delectus quaerat blanditiis quis at beatae optio!."
// 				buttonUrl="https://en.wikipedia.org"
// 				buttonLabel="Find One More!"/>
// 				<Carta
// 				title="Card tittle"
// 				imageUrl="https://cdn.pixabay.com/photo/2022/08/31/10/20/buttercup-7422987_640.jpg"
// 				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia magni, ipsum suscipit culpa pariatur deserunt delectus quaerat blanditiis quis at beatae optio!"
// 				buttonUrl="https://en.wikipedia.org"
// 				buttonLabel="Find One More!"/>
// 				<Carta
// 				title="Card tittle"
// 				imageUrl="https://cdn.pixabay.com/photo/2022/08/31/10/20/buttercup-7422987_640.jpg"
// 				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia magni, ipsum suscipit culpa pariatur deserunt delectus quaerat blanditiis quis at beatae optio!"
// 				buttonUrl="https://en.wikipedia.org"
// 				buttonLabel="Find One More!"/>
// 				<Carta
// 				title="Card tittle"
// 				imageUrl="https://cdn.pixabay.com/photo/2022/08/31/10/20/buttercup-7422987_640.jpg"
// 				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia magni, ipsum suscipit culpa pariatur deserunt delectus quaerat blanditiis quis at beatae optio!"
// 				buttonUrl="https://en.wikipedia.org"
// 				buttonLabel="Find One More!"/>
// 			</div>			
// 		</div>	
//  		)
//  };
//  const Footer=()=>{
// 	return (
// 			<div className="text-muted bg-dark py-4 mb-2">
// 				<p className="text-light text-center">Copyright <i className="far fa-copyright"></i></p>
// 			</div>
// 	)
// };
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Cuerpo/>
			<Footer/>
		</div>
	);
};

export default Home;
