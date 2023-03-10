// replace randon words with other words


function addBonusWords(input){
    
    let array = input.split(" "); // splits words into array
    
    bonus = ["egg", "hello", "<3", "woooow", "much", "like", "stupid", "KeepFocused", "oranges", "???", "huh??"];
    
    min = 1; // idk why
    stringLength = array.length; // length of input words
    bonusLength = bonus.length; // length of bonus words array
    maxBonus = Math.round(stringLength / 100) + 1; // amount of bonus words per 100 words
    
    for(let numWords = 0 ; numWords < maxBonus; numWords ++ ){ // call the function per max bonus words
        replaceBonusWord(array);
    }
    
    // output text as a single string
    let outputText = array.join(" ");
    
    return array;
}

// function
function replaceBonusWord(array){
        
    index = Math.random() * (stringLength - min) + min; // Math.random() * (max - min) + min;
    bonusIndex =  Math.random() * (bonusLength - min) + min;
    
    array[Math.round(index)] = bonus[Math.round(bonusIndex)];
    
    return array;
}
