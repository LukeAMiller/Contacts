import makecontactComponent from "./contactCard.js"
const renderContacts = {
    PrintContacts:arrayParam => {
        document.querySelector("#DOM").innerHTML = "";
        arrayParam.forEach(singleContact=>
            {document.querySelector("#DOM").innerHTML += makecontactComponent.BuildContactCard(singleContact)})
    }
}
export default renderContacts