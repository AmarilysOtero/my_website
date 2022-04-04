function addNewField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add(" ")
}

class curriculumv{

    #first_name;
    #last_name;
    #email;
    #adress;
    #school;
    #work;

    constructor(){
        this.#name = "Amarilys Joan Otero Ayala";
        this.#email = "amarilys.otero@upr.edu";
        this.#adress = "Bo. Quebradas Carr. 375, Yauco PR";
      }

    objetive(){
        console.log("Be part of a dynamic team where I can put into practice all my knowledge, achieve the overall goals of the team and the responsibilities in my charge, with the opportunity \n");
        console.log("to continue developing in the area of work, personnel and intellectual field. \n");

    }

    education(){
        console.log("AUGUST 2021 - TO PRESENT")
        console.log("BS COMPUTER SCIENCE, " + this.#school + "\n");

    }
    experience(){
        console.log("AUGUST 2019 - DECEMBER 2019")
        console.log("CUSTOMER SERVICE, " + this.#work + "\n");
    }
    skills(){
        console.log("JAVA");
        console.log("C++");
        console.log("HTML");
        console.log("CSS");
    }

    extracurricular(){
        console.log("RUMblebots");
    }
    references(){
      console.log("Available upon request.");
    }

    get getFname(){
        return this.#first_name;
    }
    get getLname(){
        return this.#last_name;
    }
    get getEmail(){
        return this.#email;
    }

}

var mydata = JSON.parse(cv);
