const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/JorgeAJT/contacts")
				.then( (response) => response.json())
				.then( data => setStore({ contacts: data.contacts }))	
			},
			deleteContact: (iDToDelete) => {
				console.log("eliminar index: " + iDToDelete);
				fetch(`https://playground.4geeks.com/contact/agendas/JorgeAJT/contacts/${iDToDelete}`, { method: 'DELETE' })
				.then( () => getActions().getContacts())
			},
			findMyUser : () => {
				fetch("https://playground.4geeks.com/contact/agendas?offset=0&limit=100")
				.then( (response) => response.json())
				.then( data => {
					const userExist = data.agendas.find (user => user.slug === "JorgeAJT")
					if(!userExist) {
							fetch(`https://playground.4geeks.com/contact/agendas/JorgeAJT`, { method: 'POST' })
							.then((response) => response.json())
							.then(console.log("Usuario creado"))
					} else console.log("El usuario ya existe")
				})
			},
			addContactsAPI: (name, phone, email, address) => {
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ 
						"name": name,
						"phone": phone,
						"email": email,
						"address": address
					 })
				};
				fetch('https://playground.4geeks.com/contact/agendas/JorgeAJT/contacts', requestOptions)
					.then(response => response.json())
					.then(() => getActions().getContacts())
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				getActions().getContacts();
				getActions().findMyUser()
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
