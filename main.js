const input = document.querySelector("#areaScreen");
const output = document.querySelector("#areaResult");

  

//inputs numbers

const button7 = document.querySelector("#b1");
const button8 = document.querySelector("#b2");
const button9 = document.querySelector("#b3");
const button4 = document.querySelector("#c1");
const button5 = document.querySelector("#c2");
const button6 = document.querySelector("#c3");
const button1 = document.querySelector("#d1");
const button2 = document.querySelector("#d2");
const button3 = document.querySelector("#d3");
const button0 = document.querySelector("#e1");

//
const equal = document.querySelector("#e4");
const buttonSoma = document.querySelector("#d4");
const buttonDiv = document.querySelector("#a4");
const buttonSub = document.querySelector("#c4");
const buttonMult = document.querySelector("#b4");

const buttonDel= document.querySelector("#e3");

const buttonPow = document.querySelector('#a1');


button1.addEventListener('click', () => {
  
  input.value += 1;
  areaScreen.innerHTML += "1";
  
  
  
 showResult();
})
button2.addEventListener('click', () => {
 input.value += 2;
 areaScreen.innerHTML += 2;
  showResult();
})
button3.addEventListener('click', () => {
 input.value += 3;
 areaScreen.innerHTML += 3;
 showResult();
})
button4.addEventListener('click', () => {
 input.value += 4;
 areaScreen.innerHTML += 4;
 showResult();
})
button5.addEventListener('click', () => {
 input.value += 5;
 areaScreen.innerHTML += 5;
 showResult();
})
button6.addEventListener('click', () => {
  input.value += 6;
  areaScreen.innerHTML += 6;
  showResult();
})
button7.addEventListener('click', () => {
  input.value += 7;
  areaScreen.innerHTML += 7;
  showResult();
})
button8.addEventListener('click', () => {
  input.value += 8;
  areaScreen.innerHTML += 8;
  showResult();
})
button9.addEventListener('click', () => {
  input.value += 9;
  areaScreen.innerHTML += 9;
  showResult();
})
button0.addEventListener('click', () => {

  input.value += 0;
  areaScreen.innerHTML +=0;
  showResult();
})

equal.addEventListener('click',() => {
  
  const result = eval(input.value);
  
  output.value = result;
  
})
function showResult()
{
  const result = eval(input.value);
  
  output.value = result;
}
buttonSoma.addEventListener('click', ()=>{
  
  
   input.value += "+";
})
buttonSub.addEventListener('click', ()=>{
  
  
   input.value += "-";
})
buttonMult.addEventListener('click', ()=>{
  
  
   input.value += "*";
})
buttonDiv.addEventListener('click', ()=>{
  
  
   input.value += "/";
})
buttonDel.addEventListener('click', ()=>{
  
 input.value= "";
 output.value = "";
  

})

buttonPow.addEventListener('click', ()=>{
  
 input.value += "**";
  

})


 
  