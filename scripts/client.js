$(document).ready(onReady);

let employee = [];
function onReady() {
    $('.submitBtn').on('click', addToList)
    $('.submitBtn').on('click', displayToDom)
    $('tbody').on('click', '.deleteBtn', deleteItem)
    $('.submitBtn').on('click', monthlyExpense);
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

    
}

function monthlyExpense(){
    let totalCost = 0;
    let el = $('.monthlyDisplay');
    for(let i = 0; i < employee.length; i++) {
        totalCost += Math.round(employee[i].Salary) /12;
        el.empty();
        el.append(totalCost);
        if(totalCost > 20000) {
            $('.monthlyDisplay').addClass('monthlyDisplayWarning')
        }
     }
     
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
            <td><button class="deleteBtn">Delete</button></td>
            
        </tr>`)
         $('.firstNameInput').val(''),
         $('.lastNameInput').val(''),
         $('.IdInput').val(''),
         $('.titleInput').val(''),
         $('.salaryInput').val('')
        
    }//end of loop
    //monthlyExpense();
}

function deleteItem() {
    
        let item = $(this).closest('tr');
        employee.splice(item.index(), 1);
        item.remove();
    
        console.log(employee)
        monthlyExpense();
}
