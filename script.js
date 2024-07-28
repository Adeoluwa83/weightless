'use strict';


var kilo = document.getElementById('kilo');
const pounds = document.getElementById('pounds');
const ounces = document.getElementById('ounces');
const grams = document.getElementById('grams');
const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
 var kiloInput =  kilo.value;
  console.log(kiloInput);

 


function convertToPounds() {
    let   pound =kiloInput * 2.20462;
    console.log(pound)

    pounds.innerHTML =`${pound} lbs`;
}
convertToPounds();

function convertToOunce() {
    let   ounce =2 * kiloInput   * 35.274     ;
    console.log(ounce)

    ounces.innerHTML =`${ounce} g
    `;
}
convertToOunce();
function convertToGram() {
    let   gram =kiloInput * 1000
    ;
    console.log(gram)

    grams.innerHTML =`${gram} oz`;
}
convertToGram();
});
