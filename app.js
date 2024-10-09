const form = document.querySelector("#matrix-form");
const boxes1 = document.querySelector("#inp-boxes1");
const boxes2 = document.querySelector("#inp-boxes2");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const resultDiv = document.querySelector("#result-box");

let matrixLength;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  matrixLength = Number(event.target.children[0].value);

  boxes1.innerHTML = "";
  boxes2.innerHTML = "";

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixLength; j++) {
      boxes1.innerHTML += `<input type="number" id="mat-box1${i}${j}" style="width: 30px; margin: 3px;" value="0">`;
      boxes2.innerHTML += `<input type="number" id="mat-box2${i}${j}" style="width: 30px; margin: 3px;" value="0">`;
    }
    boxes1.innerHTML += `<br>`;
    boxes2.innerHTML += `<br>`;
  }
});

addBtn.addEventListener("click", () => {
  addMatrix()
});
  const addMatrix = () => {
    resultDiv.innerHTML = "";

    for (let i = 0; i < matrixLength; i++) {
      for (let j = 0; j < matrixLength; j++) {
        const value1 = Number (document.querySelector(`#mat-box1${i}${j}`).value);
        const value2 = Number (document.querySelector(`#mat-box2${i}${j}`).value);

        const result = Number (value1) + Number (value2);

        resultDiv.innerHTML += `<input type="number" style="width: 30px; margin: 3px;" value="${result}">`;
      }
      resultDiv.innerHTML += "<br/>";
    }
  };

subBtn.addEventListener("click", () => {
  subMatrix()
});

  const subMatrix = () => {
    resultDiv.innerHTML = "";

    for (let i = 0; i < matrixLength; i++) {
      for (let j = 0; j < matrixLength; j++) {
        const value1 = Number (document.getElementById(`mat-box1${i}${j}`).value);
        const value2 = Number (document.getElementById(`mat-box2${i}${j}`).value);                

        const result = Number (value1) - Number (value2);

        resultDiv.innerHTML += `<input type="number" style="width: 30px; margin: 3px;" value="${result}">`;
      }
      resultDiv.innerHTML += "<br/>";
    }
  };
