let fieldErrors = document.querySelector(".field-errors");
let dateErrors = document.querySelector(".date-error");
let submitBtn = document.getElementById("submit-btn");
let allInputs = document.getElementsByTagName("input");
let allLabels = document.getElementsByTagName("label");

submitBtn.addEventListener("click", () => {
  let inputDayVal = document.getElementById("input-day").value;
  let inputMonthVal = document.getElementById("input-month").value;
  let inputYearVal = document.getElementById("input-year").value;

  let newDate = new Date();
  let currentYear = newDate.getFullYear();
  let allDays = "31";
  let allMonths = "12";

  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].style.borderColor = "hsl(0, 0%, 86%)";
    allLabels[i].style.color = "hsl(0, 1%, 44%)";
  }
  fieldErrors.style.display = "none";
  dateErrors.style.display = "none";

  if (inputDayVal == "" || inputMonthVal == "" || inputYearVal == "") {
    console.log("how");
    for (let i = 0; i < allInputs.length; i++) {
      allInputs[i].style.borderColor = "hsl(0, 100%, 67%)";
      allLabels[i].style.color = "hsl(0, 100%, 67%)";
    }
    dateErrors.style.display = "none";
    fieldErrors.style.display = "flex";
  } 
});