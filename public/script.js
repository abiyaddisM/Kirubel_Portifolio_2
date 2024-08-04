
//for screens less than 768px for the navbar to be active when clicked on the menu btn
header3=document.getElementById("menu_btn");
header3.onclick = function(){
    navBar=document.querySelector(".navbar");
    navBar.classList.toggle("active");
}

