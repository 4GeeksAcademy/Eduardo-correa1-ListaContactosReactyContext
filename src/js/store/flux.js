const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			image2: "https://img.freepik.com/fotos-premium/persona-rostro_650503-1667.jpg",
			image: "https://pbs.twimg.com/profile_images/1767236656292356096/gph8KB98_400x400.jpg",
			listContacts:[],

			
		},
		actions: {
			createUser: () => {
				fetch("https://playground.4geeks.com/contact/agendas/Edu", {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'accept': 'application/json'
					},
					body: JSON.stringify({})
				})
				.then(response => response.json())
				.then(data => {
					console.log(data);
				})
				.catch(error => {
					console.error("Error:", error);
				});
			}
		}
	};
};

export default getState;
