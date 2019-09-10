const apiContacts = {
    getAllContacts: ()=>{
return fetch("http://localhost:8088/Contacts") // Fetch from the API
    .then(responce => responce.json())  // Parse as JSON
 },
 getOneContact: singleContactID=>{
   return fetch(`http://localhost:8088/Contacts/${singleContactID}`).then(response =>response.json())
 },
 postOneContact: ContactObject =>fetch("http://localhost:8088/Contacts", {
    // Replace "url" with your API's URL
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ContactObject)
  }),
  deleteOneContact: (idofDeleteObject) =>fetch(`http://localhost:8088/Contacts/${idofDeleteObject}`,{
      method:"DELETE"
  }),
  editOneContact: (idofEditObject, ContactObject) => fetch(`http://localhost:8088/Contacts/${idofEditObject}`,{
    method:"PUT",
     headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ContactObject)
  })
 }
export default apiContacts