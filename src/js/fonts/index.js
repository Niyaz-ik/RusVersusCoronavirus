const Web3 = require("Web3")

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
   } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
   }

// const web3 = new Web3(new Web3.providers.HttpProviders("http://localhost:8545"));

const abi = [{ "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "day", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "covid_status", "type": "bool" }, { "indexed": false, "internalType": "string", "name": "condition", "type": "string" }], "name": "newRecord", "type": "event" }, { "inputs": [{ "internalType": "string", "name": "firstName", "type": "string" }, { "internalType": "string", "name": "lastName", "type": "string" }], "name": "addPatient", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "patientId", "type": "uint256" }, { "internalType": "bool", "name": "covid_status", "type": "bool" }, { "internalType": "string", "name": "state", "type": "string" }], "name": "addRecordState", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "patientId", "type": "uint256" }], "name": "getLastRecord", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "patientId", "type": "uint256" }], "name": "getPatient", "outputs": [{ "internalType": "string", "name": "", "type": "string" }, { "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "patientId", "type": "uint256" }], "name": "getPatientRecords", "outputs": [{ "components": [{ "internalType": "uint256", "name": "record_number", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "day", "type": "uint256" }, { "internalType": "bool", "name": "covid_status", "type": "bool" }, { "internalType": "string", "name": "condition", "type": "string" }], "internalType": "struct SimpleStorage.patientState[]", "name": "records", "type": "tuple[]" }], "internalType": "struct SimpleStorage.patientStates", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }]
const address = "0xaf1d719f7f615d05e1eff870d0583f105c5bf29f";

const contract = new web3.eth.Contract(abi, address)

async function getData() {
    var r = await contract.methods.getPatientRecords(1).call()
    console.log(r)
    let markup = makeTableHTML(r);
    console.log(markup)
    let m2 = "<table border=1><tr><td>1</td><td>true</td><td>Serious</td></tr><tr><td>2</td><td>true</td><td>Fair</td></tr><tr><td>3</td><td>false</td><td>Good</td></tr></table>"
    let elem = document.getElementById("table");
    elem.insertAdjacentHTML("beforeend", markup);
}



let mass = [
    ["1123123123123", "3", "Amil"],
    ["2", "433333333", "Iluxa"]
];


function makeTableHTML(myArray) {
    var result = "<table border=1>";
    for (var i = 1; i <= myArray[0]; i++) {
        result += "<tr>";

        result += "<td>" + myArray[1][i].day + "</td>";
        result += "<td>" + myArray[1][i].covid_status + "</td>";
        result += "<td>" + myArray[1][i].condition + "</td>";

        result += "</tr>";
    }
    result += "</table>";

    return result;
}

getData()
