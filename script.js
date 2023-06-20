var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var feedbacks1 = document.getElementById("feedbacks1");
var feedbacks2 = document.getElementById("feedbacks2");
var feedbacks3 = document.getElementById("feedbacks3");

button1.onclick = function(){
    
    feedbacks1.style.opacity = "1";
    feedbacks2.style.opacity = ".5" ;
    feedbacks3.style.opacity = ".5" ;
    feedbacks1.style.transform = "scale(125%)";
    feedbacks2.style.transform = "scale(80%)";
    feedbacks3.style.transform = "scale(100%)";
    feedbacks1.style.transition = "transform 1000ms, opacity 1000ms ";
    feedbacks2.style.transition = "transform 1000ms, opacity 1000ms ";
    feedbacks3.style.transition = "transform 1000ms, opacity 1000ms ";
    
    button1.style.borderColor = "#fff";
    button1.style.borderStyle = "solid";
    button1.style.borderWidth = "2px";

    button2.style.borderColor = "none";
    button2.style.borderStyle = "none";
    button2.style.borderWidth = "none";
    button3.style.borderColor = "none";
    button3.style.borderStyle = "none";
    button3.style.borderWidth = "none";
} 

button2.onclick = function(){
    feedbacks3.style.opacity = ".5";
    feedbacks2.style.opacity = "1";
    feedbacks1.style.opacity = ".5";
    feedbacks3.style.transform = "scale(100%)";
    feedbacks2.style.transform = "scale(100%)";
    feedbacks1.style.transform = "scale(100%)";
    feedbacks1.style.transition = "transform 1000ms, opacity 1000ms ";
    feedbacks2.style.transition = "transform 1000ms, opacity 1000ms ";
    feedbacks3.style.transition = "transform 1000ms, opacity 1000ms ";

    button2.style.borderColor = "#fff";
    button2.style.borderStyle = "solid";
    button2.style.borderWidth = "2px";

    button1.style.borderColor = "none";
    button1.style.borderStyle = "none";
    button1.style.borderWidth = "none";
    button3.style.borderColor = "none";
    button3.style.borderStyle = "none";
    button3.style.borderWidth = "none";
}
button3.onclick = function(){
    feedbacks3.style.opacity = "1";
    feedbacks3.style.transform = "scale(125%)";
    feedbacks1.style.opacity = ".5";
    feedbacks2.style.opacity = ".5";
    feedbacks2.style.transform = "scale(80%)";
    feedbacks1.style.transform = "scale(100%)";
    
    feedbacks1.style.transition = "transform 1000ms, opacity 1000ms ";
    feedbacks2.style.transition = "transform 1000ms, opacity 1000ms ";
    feedbacks3.style.transition = "transform 1000ms, opacity 1000ms ";

    button3.style.borderColor = "#fff";
    button3.style.borderStyle = "solid";
    button3.style.borderWidth = "2px";

    button1.style.borderColor = "none";
    button1.style.borderStyle = "none";
    button1.style.borderWidth = "none";
    button2.style.borderColor = "none";
    button2.style.borderStyle = "none";
    button2.style.borderWidth = "none";
}
