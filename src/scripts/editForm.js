const editFormComponent = {
    PrintEditForm:(contactToEdit) =>{
        const TargetCard = document.querySelector(`#card-${contactToEdit.id}`)
        TargetCard.innerHTML = `<section>
        <input id="name-${contactToEdit.id}" type="text" value="${contactToEdit.Name}">
        <input id ="number-${contactToEdit.id}" type ="text" value ="${contactToEdit.Number}">
        <input id ="address-${contactToEdit.id}" type ="text" value ="${contactToEdit.Address}">
        <button id="save-${contactToEdit.id}">Save</button>
      </section>`
    }
}
export default editFormComponent