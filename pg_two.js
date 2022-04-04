const fbn = document.getElementById('tbn');
const btn2 = document.getElementById('btn2');
const out2 = document.getElementById('output2');

function fibonacciGen(n){

    var output = [];
    if (n === 1){
        output = [0];
    }
    else if(n === 2){
        output = [0,1];
    }
    else{
        output = [0,1];
        for(var i =2;  i < n; i++){
        output.push(output[output.length - 2] + output [output.length - 1]);
        }
    }
    return output;
}
function outputResult(){
    var output = fibonacciGen(fbn.value);
    console.log(output);
    out2.innerHTML= output;
}

btn2.addEventListener('click',outputResult);

// output = fibonacciGen(5);
// console.log(output);
