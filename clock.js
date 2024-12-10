let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");
setInterval(() => {
let currentTime = new Date();
hrs.innerHTML = currentTime.getHours();
mins.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
}, 1000);