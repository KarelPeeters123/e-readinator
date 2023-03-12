function threeRandomNumbers () {
    let array = [0, 0, 0];
        
    for (let i = 0; i < 3; i++) {
        array[i] = Math.floor(Math.random() * 266);
    }
    return array
}

function randomNumberBetween4And20 () {
    let randomFontSize = Math.floor(Math.random() * 17) + 4;
    return randomFontSize;
}

function randomNumberBetween1And11 () {
    let randomFontFam = Math.floor(Math.random() * 11);
    return randomFontFam;
}