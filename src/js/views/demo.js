import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [contactAdded, setContactAdded] = useState(false);
	const [formValid, setFormValid] = useState(false);
	
	const addContacts = () => {
		if (fullName.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && address.trim() !== "") {
			actions.addContactsAPI(fullName, phone, email, address)
			setContactAdded(true)
		}
	}

	useEffect(()=>{
		if (fullName.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && address.trim() !== "") setFormValid(true);
		else setFormValid(false)
	},[fullName, email, phone, address])

	return (
		<div className="container mt-5">
			<h1 className="text-center">Add a new contact</h1>
			{!formValid &&  
			<div className="alert alert-danger" role="alert">
			Some fields are missing
		  	</div>}
			{contactAdded &&
			<div className="alert alert-success" role="alert">
			Your contact was added successfully!
		  	</div>}
			<form>
				<div className="mb-3 ">
					<label htmlFor="fullName" className="form-label">Full Name</label>
					<input type="text" className="form-control" onChange={(e)=>setFullName(e.target.value)} id="fullName" placeholder="Name and last name"/>
				</div>
				<div className="mb-3">
					<label htmlFor="emailAddress" className="form-label">Email</label>
					<input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} id="emailAddress" placeholder="name@example.com"/>
				</div>
				<div className="mb-3">
					<label htmlFor="phone" className="form-label">Phone</label>
					<input type="text" className="form-control" onChange={(e)=>setPhone(e.target.value)} id="phone" placeholder="+34 678 123 456"/>
				</div>
				<div className="mb-3">
					<label htmlFor="address" className="form-label">Address</label>
					<input type="text" className="form-control" onChange={(e)=>setAddress(e.target.value)} id="address" placeholder="Enter your address"/>
				</div>
				<button onClick={addContacts} className="btn btn-primary w-100">Save</button>
			</form>
	  		<Link to="/">
				or get back to contacts
			</Link>
		</div>
	);
};
