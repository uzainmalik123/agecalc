let fieldErrors = document.querySelector('.field-errors');
let dateErrors = document.querySelector('.date-errors');
let submitBtn = document.getElementById('submit-btn');
let allInputs = document.getElementsByTagName('input');
let allLabels = document.getElementsByTagName('label')

submitBtn.addEventListener('click', () => {
    let inputDayVal = document.getElementById('input-day').value;
    let inputMonthVal = document.getElementById('input-month').value;
    let inputYearVal = document.getElementById('input-year').value;
    if(inputDayVal == '' || inputMonthVal == '' || inputYearVal == ''){
        for(let i = 0; i < allInputs.length; i++) {
            allInputs[i].style.borderColor = 'hsl(0, 100%, 67%)'; 
            allLabels[i].style.color = 'hsl(0, 100%, 67%)'; 
        }
        fieldErrors.style.display = "flex"
    }
})