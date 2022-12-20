let firstNameInput = document.getElementById("name");
let lastNameInput = document.getElementById("lastName");
let submitButton = document.getElementById("btn");
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
      // cell.innerHTML = `
      // <button type="button" class="btn btn-danger mx-2" onclick="deleteRow(${rowNumber})">
      //   <i class="material-icons" style="font-size: 18px" >delete</i>
      // </button>
      // <button type="button" class="btn btn-primary bg-succes">
      //   <i class="material-icons" style="font-size: 18px">edit</i>
      // </button>`;
      let del = document.createElement("button");
      del.innerText = "del";
      del.style.padding = "5px";
      del.onclick = function () {
        deleteRow(row, data.id);
      };
      cell.appendChild(del);
      let edit = document.createElement("button");
      edit.innerText = "edit";
      edit.style.padding = "5px";
      edit.onclick = function () {
        editRow(data.id);
      };
      cell.appendChild(edit);
    }
  }
}

function deleteRow(row, id) {
  let rowParent = row.parentNode;
  console.log("this is row parent" + rowParent);
  rowParent.removeChild(row);
  let index = findIndexByID(id);
  console.log(index);
  dataArray.splice(index, 1);
  creatRow();
}

function editRow(id) {
  let index = findIndexByID(id);
  let data = dataArray[index];
  firstNameInput.value = data.firstName;
  lastNameInput.value = data.lastName;
  submitButton.value = "edit";
  submitButton.onclick = () => {
    editData(index);
  };
}

function editData(index) {
  let fn = firstNameInput.value;
  let ln = lastNameInput.value;
  dataArray[index].firstName = fn;
  dataArray[index].lastName = ln;
  creatRow();
  submitButton.value = "submit";
  submitButton.onclick = () => {
    getData();
  };
}

function findIndexByID(id) {
  let index = -1;
  dataArray.forEach((element, i) => {
    if (element.id == id) {
      index = i;
    }
  });
  return index;
}
