const increment=document.querySelector("#increment");
const decrement=document.querySelector("#decrement");
const reset=document.querySelector("#reset");
const displayValue=document.querySelector(".display");

console.log(increment);
console.log(decrement);
console.log(reset);
console.log(displayValue);

let counter=0;

let updateDisplayedValue=()=>{
    displayValue.textContent=counter;
}

increment.addEventListener("click" ,()=>{
    counter++;
    updateDisplayedValue();
})

decrement.addEventListener("click" ,()=>{
    counter--;
    updateDisplayedValue();
})

reset.addEventListener("click" ,()=>{
    counter=0;
    updateDisplayedValue();
})


