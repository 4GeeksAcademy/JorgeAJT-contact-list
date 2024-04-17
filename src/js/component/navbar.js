import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-white mb-3 ms-auto">
			<div className="ms-auto">
				<Link to="/demo">
					<button className="btn btn-success me-1">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
