$(document).ready(onReady);

let employee = [];
function onReady() {
    $('.submitBtn').on('click', addToList)
    $('.submitBtn').on('click', displayToDom)

}

function addToList() {
    let itemEmpArray = {
        firstName: $('.firstNameInput').val(),
        lastName: $('.lastNameInput').val(),
        ID: $('.IdInput').val(),
        title: $('.titleInput').val(),
        Salary: $('.salaryInput').val()
    }
    employee.push(itemEmpArray)
    displayToDom();
}

function displayToDom() {
    let el = $('table tbody')
    el.empty();
    for (let i = 0; i < employee.length; i++) {
        // append each item to ul
        el.append(
        `<tr>
            <td>${ employee[i].firstName} </td>
            <td>${ employee[i].lastName}</td>
            <td>${ employee[i].ID}</td>
            <td>${ employee[i].title}</td>
            <td> ${ employee[i].Salary}</td>
        </tr>`)
         $('.firstNameInput').val(''),
         $('.lastNameInput').val(''),
         $('.IdInput').val(''),
         $('.titleInput').val(''),
         $('.salaryInput').val('')

    }
}