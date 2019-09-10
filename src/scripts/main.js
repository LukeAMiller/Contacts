import apiContacts from "./apiManager.js"
import renderContacts from "./contactList.js"
import editFormComponent from "./editForm.js"

apiContacts.getAllContacts()
    .then(parsedContacts => {
        renderContacts.PrintContacts(parsedContacts)
    })
//add eventlistener to Submit button once button is clicked get values of  inputs and turns all input values into an object
const SubmitButton = document.querySelector("#submit")
SubmitButton.addEventListener("click", function () {
    const NameValue = document.querySelector("#Name").value;
    console.log(NameValue)
    const number = document.querySelector("#phoneNumber").value;
    console.log(number)
    const address = document.querySelector("#Address").value;
    console.log(address)
    const contactObject = {
        "Number": number,
        "Name": NameValue,
        "Address": address
    }
    apiContacts.postOneContact(contactObject)
        .then(apiContacts.getAllContacts)
        .then(parsedContacts => {
            renderContacts.PrintContacts(parsedContacts)
        })
});
// click event for delete button
document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("delete")) {
        const addressArray = event.target.id.split("-");
        const idofDeleteObject = addressArray[1]
        apiContacts.deleteOneContact(idofDeleteObject)
            .then(() => {
                apiContacts.getAllContacts()
                    .then(parsedContacts => {
                        renderContacts.PrintContacts(parsedContacts);
                    })
            })
    }
})
// click event for edit button
document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("edit-")) {
        const addressArray = event.target.id.split("-");
        const idofEditObject = addressArray[1];
        apiContacts.getOneContact(idofEditObject)
            .then(singleaddressContact => {
                editFormComponent.PrintEditForm(singleaddressContact)
            })
    }
})
//  save button event
document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("save-")) {
        const addressArray = event.target.id.split("-");
        const idofEditObject = addressArray[1]
        const editedNumberValue = document.querySelector(`#number-${idofEditObject}`).value;
        const editedNameValue = document.querySelector(`#name-${idofEditObject}`).value;
        const editedAddressValue = document.querySelector(`#address-${idofEditObject}`).value;
        // Put the input value into an object
        const editedContactObj = {
            "Number": editedNumberValue,
            "Name": editedNameValue,
            "Address": editedAddressValue
        };
        apiContacts.editOneContact(idofEditObject, editedContactObj)
            .then(() => {
                apiContacts.getAllContacts()
                    .then(parsedContacts => {
                        renderContacts.PrintContacts(parsedContacts);
                    })
            })
    }
})
// calls upon the final function to getAllContacts
