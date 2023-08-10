// Inputs
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

// Outputs
const dayOutput = document.getElementById("dd");
const monthOutput = document.getElementById("mm");
const yearOutput = document.getElementById("yy");

// Titles
const title = document.querySelector("label");
const dayTitle = document.getElementById("day-title");
const monthTitle = document.getElementById("month-title");
const yearTitle = document.getElementById("year-title");

// Form
const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (!input.value) {
      dayTitle.style.color = "red";
      monthTitle.style.color = "red";
      yearTitle.style.color = "red";
      input.style.borderColor = "red";
      parent.querySelector("small").innerText = "This field in required";
      validator = false;
    } else if (dayInput.value > 31) {
      dayTitle.style.color = "red";
      dayInput.style.borderColor = "red";
      dayInput.parentElement.querySelector("small").innerText =
        "Must be a valid day";
      validator = false;
    } else if (monthInput.value > 12) {
      monthTitle.style.color = "red";
      monthInput.style.borderColor = "red";
      monthInput.parentElement.querySelector("small").innerText =
        "Must be a valid month";
      validator = false;
    } else if (yearInput.value > 2023) {
      yearTitle.style.color = "red";
      yearInput.style.borderColor = "red";
      yearInput.parentElement.querySelector("small").innerText =
        "Must be in the past";
      validator = false;
    } else {
      dayTitle.style.color = "grey";
      monthTitle.style.color = "grey";
      yearTitle.style.color = "grey";
      input.style.borderColor = "grey";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInput.value > day) {
      day = day + months[month - 1];
    }
    if (monthInput.value > 12) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInput.value;
    const m = month - monthInput.value;
    const y = year - yearInput.value;

    dayOutput.innerText = d;
    monthOutput.innerText = m;
    yearOutput.innerText = y;
  }
}
