const txt1 = document.getElementById('tbuser1');
const txt2 = document.getElementById('tbuser2');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function bodyMassCalculator(w,h){
  var bmi = w / Math.pow(h, 2);
  return Math.round(bmi);
}
function outputResult(){
  var bmo = bodyMassCalculator(txt1.value, txt2.value);
  console.log(bmo);
  out1.innerHTML= bmo;
}

btn1.addEventListener('click',outputResult);


// var bodymi= bodyMassCalculator(65, 1.8);
// console.log(bodymi);
// document.write(bodymi);
