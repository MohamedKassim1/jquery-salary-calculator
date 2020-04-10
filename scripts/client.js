$(document).ready(onReady);

let employee = [];
function onReady() {
$('.submitBtn').on('click', addToList)
$('.submitBtn').on('click', displayToDom)

}

function addToList() {
    let itemEmpArray = {
        firstName: $( '.firstNameInput' ).val(),
        lastName: $( '.lastNameInput' ).val(),
        ID: $( '.IdInput' ).val(),
        title: $('.titleInput').val(),
        Salary: $('.salaryInput').val()
    } 
    employee.push(itemEmpArray)
    displayToDom();
}

function displayToDom() {
    let el = $('.rowData')
    el.empty();
    for( let i=0; i < employee.length; i++){
        // append each item to ul
        el.append( 
        `<td>
        ${ employee[ i ].firstName }
        ${ employee[ i ].lastName }
        ${ employee[ i ].ID }
        ${ employee[ i ].title }
        ${ employee[ i ].Salary }
        </td>`)
    }
}