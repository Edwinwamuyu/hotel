const mydiv = document.getElementById("myDiv");
const button = document.getElementById("btn");
const para = document.getElementById("graph")
const paragraph = document.getElementById("p");

button.addEventListener("click", function(){
    mydiv.style.backgroundColor = "lightblue";

    mydiv.style.width = "500px";
    mydiv.style.height  = "500px";

    para.style.color  = "red";
    para.style.fontSize  = "20px";
})

let a = 28;
let b;
let ans;


if(a <= 30) {
    a = Number(a);
    b = prompt("What is your age? ");

    if(b === 20) {

        ans = alert(`You are ${b} years and elegible to enter the site`);
        b = Number(b);
        

    } else 
      ans = alert(`You have not entered the required age`);

} else
 ans = alert(`above ${a} is not required`);