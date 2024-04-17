import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let contactID = 0

	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.map((contact, index) => 
					<li 
						key={index}
						className="list-group-item d-flex justify-content-between"
						>
						{contact.name}
						<br />
						{contact.phone}
						<br />
						{contact.email}
						<br />
						{contact.address}
						<button data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={()=> contactID = contact.id}> eliminar</button>			
					</li>
				)}
			</ul>
			<div className="modal" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="deteleModalLabel">Are you sure?</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						They could be a very important person in your life in the future, really?
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">I'm gonna think it better...</button>
						<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>actions.deleteContact(contactID)}>Do it!</button>
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}
