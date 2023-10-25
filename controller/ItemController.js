import {customers, items} from "../db/DB.js";
import {ItemModel} from "../model/ItemModel.js";

var row_index = -1;

items.push(new ItemModel("01" , "Shampoo" , 150 , 23));
items.push(new ItemModel("02" , "Fresh Milk" , 350 , 15));

let codeInput = $("#i_i_code");
let nameInput = $("#i_i_name");
let priceInput = $("#i_i_price");
let qtyInput = $("#i_i_qty");

const clear = () => {
    $("#i_clear_btn").click();

}

// load all data to table
const loadAllTableData = () => {
    $("#i_table>tbody").empty()
    items.map((item) => {
        $("#i_table > tbody").append(`<tr><td>${item.code}</td><td>${item.name}</td><td>${item.price}</td><td>${item.qty}</td></tr>`);
    });
};

loadAllTableData();

// search
$("#i_search_btn").on('click', () => {
    try {
        let item = items.find(item => item.code == $("#item_search").val());
        if (item == null){
            item = items.find(item => item.name == $("#item_search").val());
        }

        codeInput.val(item.code);
        nameInput.val(item.name);
        priceInput.val(item.price);
        qtyInput.val(item.qty);

        row_index = items.findIndex(i => i.code == item.code);

    } catch (e) {
        clear();
        alert("Can't find item , sorry !");

    }

});

// save
$("#i_save_btn").on('click', () => {
    items.push(new ItemModel(codeInput.val(), nameInput.val(), priceInput.val(), qtyInput.val()));
    loadAllTableData();
    clear();
});

// update
$("#i_update_btn").on('click', () => {
    if (row_index==-1){
        alert("Select or search Customer.");
        return;
    }

    items[row_index] = new ItemModel(codeInput.val(), nameInput.val(), priceInput.val(), qtyInput.val());
    loadAllTableData();
    clear();

    row_index = -1;
});

// delete
$("#i_delete_btn").on('click', () => {
    if (row_index == -1) {
        alert("Select or search Customer.");
        return;
    }

    items.splice(row_index, 1);
    loadAllTableData();
    row_index = -1;

});

// clear
// $("#i_clear_btn").on('click', () => {
//     clear();
//     row_index = -1;
// });

// table select
$("#i_table").on('click', 'tr', function(){
    let selectedId = $(this).find("td:first-child").text();
    row_index = items.findIndex(items => items.code === selectedId);

    codeInput.val($(this).find("td:first-child").text());
    nameInput.val($(this).find("td:nth-child(2)").text());
    priceInput.val($(this).find("td:nth-child(3)").text());
    qtyInput.val($(this).find("td:nth-child(4)").text());

});







