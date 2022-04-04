function addNewField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add(" ")
}

var name;
var first_name;
var last_name;
class tittle{
    constructor(first_name, last_name){
        this.first_name = first_name;
        this.last_name = last_name;
    }
}

let user = {
    first_name: "Amarilys",
    last_name: "Otero Ayala",
  
    set fullName(value) {
      [this.first_name, this.las_name] = value.split(" ");
    },
  
    get fullName() {
      return `${this.first_name} ${this.last_name}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
class tittleSection {
    constructor(name) { 
        this.name = name;
    }
}
var mydata = JSON.parse(cv);
