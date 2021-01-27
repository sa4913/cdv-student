console.log(document);

function makeThem()
{
  var tooMany = document.getElementById("howMany").value;
  for (i = 0; i < tooMany; i++){
    let addOne = document.createElement();
    addOne.src = "shaun.gif";
    document.getElementById("background").appendChild(addOne);
  }
}
function getOption() {

  var index = document.getElementById("mySelect").selectedIndex;
  if (index == 0){
    document.getElementById("change").src = "shaun.gif";
  }
  else if (index == 1){
    document.getElementById("change").src = "kermit.gif";
  }
  else if (index == 2){
    document.getElementById("change").src = "jake.gif";
  }
  else if (index == 3){
    document.getElementById("change").src = "snoopy.gif"
  }
  else{

  }
}


/*
var obj = document.getElementById("mySelect");
let dancer = document.createElement("img");

let dude = document.createElement("img");
dude.src = "neutral.png";

function eyes()
{
  let newEyes = document.createElement("img");
  newEyes.src = "eyes.png";
  document.getElementById("background").appendChild(newEyes);
}
 function suspicious()
 {
   document.getElementById("ID").src = "sneaky.png";
   document.getElementById("caption").innerHTML = "SUSPICIOUS";
   document.getElementById("caption").style.width = "275px";
 }
 function dont()
 {
   document.getElementById("ID").src = "innocent.png";
   document.getElementById("caption").innerHTML = "INNOCENT";
 } */
