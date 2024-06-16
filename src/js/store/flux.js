const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      image2:
        "https://img.freepik.com/fotos-premium/persona-rostro_650503-1667.jpg",
      imagemale:
        "https://st3.depositphotos.com/9058402/15119/v/450/depositphotos_151195856-stock-illustration-pop-art-businessman-talking-on.jpg",
      image:
        "https://media.istockphoto.com/id/1190626181/es/vector/retrato-de-una-chica-de-pelo-corto-androgin-mirando-con-una-mirada-lateral-diversidad-avatar.jpg?s=612x612&w=0&k=20&c=WJGPsDghyxbrq0cU1S0XmRlXCxWiwlo7AY4IMH4jm50=",
      listContacts: { contacts: [] },
    },
    actions: {
      createUser: () => {
        fetch("https://playground.4geeks.com/contact/agendas/Edu", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({}),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      createContact: (contact) => {
        const store = getStore();
        fetch("https://playground.4geeks.com/contact/agendas/Edu/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(contact),
        })
          .then((response) => response.json())
          .then((newContact) => {
            setStore({
              listContacts: [...store.listContacts, newContact],
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      fetchContacts: () => {
        fetch("https://playground.4geeks.com/contact/agendas/Edu/contacts")
          .then((response) => response.json())
          .then((data) => {
            setStore({ listContacts: data });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      editContact: (contactId, updatedContact) => {
        const store = getStore();
        fetch(
          `https://playground.4geeks.com/contact/agendas/Edu/contacts/${contactId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify(updatedContact),
          }
        )
          .then((response) => response.json())
          .then((updatedContact) => {
            const updatedContacts = store.listContacts.contacts.map((contact) =>
              contact.id === contactId ? updatedContact : contact
            );
            setStore({ listContacts: { contacts: updatedContacts } });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      deleteContact: (contactId) => {
        const store = getStore();
        fetch(
          `https://playground.4geeks.com/contact/agendas/Edu/contacts/${contactId}`,
          {
            method: "DELETE",
            headers: {
              accept: "application/json",
            },
          }
        )
          .then((response) => {
            if (response.ok) {
              const updatedContacts = store.listContacts.contacts.filter(
                (contact) => contact.id !== contactId
              );
              setStore({ listContacts: { contacts: updatedContacts } });
            } else {
              console.error("Error deleting contact:", response.statusText);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
    },
  };
};

export default getState;
