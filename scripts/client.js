$(document).ready(onReady);

let employee = [];
function onReady() {
    $('.submitBtn').on('click', addToList)
    $('.submitBtn').on('click', displayToDom)
    $('tbody').on('click', '.deleteBtn', deleteItem)
     $('.submitBtn').on('click', monthlyExpense);
}
//captures input data
function addToList() {
    //create object that will be passed to employee array.
    let itemEmpArray = {
        firstName: $('.firstNameInput').val(),
        lastName: $('.lastNameInput').val(),
        ID: $('.IdInput').val(),
        title: $('.titleInput').val(),
        Salary: $('.salaryInput').val()
    }
    //pushes input data to the employee array.
    employee.push(itemEmpArray)
   

    
}

//monthly expense. 
function monthlyExpense(){
    //cost variable 
    let totalCost = 0;
    //where totalCost will go on the DOM
    let el = $('.monthlyDisplay');
    el.empty();
    //looping through the array to find the salary of employee and assign it to totalCost.
    for(let i = 0; i < employee.length; i++) {
        totalCost += Math.round(employee[i].Salary) /12;
        el.text(Math.round(totalCost));
        //console.log(totalCost)
        //condition for monthly cost max
        if(totalCost > 20000) {
            $('.monthlyDisplay').addClass('monthlyDisplayWarning')
        }else{
            $('.monthlyDisplay').removeClass('monthlyDisplayWarning')
        }
     }
     
}

//from input to DOM
function displayToDom() {
    let el = $('table tbody')
    el.empty();
    for (let i = 0; i < employee.length; i++) {
        // append each item as tr to tbody. .
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
}

//removing from DOM
function deleteItem() {
        //goal is to remove item clicked from table and employee array. 
        let item = $(this).closest('tr');
        //deleting from array.
        employee.splice(item.index(), 1);
        //removing from table.
        item.remove();
        monthlyExpense();
        displayToDom();
        //console.log(employee);
}
