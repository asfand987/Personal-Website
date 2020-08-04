var homeElement = document.getElementById("home");//.addEventListener("click", scroll);
var aboutElement = document.getElementById("about");//.addEventListener("click", scroll);
var projectsElement = document.getElementById("project");//.addEventListener("click", scroll);
var contactElement = document.getElementById("con");//.addEventListener("click", scroll);

homeElement.addEventListener('click', homeHandler); 
aboutElement.addEventListener('click', aboutHandler); 
projectsElement.addEventListener('click', projectsHandler); 
contactElement.addEventListener('click', contactHandler); 

var homeIsClicked = false; // declare the variable that tracks the state
var aboutIsClicked = false;
var projectsIsClicked = false;
var contactIsClicked = false;

function homeHandler(){ 
    homeIsClicked = true;
    aboutIsClicked = false;
    projectsIsClicked = false;
    contactIsClicked = false;
    isClicked(); 
}

function aboutHandler(){
    aboutIsClicked = true;
    homeIsClicked = false;
    projectsIsClicked = false;
    contactIsClicked = false;
    isClicked();
}
  
function projectsHandler(){
    aboutIsClicked = false;
    homeIsClicked = false;
    projectsIsClicked = true;
    contactIsClicked = false;
    isClicked();
}

function contactHandler(){ 
    aboutIsClicked = false;
    homeIsClicked = false;
    projectsIsClicked = false;
    contactIsClicked = true;
    isClicked();
}



function isClicked() {
    console.log("Testing");
    if(homeIsClicked) {
        scroll(".title");
    }
    else if(aboutIsClicked) {
        scroll(".row");
    }
    else if(projectsIsClicked) {
        scroll(".uniProjects");
    }
    else if(contactIsClicked) {
        scroll(".contactContainer");
    }
}

function scroll(element) {
    $('html,body').animate({
        scrollTop: $(element).offset().top},
        'slow');
}

