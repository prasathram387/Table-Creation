"use strict";
exports.__esModule = true;
exports.createTable = void 0;
function createTable(key, data) {
    var table = document.createElement("table");
    generateTable(table, key, data);
    generateTableHead(table, key);
    return table;
}
exports.createTable = createTable;
function generateTableHead(table, key) {
    var thead = table.createTHead();
    var trow = thead.insertRow();
    for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
        var data = key_1[_i];
        var tableHead = document.createElement("th");
        var text = document.createTextNode(data);
        tableHead.appendChild(text);
        trow.appendChild(tableHead);
    }
    return table;
}
function generateTable(table, key, data) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var element = data_1[_i];
        var row = table.insertRow();
        for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
            var keyVal = key_2[_a];
            for (var elementKey in element) {
                if (keyVal === elementKey) {
                    var cell = row.insertCell();
                    if (element[elementKey] === null) {
                        var text = document.createTextNode(" ");
                        cell.appendChild(text);
                    }
                    else {
                        var text = document.createTextNode(element[elementKey]);
                        cell.appendChild(text);
                    }
                }
            }
        }
    }
    return table;
}
