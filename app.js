var homeContainer = document.getElementById('home-wrapper');
var projectContainer = document.getElementById('project-wrapper');
var contactContainer = document.getElementById('contact-wrapper');

function homeMechanism(){
    document.getElementById('home-container').style.display = "flex";
    document.getElementById('contact-container').style.display = "none";
    document.getElementById('project-cntr').style.display = "none";
}

function projectMechanism(){
    document.getElementById('home-container').style.display = "none";
    document.getElementById('contact-container').style.display = "none";
    document.getElementById('project-cntr').style.display = "block";
}

function contactMechanism(){
    document.getElementById('home-container').style.display = "none";
    document.getElementById('contact-container').style.display = "block";
    document.getElementById('project-cntr').style.display = "none";
}

