// "use strict";
// var orderNumberHolder = [];

// // returns a html element (id)
// var $ = function(id) {
//     return document.getElementById(id);
// };

// function deleteRow() {
//     var orderNumber = parseInt(prompt("enter order number to delete")); // converts number into integer
//     if (orderNumber == NaN || orderNumber < 1) {
//         prompt("enter order number");
//     } else {
//         var table = $("myTable");
//         var rowCount = table.rows.length; // eliminate header so minus 1
//         for (var i = 0, j = 0; i < rowCount; i++, j++) {
//             var row = table.rows[i];
//             if (orderNumber == i) {
//                 table.deleteRow(i);
//                 rowCount--;
//                 table.rows[j].cells[0].innerHTML = j; // renumbers the list after delete row
//             }
//         }
//     }

// }

// function edt() {
//     // converts number into integer
//     var orderNumber = parseInt(prompt("enter order number to edit"));

//     // need to store order number so I can reference when I save edit info
//     orderNumberHolder.push(orderNumber);
//     if (orderNumber == NaN || orderNumber < 1) {
//         prompt("enter order number");
//     } else {
//         var table = $("myTable");
//         var rowCount = table.rows.length;

//         // i is index, so start with 1 so it doesn't include header
//         for (var i = 1; i < rowCount; i++) {
//             var row = table.rows[i];
//             if (orderNumber == i) {
//                 $("bname").value = table.rows[i].cells["1"].innerHTML;
//                 $("aname").value = table.rows[i].cells["2"].innerHTML;
//                 $("data").value = table.rows[i].cells["3"].innerHTML;

//             }
//         }
//     }
// }


// function saveChange() {
//     var table = $("myTable");
//     var rowCount = table.rows.length; // do not want to include header 

//     for (var i = 1; i < rowCount; i++) {
//         var row = table.rows[i];
//         if (orderNumberHolder[i] == i) {
//             table.rows[i].cells["1"].innerHTML = $("bname").value;
//             table.rows[i].cells["2"].innerHTML = $("aname").value;
//             table.rows[i].cells["3"].innerHTML = $("data").value;
//             $("bname").value = '';
//             $("aname").value = '';
//             $("data").value = '';
//             rowCount--;
//         }
//     }
// }


// window.onload = function() {
//     $("deleteRowBtn").onclick = deleteRow; // calls function
//     $("editBtn").onclick = edt; // calls function
//     $("saveBtn").onclick = saveChange; // calls function
// }


var btn = document.querySelector(".button");
btn.addEventListener("click", add_row);

function add_row() {

}

function readData() {
    var addr = {}
    addr["bid"] = document.querySelector(".bid").value;
    addr["bname"] = document.querySelector(".bname").value;
    addr["aname"] = document.querySelector(".aname").value;
    addre["date"] = document.querySelector(".date").value;
    console.log(addr.bname);
}



// function add_row() {
//     var bbid = document.getElementBybid("bbid").value;
//     var bname = document.getElementBybname("bname").value;
//     var aname = document.getElementByaname("aname").value;
//     var date = document.getElementBydate("date").value;

//     var table = document.getElementBybid("data_table");
//     var table_len = (table.rows.length) - 1;
//     var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='bname" + table_len + "'>" + bname + "</td> <td id = 'aname" + table_len + "' > " + aname + " < /td> <  td id = 'date" + table_len + "' > " + date + " < /td> <td> < input type = 'button' id = 'edit_button" + table_len + "' value = 'Edit' class = 'edit' onclick = 'edit_row(" + table_len + ")' ><input type = 'button' id = 'save_button" + table_len + "'value = 'Save' class = 'save' onclick = 'save_row(" + table_len + ")' > <input type = 'button' value = 'Delete' class = 'delete' onclick = 'delete_row(" + table_len + ")' > < /td></tr > ";

//     document.getElementBybid("bbid").value = "";
//     document.getElementBybname("bname").value = "";
//     document.getElementByaname("aname").value = "";
//     document.getElementBydate("date").value = "";
// }


// function productUpdate() {
//     if ($("#bid").val() != null && $("#bid").val() != '') {
//         // Add product to Table
//         productAddToTable();

//         // Clear form fields
//         formClear();

//         // Focus to product name field
//         $("#bid").focus();
//     }
// }

// function productAddToTable() {
//     // First check if a <tbody> tag exists, add one if not
//     if ($("#productTable tbody").length == 0) {
//         $("#productTable").append("<tbody></tbody>");
//     }

//     // Append product to the table
//     $("#productTable tbody").append("<tr>" +
//         "<td>" + $("#bid").val() + "</td>" +
//         "<td>" + $("#bname").val() + "</td>" +
//         "<td>" + $("#aname").val() + "</td>" +
//         "<td>" + $("#date").val() + "</td>" +
//         "</tr>");
// }

// function formClear() {
//     $("#bid").val("");
//     $("#bname").val("");
//     $("#aname").val("");
//     $("#date").val("");
// }

// function productAddToTable() {
//     // First check if a <tbody> tag exists, add one if not
//     if ($("#productTable tbody").length == 0) {
//         $("#productTable").append("<tbody></tbody>");
//     }

//     // Append product to the table
//     $("#productTable tbody").append(
//         "<tr>" +
//         "<td>" + $("#bid").val() + "</td>" +
//         "<td>" + $("#bname").val() + "</td>" +
//         "<td>" + $("#aname").val() + "</td>" +
//         "<td>" + $("#date").val() + "</td>" +
//         "<td>" +
//         "<button type='button' onclick='productDelete(this);' class='btn btn-default'>" +
//         "<span class='glyphicon glyphicon-remove' />" +
//         "</button>" +
//         "</td>" +
//         "</tr>");
// }

// function productDelete(ctl) {
//     $(ctl).parents("tr").remove();
// }