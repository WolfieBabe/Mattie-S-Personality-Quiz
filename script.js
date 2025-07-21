var dojaCat = 0
var lizzo = 0
var qcount = 0

var result = document.getElementById('end')

var q1a1 = document.getElementById('q1a1');
var q1a2 = document.getElementById('q1a2');
var q2a1 = document.getElementById('q2a1');
var q2a2 = document.getElementById('q2a2');
var q3a1 = document.getElementById('q3a1');
var q3a2 = document.getElementById('q3a2');

q1a1.addEventListener('click', plusL);
q1a2.addEventListener('click', plusD);
q2a1.addEventListener('click', plusL);
q2a2.addEventListener('click', plusD);
q3a1.addEventListener('click', plusD);
q3a2.addEventListener('click', plusL);

function plusL() {
  lizzo++;
  qcount++;
  console.log("L=" + lizzo + ",", "D=" + dojaCat + ",", "QC=" + qcount);
  if (qcount == 3) {
    end();
    console.log("Finished");
  }
}
function plusD() {
  dojaCat++;
  qcount++;
  console.log("L=" + lizzo + ",", "D=" + dojaCat + ",", "QC=" + qcount);
  if (qcount == 3) {
    console.log("Finished");
    end();
  }
}
function end() {
  if (dojaCat == 2 || dojaCat == 3) {
    console.log("Doja");
    result.innerHTML = "You are more of a Doja Cat"
  } else if (lizzo == 2 || lizzo == 3) {
    console.log("Lizzo");
    result.innerHTML = "You are more of a Lizzo"
  } else {
    console.log("error")
    result.innerHTML = "error"
  }
}