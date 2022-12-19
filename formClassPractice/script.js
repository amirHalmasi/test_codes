let firstNameInput = document.getElementById("name");
let lastNameInput = document.getElementById("lastName");
let index = 0;
let dataArray = [];
let tbody = document.getElementById("tbody");
function getData() {
  let name = firstNameInput.value;
  let family = lastNameInput.value;
  addToArray(name, family);
  console.log(dataArray);
  //   addToArray(name, family);
}
function addToArray(dataName, dataLastName) {
  let data = {
    firstName: dataName,
    lastName: dataLastName,
    id: createIndex(),
  };
  dataArray.push(data);
  creatRow();
}
function createIndex() {
  index++;
  return index;
}
function creatRow() {
  tbody.innerHTML = "";
  for (let index = 0; index < dataArray.length; index++) {
    let row = tbody.insertRow(index);
    creatColume(row, index);
  }
}
function creatColume(row, rowNumber) {
  // console.log(rowNumber);
  let data = dataArray[rowNumber];
  for (let index = 0; index < 4; index++) {
    let cell = row.insertCell(index);
    if (index == 0) {
      cell.innerText = rowNumber + 1;
    } else if (index == 1) {
      cell.innerText = data.firstName;
    } else if (index == 2) {
      cell.innerText = data.lastName;
    } else if (index == 3) {
      cell.innerHTML = `
      <button type="button" class="btn btn-danger mx-2" onclick="deleteRow(${rowNumber}) ">
        <i class="material-icons" style="font-size: 18px" >delete</i>
      </button>
      <button type="button" class="btn btn-primary bg-succes">
        <i class="material-icons" style="font-size: 18px">edit</i>
      </button>`;
    }
  }
}

function deleteRow(rowNumber) {
  tbody.deleteRow(parseInt(rowNumber));
  delete dataArray[rowNumber];
  console.log(dataArray);
}
