"use strict"

let mass = [
    ["1123123123123", "3", "Amil"],
    ["2", "433333333", "Iluxa"]
];


function makeTableHTML(myArray) {
    var result = "<table border=1>";
    for (var i = 0; i < myArray.length; i++) {
        result += "<tr>";
        for (var j = 0; j < myArray[i].length; j++) {
            result += "<td>" + myArray[i][j] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}
let markup = makeTableHTML(mass);
let elem = document.getElementById("table");
elem.insertAdjacentHTML("beforeend", markup);