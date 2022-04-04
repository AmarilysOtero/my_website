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
