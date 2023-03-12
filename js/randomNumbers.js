function threeRandomNumbers () {
    let array = [0, 0, 0];
        
    for (let i = 0; i < 3; i++) {
        array[i] = Math.floor(Math.random() * 266);
    }

    return array;
}