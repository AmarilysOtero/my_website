// Author of the idea:      Angela Yu
// Date:        01/2018
// Modify by: Amarilys Otero
// Date:        04/2022
// Description: It use an array of names to Randomly print out who's gonna buy lunch

names = ["Abner", "Ariel","Darell", "DiegoRC", "Diego RG", "Eloi", "Francisco", "Harry", "Kevin", "Norberto"]
const btn3 = document.getElementById('btn3');
const out3 = document.getElementById('output3');

function whosPaying(names) {
        var people = names.length;
        var randomPosition = Math.floor(Math.random() * people);
        var randomPerson = names[randomPosition];

        return randomPerson + " is going to pay lunch today for the whole group!"
}


function outputResult(){
    var output = whosPaying(names);
    console.log(output);
    out3.innerHTML= output;
}

btn3.addEventListener('click',outputResult);
