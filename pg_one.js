
var newlabel = document.createElement("Username");
newlabel.setAttribute("for",id_from_input);
newlabel.innerHTML = "Here goes the text";
parentDiv.appendChild(newlabel);

function bodyMassCalculator(w,h){
    var bmi = w / Math.pow(h, 2);
    return bmi;
}

function myFunction() {
    document.getElementById("username").innerHTML = "Paragraph changed.";
  }

var bodymi= bodyMassCalculator(65, 1.8);
console.log(bodymi);
document.write(bodymi);

