import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	let contactID = 0

	return (
		<div className="container">
			<div className="my-4 d-flex justify-content-end">
				<Link to="/addContact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
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
						<div>
						<Link to="/editContact">
						<i className="fa-solid fa-pencil btn ms-auto" onClick={()=>actions.editContact(contact.id)}></i>
						</Link>
						<i className="fa-solid fa-trash-can btn" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={()=> contactID = contact.id}></i>	
						</div>
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
