const lenghtEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-el");
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let equivalent = "";

convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;
  let lengthCalc = ` 
    <p>${inputValue} meters = ${(inputValue * 3.281).toFixed(
    3
  )} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters
    `;
  let volumeCalc = ` 
    <p>${inputValue} liters = ${(inputValue * 0.264).toFixed(
    3
  )} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters
    `;
  let massCalc = ` 
    <p>${inputValue} kilos = ${(inputValue * 2.204).toFixed(
    3
  )} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos
    `;

  lenghtEl.innerHTML = lengthCalc;
  volumeEl.innerHTML = volumeCalc;
  massEl.innerHTML = massCalc;
});
