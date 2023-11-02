import {init} from "./OrderController.js";
import {ItemModel} from "../model/ItemModel.js";
import {items} from "../db/DB.js";
import {loadAllTableCustomers} from "../controller/CustomerController.js";
import {loadAllTableItems} from "../controller/ItemController.js";

items.push(new ItemModel("01" , "Shampoo" , 150 , 23));
items.push(new ItemModel("02" , "Fresh Milk" , 350 , 15));

let homePage = $(" body > div:nth-child(2) ");
let customersPage = $(" body > div:nth-child(3) ");
let itemsPage = $(" body > div:nth-child(4) ");
let ordersPage = $(" body > div:nth-child(5) ");

const clear = function (){
    homePage.css("display" , "none");
    customersPage.css("display" , "none");
    itemsPage.css("display" , "none");
    ordersPage.css("display" , "none");
}

$("#home_page").on('click' , () => {
    clear();
    homePage.css("display" , "flex");
});

$("#customers_page").on('click' , () => {
    clear();
    customersPage.css("display" , "block");

});

$("#items_page").on('click' , () => {
    clear();
    loadAllTableItems();
    itemsPage.css("display" , "block");
});

$("#orders_page").on('click' , () => {
    clear();
    ordersPage.css("display" , "block");
    init();

});

$("#logo").on('click' , () => {
    clear();
    homePage.css("display" , "block");

});

$("#home_page").click();



