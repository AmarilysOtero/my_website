// Classes for a curriculum vitae
class profile_data{
    constructor(name, hometown, email, title){
        this.name = name;
        this.homeTown = hometown;
        this.email = email;
        this.title = title;
    }
}
class objetive_data{
    constructor(p){
        this.paragraph = p;
    }
}
class education_data{
    constructor(date, degree, name, place, courses){
        this.date = date;
        this.degree = degree;
        this.name = name;
        this.place = place;
        this.courses = courses;
    }
}
class experience_data{
    constructor(date, position, name, place, chores){
        this.date = date;
        this.position = position;
        this.name = name;
        this.place = place;
        this.chores = chores;
    }
}

class extracurricular_data{
    constructor(position, asociation_name, place, activities){
        this.position = position;
        this.aname = asociation_name;
        this.place = place;
        this.act = activities;
    }
}
class skills_data{
    constructor(skill){
        this.skill = skill
    }
}


// CV ----> Resume

// function to retrieve elements from the resume.json file
function resumeTemplate(element){
    return `
    <div class="profile">
       <h2> ${element.ProfileName}</h2>
       <h3> ${element.email}</h3>
       <h3> ${element.homeTown}</h3>
       <h3> ${element.title}</h3>
       <h3> ${element.education}</h3>
       <h3> ${element.education}</h3>
       <h3> ${element.experience}</h3>
       <h4> ${element.experience[0].date}</h4>
       <h4> ${element.experience[1].position}</h4>
       <h4> ${element.experience[2].name}</h4>
       <h4> ${element.experience[3].chores}</h4>
       <h3> ${element.extracurricular}</h3>
       <h3> ${element.skills}</h3>
       <h3> ${element.references}</h3>
    </div>
    `
 }

 // Browsing for a JSON File
 async function getJSONFILE(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var resume = response.resume;
            var output = ''
            for (var i = 0; i <resume.length; i++){
                output += '<li>' +resume[i].ProfileName+'</li>';
         }
        
        document.getElementById('resume').innerHTML = `${resume.map(resumeTemplate).join('')}`
        display_data(resume)
    }
};
    xhttp.open("GET", "resume.json", true);
    xhttp.send();
 }
function printResume(){   
    var element = document.getElementById('resume')
    html2pdf(element); 
}  

// Browsing for a JSON File
// async function display() {

//     const requestURL = '/resume.json';
//     const request = new Request(requestURL);

//     const response = await fetch(request);
//     const resume = await response.json();
    
//     display_data(resume)

//   }

  // Display in HTML
function display_data(entry){
    const section = document.querySelector('section');
    const profile = new profile_data(entry.ProfileName, entry.homeTown, entry.email, entry.title);
    const obj = new objetive_data(entry.title);
    var ed = new education_data(entry.date, entry.degree, entry.name, entry.place, entry.courses);
    var ex = new experience_data(entry.date, entry.position, entry.name, entry.place, entry.chores);
    var extra = new extracurricular_data(entry.position, entry.asociation_name, entry.place, entry.activities)
    var skill = new skills_data(entry.skill)
    const cvArticle = document.createElement('article');
    const myList = document.createElement('ul');


    document.getElementById("profile").innerHTML = profile.ProfileName;
    document.getElementsById("objv").innerHTML = obj.title;
    document.getElementById("ed-date").innerHTML = ed.education[0];
    document.getElementById("ed-degree").innerHTML = ed.education[1];
    document.getElementById("ed-name").innerHTML = ed.education[2];
    document.getElementById("ed-place").innerHTML = ed.education[3];
    document.getElementById("ed-course").innerHTML = ed.education[4];
    const Courses = entry.courses;
      for (const course of Courses) {
        const listItem = document.createElement('li');
        listItem.textContent = course;
        myList.appendChild(listItem);
      }
    document.getElementById("ex-date").innerHTML = ex.experience[0];
    document.getElementById("ex-degree").innerHTML = ed.experience[1];
    document.getElementById("ex-name").innerHTML = ed.experience[2];
    document.getElementById("ex-place").innerHTML = ed.experience[3];
    document.getElementById("ex-course").innerHTML = ed.experience[4];
    const Chores = entry.chores;
      for (const chores of Chores) {
        const listItem1 = document.createElement('li');
        listItem1.textContent = chores;
        myList.appendChild(listItem1);
      }

      cvArticle.appendChild()
      cvArticle.appendChild(listItem);
      cvArticle.appendChild(listItem1);

      section.appendChild(cvArticle);
}

getJSONFILE();