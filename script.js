let second = 0;
let minute = 0;
let hour = 0;
let count = 0;


let timer = false;

function start() {
    timer = true;
    startwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;

    second = 0;
    minute = 0;
    hour = 0;
    count = 0;

    document.getElementById("hour").innerHTML = hour + "0";
    document.getElementById("minute").innerHTML = minute + "0";
    document.getElementById("second").innerHTML = second + "0";
    document.getElementById("count").innerHTML = count + "0";
}

function startwatch() {
    if (timer == true) {
        count = count + 1;
        document.getElementById("count").innerHTML = count;

        if (count == 60) {
            second = second + 1;
            count = 0;
            document.getElementById("second").innerHTML = second;

        }
        if (second == 60) {
            minute = minute + 1;
            second = 0;
            document.getElementById("minute").innerHTML = minute;
        }

        if (minute == 60) {
            hour = hour + 1;
            minute = 0;
            document.getElementById("hour").innerHTML = hour;
        }



        setTimeout("startwatch()", 10)

    }



}
