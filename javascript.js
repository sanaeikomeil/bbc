document.getElementById("my button").onclick = function () {
    document.getElementById("text").innerHTML = "hello komeilll";// document to hamin page migarde faghat....element ba idish payda kon......hello komeil briz to dakhel mohtavaye html
}


document.getElementById("second button").onclick = function () {
    document.getElementById("second paragraph").innerHTML = "I think " + document.getElementById("second paragraph").innerHTML + "awesome!";
}
document.getElementById("creat text").onclick = function () {
    document.getElementById("empty paragraph").innerHTML = "<h1>hi there!</h1>";
}

document.getElementById("red").onclick = function () {
    document.getElementById("red").style.display = "none";
}

document.getElementById("blue").onclick = function () {
    document.getElementById("blue").style.display = "none";
}

document.getElementById("yellow").onclick = function () {
    document.getElementById("yellow").style.display = "none";
}

document.getElementById("change magic word").onclick = function () {
    var magicwordentered = document.getElementById("magicword").value;
    var magicword = "abracadabra";
    if (magicwordentered === magicword) {//chera ba 3ta mosavi payini ba 2 ta mosavi kar mikone????
        alert("you got it!");
    } else {
        alert("oops wrong guess!!");
    }
}

document.getElementById("guess num").onclick = function () {
    var uuu = document.getElementById("enter num").value;
    var ggg = (Math.floor(Math.random() * 6));
    if (uuu == ggg) {
        alert("you got it!");
    } else {
        alert("wrong number!!!    right number is : " + ggg);
    }
}

var tweetstring = "";
var tweet = ["adadadadad", "qqqqqqqqq", "ttttttttttttttttt"];
for (var i = 0; i < tweet.length; i++) {
    tweetstring = tweetstring + "<p>" + tweet[i] + "</p>";
}
document.getElementById("loops").innerHTML = tweetstring;//ino chera gozasht????


function doAGuess(number) {
    var num = (Math.floor(Math.random() * 6));
    if (number == num) {
        return (true);
    } else return (false);

}

document.getElementById("guess").onclick = function () {
    var number = document.getElementById("my number").value;
    var GotIt = false;
    var counter = 1;


    while (GotIt == false) {

        if (doAGuess(number) == true) {
            GotIt = true;
            alert("Got It! It Was a " + number + ". It took me " + counter + "guesses");
        } else counter++;
    }
}
