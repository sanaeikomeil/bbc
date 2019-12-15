var starTime = new Date().getTime();

function makeFlexAppear () {
    var left = Math.random() * 1000;
    var width = Math.random() * 500;
    var top = Math.random() * 400;

    document.getElementById("flex").style.top = top + "px";
    document.getElementById("flex").style.left = left + "px";
    document.getElementById("flex").style.width = width + "px";
    document.getElementById("flex").style.width = width + "px";
    document.getElementById("flex").style.display = "block";
    starTime = new Date().getTime();
}

function NewFlexAppear(){

    setTimeout(makeFlexAppear , Math.random() * 2000 );
}


document.getElementById("flex").onclick = function () {
    document.getElementById("flex").style.display = "none";
    var endTime = new Date().getTime();
    var timeTaken = (endTime - starTime) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    NewFlexAppear();


}






