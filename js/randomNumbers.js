function threeRandomNumbers () {
    let array = [0, 0, 0];
        
    for (let i = 0; i < 3; i++) {
        array[i] = Math.floor(Math.random() * 266);
    }

    console.log(array);
}

function randomNumberBetween4And20 () {
    let randomFontSize = Math.floor(Math.random() * 17) + 4;
    console.log(randomFontSize);
}

let x = randomNumberBetween4And20();
console.log(x);