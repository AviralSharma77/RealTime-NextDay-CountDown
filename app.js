const date = new Date();

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
let finalName = name.toUpperCase();
let day = date.getDate() + 1;
let year = date.getFullYear();

const currentDate = `${day} ${finalName} ${year}`;

document.getElementById("date-today").innerHTML = currentDate;
const inputs = document.querySelectorAll("input");


function clock () {
    const end = new Date(currentDate)
    const now = new Date()
    const diff = (end - now) / 1000 ;
  
    inputs[0].value = (Math.floor(diff / 3600 / 24));
    inputs[1].value = (Math.floor(diff / 3600) % 24);
    inputs[2].value = (Math.floor(diff / 60) % 60);
    inputs[3].value = (Math.floor(diff % 60));
    
}

clock()
setInterval(clock, 1000)
