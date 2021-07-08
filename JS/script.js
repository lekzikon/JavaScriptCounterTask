
let valueNumber = document.querySelector('#number');
let valueSubtract = document.querySelector('#subtract');
let valueAddNumber = document.querySelector('#addNumber');

let value = 0;

valueCounter();

valueAddNumber.addEventListener("click",()=>{
    value++;
    valueCounter();
}) ;

valueSubtract.addEventListener("click",()=>{
    value--;
    valueCounter();
});

function valueCounter(){
    valueNumber.innerHTML = value;
    if(value === -1){
		value = 0;
		valueNumber.innerHTML = value;
       }
    if(value === 51){
      value = 50;
      valueNumber.innerHTML = value;
       }
}