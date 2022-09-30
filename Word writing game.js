window.addEventListener('load', init);


// مستويات اللعب
const levels = {
    easy: 20,
    medium: 15,
    hard: 10
}

// استدعاء مستوى اللعب
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;
//---------------------------------------------------
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
//---------------------------------------------------
const words = [
    'Cornflakes ',
    'Breakfast ',
    'Cheese ',
    'Cornflakes ',
    'Duck ',
    'Pizza ',

];
//---------------------------------------------------------------------------
function init() {
    seconds.innerHTML = currentLevel;
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}
//---------------------------------------------------------------------------
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //-------------------------------------------------------------------------
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}

//---------------------------------------------------------------------------
// check داله ال
function matchWords() {
    if (wordInput.value.toUpperCase() === currentWord.innerHTML.toUpperCase()) {
        message.innerHTML = "Great";
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}



//--------------------------------------------------------------------------
//  words <---array ال length دى داله هتجيب رقم انديكس عشوائى من 0 لحد math.random 
// هتقربلى الناتج لاقرب اقل عدد صحيح<---math.floor داله ال 
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

//--------------------------------------------------------------------------
function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    //   هيظهرلى دايما ب 0time ال timeDisplay لو معملتش 
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over';
        score = -1;
    }
}