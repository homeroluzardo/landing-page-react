import React from "react";
import { Cards } from "./cards.js";
import { Nav } from "./nav.js";
import { Footer } from "./footer.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<div className="text-center jumbotron my-4">
					<h1 className="display-3">A Warm Welcome!</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Ipsa, ipsam, eligendi, in quo sunt possimus non
						incidunt odit vero aliquid similique quaerat nam nobis
						illo aspernatur vitae fugiat numquam repellat.
					</p>
					<p className="boton">
						<a href="#" className="btn btn-primary btn-lg">
							Call to action!
						</a>
					</p>
					<div className="row text-center">
						<Cards />
						<Cards />
						<Cards />
						<Cards />
					</div>
				</div>
				<div>
					<Footer />
				</div>
			</div>
		);
	}
}
