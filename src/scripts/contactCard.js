const makecontactComponent ={
BuildContactCard:(singleContact) =>{
  return `<article id="card-${singleContact.id}">
  <h1>${singleContact.Name}</h1>
  <h3>${singleContact.Number}</h3>
  <p>${singleContact.Address}</p>
  <button id ="delete-${singleContact.id}">Delete</button>
  <button id = "edit-${singleContact.id}">Edit</button>
  </article>`
}}
export default makecontactComponent