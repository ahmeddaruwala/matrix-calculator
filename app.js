const form = document.getElementById("matrix-form");
const boxes1 = document.getElementById("inp-boxes1");
const boxes2 = document.getElementById("inp-boxes2");
const addBtn = document.getElementById("add");
const result = document.getElementById("result-box");

let matrixLength;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  matrixLength = Number(event.target.children[0].value);

  boxes1.innerHTML = "";
  boxes2.innerHTML = "";
  result.innerHTML = "";

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixLength; j++) {
      boxes1.innerHTML += `<input type="number" id="mat-box1${i}${j}" style="width: 30px;" value="0">`;
      boxes2.innerHTML += `<input type="number" id="mat-box2${i}${j}" style="width: 30px;" value="0">`;
    }
    boxes1.innerHTML += `<br>`;
    boxes2.innerHTML += `<br>`;
  }
});

addBtn.addEventListener("click", () => {
  const sum_of_Array = [];

  for (let i = 0; i < matrixLength; i++) {
    let addedValue = [];
    for (let j = 0; j < matrixLength; j++) {
      const value1 = Number(document.getElementById(`mat-box1${i}${j}`).value);

      const value2 = Number(document.getElementById(`mat-box2${i}${j}`).value);

      addedValue.push(value1 + value2);
    }
    sum_of_Array.push(addedValue);
  }
  result.innerHTML = "<h5>Sum of both Matrices: <h5>";

  for (let i = 0; i < sum_of_Array.length; i++) {
    result.innerHTML += sum_of_Array[i].join(" ") + `<br>`;
  }
});
