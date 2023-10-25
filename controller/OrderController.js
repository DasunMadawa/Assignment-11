import {items} from "../db/DB.js";
import {customers} from "../db/DB.js";
import {orders} from "../db/DB.js";

let rowIndex = -1;
let customer = null;
let orderItems = [];

// load order's items
const loadOrderItems = () => {
    $("#o_table>tbody").empty();
    orderItems.map((item) => {
        $("#o_table>tbody").append(`<tr><td>${item.code}</td><td>${item.name}</td><td>${item.price}</td><td>${item.qty}</td></tr>`);
    });
};

// load customers
export const loadCustomers = () => {
    $("#customer").empty();
    customers.map((customer) => {
        $("#customer").append(`<option value="${customer.id}">${customer.id}</option>`);
    });
};

// load items
export const loadItems = () => {
    $("#item").empty();
    items.map((item) => {
        $("#item").append(`<option value="${item.code}">${item.code}</option>`);
    });
};

$("#customer").on('change' , ()=> {
    let customerId = ("#customer").val();
    let customer = customers.find(customer => customer.id === customerId);


});








