let homeElement = document.getElementById("home");//.addEventListener("click", scroll);
let aboutElement = document.getElementById("about");//.addEventListener("click", scroll);
let projectsElement = document.getElementById("project");//.addEventListener("click", scroll);
//let contactElement = document.getElementById("con");//.addEventListener("click", scroll);

/*var gitElement = document.getElementById("fab fa-github");//.addEventListener("click", scroll);
var linkedinElement = document.getElementById("fab fa-linkedin-in");//.addEventListener("click", scroll);
var gmailElement = document.getElementById("fab fa-gmail");
*/
let downElement = document.getElementById("down");

  
homeElement.addEventListener('click', homeHandler); 
aboutElement.addEventListener('click', aboutHandler); 
projectsElement.addEventListener('click', projectsHandler); 
//contactElement.addEventListener('click', contactHandler); 

downElement.addEventListener('click', downHandler);


let homeIsClicked = false; // declare the variable that tracks the state
let aboutIsClicked = false;
let projectsIsClicked = false;
//let contactIsClicked = false;
let downIsClicked = false;

function downHandler(){
    homeIsClicked = false; // declare the variable that tracks the state
    aboutIsClicked = false;
    projectsIsClicked = false;
    //contactIsClicked = false;
    downIsClicked = true;
    isClicked();
}

function homeHandler(){ 
    homeIsClicked = true;
    aboutIsClicked = false;
    projectsIsClicked = false;
    //contactIsClicked = false;
    downIsClicked = false;
    isClicked(); 
}

function aboutHandler(){
    aboutIsClicked = true;
    homeIsClicked = false;
    projectsIsClicked = false;
    //contactIsClicked = false;
    downIsClicked = false;
    isClicked();
}
  
function projectsHandler(){
    aboutIsClicked = false;
    homeIsClicked = false;
    projectsIsClicked = true;
    //contactIsClicked = false;
    downIsClicked = false;
    isClicked();
}

function contactHandler(){ 
    aboutIsClicked = false;
    homeIsClicked = false;
    projectsIsClicked = false;
    //contactIsClicked = true;
    downIsClicked = false;
    isClicked();
}


function isClicked() {
    if(homeIsClicked) {
        scroll(".title");
    }
    else if(aboutIsClicked) {
        scroll(".row");
    }
    else if(projectsIsClicked) {
        scroll(".uniProjects");
    }
    /*else if(contactIsClicked) {
        scroll(".contactContainer");
    }*/
    else if(downIsClicked) {
        console.log("testing");
        scroll(".row");
    }
}

function scroll(element) {
    $('html,body').animate({
        scrollTop: $(element).offset().top},
        'slow');
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}







