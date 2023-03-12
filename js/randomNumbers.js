function threeRandomNumbers () {
    let array = [0, 0, 0];
        
    for (let i = 0; i < 3; i++) {
        array[i] = Math.floor(Math.random() * 266);
    }

    console.log(array);
}

<<<<<<< Updated upstream
function randomNumberBetween4And20 () {
    let randomFontSize = Math.floor(Math.random() * 17) + 4;
    console.log(randomFontSize);
}

let x = randomNumberBetween4And20();
=======
function randomBetween4And20 () {
    let fontSizeRandom = Math.floor(Math.random() * 17) + 4;
    console.log (fontSizeRandom);
}

let x = randomBetween4And20();
>>>>>>> Stashed changes
console.log(x);