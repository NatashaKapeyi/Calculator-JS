const display =document.querySelector('.screen');
const buttons =document.querySelectorAll('button');
const operators = ["+","-","*","/","=",];
 sum = ""

const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== "" ) {
        sum= eval(sum.replace( "%", "/100"));
    } else if  (btnValue === "CE"){
        sum= sum.slice(0, -1)
    } else {
        if (sum ==="" && operators.includes(btnValue)) return; 
        sum +=btnValue;

    }
    display.value = sum
};


buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))

})