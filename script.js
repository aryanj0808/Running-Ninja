score = 0;
cross = true;
audio = new Audio('Music.mp3')
audiogo = new Audio('Dead.mp3')


document.onkeydown = function (e) {
    
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        ninja = document.querySelector('.ninja');
        ninja.classList.add('animateNinja');
        setTimeout(() => {
            ninja.classList.remove('animateNinja')
        }, 700);
    }
    if (e.keyCode == 39) {
        ninja = document.querySelector('.ninja');
        ninjaX = parseInt(window.getComputedStyle(ninja, null).getPropertyValue('left'));
        ninja.style.left = ninjaX + 112 + "px";
    }
    if (e.keyCode == 37) {
        ninja = document.querySelector('.ninja');
        ninjaX = parseInt(window.getComputedStyle(ninja, null).getPropertyValue('left'));
        ninja.style.left = (ninjaX - 112) + "px";
    }
}
setInterval(() => {
    ninja = document.querySelector('.ninja');
    gameover = document.querySelector('.gameover');
    rowdy = document.querySelector('.rowdy');

    dx = parseInt(window.getComputedStyle(ninja, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(ninja, null).getPropertyValue('top'));


    ox = parseInt(window.getComputedStyle(rowdy, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(rowdy, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    console.log(offsetX, offsetY)

    if (offsetX < 100 && offsetY < 32) {
        gameover.style.visibility = 'visible';
        rowdy.classList.remove('animateRowdy')
        audiogo.play()
        setTimeout(() => {
            audiogo.pause();
             }, 1500);
        setTimeout(() => {
            audio.pause();
             }, 300);

    }
    else if (offsetX < 140 && cross) {
        setTimeout(() => {
            audio.play()
        }, 200);
        score += 1;
        livescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(rowdy, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            rowdy.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }


}, 10);

function livescore(score) {
    scoreboard.innerHTML = "Your Score: " + score;
}

