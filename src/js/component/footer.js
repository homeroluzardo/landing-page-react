import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Footer extends React.Component {
	render() {
		return (
			<footer className="py-5 bg-dark">
				<div className="container">
					<p className="m-0 text-center text-white">
						Copyright © Your Website 2019
					</p>
				</div>
			</footer>
		);
	}
}
