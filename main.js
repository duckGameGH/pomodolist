let temps = 0;
let on = false;
let minutes = 0;
let seconds = 0;
let timer = undefined;
function add(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input").value = "";
}
function del(){
  const element = document.getElementById("demo");
  element.remove();
}

function time(){
  if(on == true) {
    temps++;
    minutes = Math.floor(temps / 60);
    seconds = temps - minutes * 60;
  }
  if (seconds < 10) {
    timer = minutes + " : 0" + seconds;
  }
  else {
   timer = minutes + ":" + seconds;
  }
  document.getElementById("time").innerText = timer;
}
function toggle(){
    if(on){
      document.getElementById("toggle").innerHTML = "Start";
      on = false;
    }
    else {
      document.getElementById("toggle").innerHTML = "Stop";
      on = true;
    }
}
document.getElementById("toggle").innerHTML = "Start";
setInterval(time, 1000);
