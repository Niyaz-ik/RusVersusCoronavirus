data = [{
        amountOfDays: "12",
        covidState: "true",
        patientState: "normal",
        hash: "1ed32df45gw2"
    },
    {
        amountOfDays: "0",
        covidState: "false",
        patientState: "normal",
        hash: "1ed32df45gw3"
    },
    {
        amountOfDays: "30",
        covidState: "true",
        patientState: "died",
        hash: "1ed32df45gw4"
    },
    {
        amountOfDays: "2",
        covidState: "true",
        patientState: "normal",
        hash: "1ed32df45gw5"
    }
]
let mas = [
    ["row 1, cell 1", "row 1, cell 2"],
    ["row 2, cell 1", "row 2, cell 2"]
];



function createTable(tableData) {
    // const contentElement = document.querySelector("#root");
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}


// function makeTableHTML(myArray) {
//     var result = "<table border=1>";
//     for (var i = 0; i < myArray.length; i++) {
//         result += "<tr>";
//         for (var j = 0; j < myArray[i].length; j++) {
//             result += "<td>" + myArray[i][j] + "</td>";
//         }
//         result += "</tr>";
//     }
//     result += "</table>";

//     return result;
// }

const contentElement = document.querySelector("#root");
contentElement.innerHTML = createTable(mas);;