import {customers, items} from "../db/DB.js";
import {CustomerModel} from "../model/CustomerModel.js";

var row_index = -1;

customers.push(new CustomerModel("C001", "Dasun Madawa", "Horana", 150000));
customers.push(new CustomerModel("C002", "Dasun Madawa", "Horana", 150000));
customers.push(new CustomerModel("C003", "Dasun Madawa", "Horana", 150000));
customers.push(new CustomerModel("C004", "Dasun Madawa", "Horana", 150000));

let idInput = $(" #c_c_id ");
let nameInput = $(" #c_c_name ");
let addressInput = $(" #c_c_address ");
let salaryInput = $(" #c_c_salary ");

// load all data to table
const loadAllTableData = () => {
    $("#c_table > tbody").empty();
    customers.map((customer) => {
       $("#c_table > tbody").append(`<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`);
    });

}

loadAllTableData();

const clear = () => {
    $(" #c_clear ").click();

}

// search
$(" #c_search_btn ").on('click', () => {
    try {
        let customer = customers.find(customer => customer.id === $(" #c_customer_search ").val());

        if (customer == null) {
            customer = customers.find(customer => customer.name === $(" #c_customer_search ").val());
        }

        idInput.val(customer.id);
        nameInput.val(customer.name);
        addressInput.val(customer.address);
        salaryInput.val(customer.salary);

        row_index = customers.findIndex(c => c.id === customer.id );
    } catch (e) {
        clear();
        alert("Can't Find Customer , Sorry !");

    }

});

// table select
$(" #c_table ").on('click', 'tr ', function() {
    let selectedId = $(this).find("td:first-child").text();
    row_index = customers.findIndex(customer => customer.id === selectedId);

    idInput.val($(this).find("td:first-child").text());
    nameInput.val($(this).find("td:nth-child(2)").text());
    addressInput.val($(this).find("td:nth-child(3)").text());
    salaryInput.val($(this).find("td:nth-child(4)").text());

});

// save
$("#c_save").on('click' , () => {
    customers.push(new CustomerModel( $("#c_c_id").val() , $("#c_c_name").val() , $("#c_c_address").val() , $("#c_c_salary").val() ) );
    loadAllTableData();
    clear();
});

// update
$(" #c_update ").on('click' , () => {
    if (row_index==-1){
        alert("Select or search Customer.");
        return;
    }
    customers[row_index] = new CustomerModel( $("#c_c_id").val() , $("#c_c_name").val() , $("#c_c_address").val() , $("#c_c_salary").val() );
    loadAllTableData();
    clear();
    row_index = -1;
});

// delete
$(" #c_delete ").on('click' , () => {
    if (row_index === -1 ){
        alert("Select or search customer !");
        return;
    }

    customers.splice(row_index , 1);
    loadAllTableData();
    clear();
    row_index = -1;
});

// clear
// $(" #c_clear ").on('click' , () => {
//     clear();
//     row_index = -1;
// });






