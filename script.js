let Hitsrn;
let score = 0;

function MakeBubble() {
    let clutter = "";

    for (let i = 0; i < 192; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector('#btm-Panel').innerHTML = clutter;
}


let time = 60;
function setTimer() {
    time;
    let interval = setInterval(function () {
        time--
        document.querySelector('#timer').innerHTML = time;
        if (time == 0) {
            clearInterval(interval);
            document.querySelector('#btm-Panel').innerHTML = "Time Over";
        }
    }, 1000)
}

function setHits() {
    Hitsrn = Math.floor(Math.random() * 10)
    document.querySelector('#Newhits').textContent = Hitsrn;
}

function setscore() {
    score += 10
    document.querySelector('#Newscore').innerHTML = score;
}

document.querySelector('#btm-Panel').addEventListener('click', function (dets) {
    let res = Number(dets.target.textContent)
    if (res === Hitsrn) {
        setscore()
        setHits()
        MakeBubble()
    }else if(res != Hitsrn){
        alert("Your answer is incorrect Please try again")
        setHits()
        MakeBubble()
    }
})


MakeBubble()
setTimer()
setHits()



