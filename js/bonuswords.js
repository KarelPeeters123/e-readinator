// this function replaces words with other words
// string input
// string output

function addBonusWords(input){
    
    let stringArray = input.split(" "); // splits words into array

    bonus = ["egg", "hello", "<3", "woooow", "much", "like", "stupid", "KeepFocused", "oranges", "???", "huh??"];
    
    min = 1; // idk why
    stringLength = stringArray.length; // length of input words
    bonusLength = bonus.length; // length of bonus words array
    maxBonus = Math.round(stringLength / 100) + 1; // amount of bonus words per 100 words
    
    for(let numWords = 0 ; numWords < maxBonus; numWords ++ ){ // call the function per max bonus words
        replaceBonusWord(stringArray);
    }
    
    // output text as a single string
    let outputText = stringArray.join(" ");
    
    return outputText; 
}

// function
function replaceBonusWord(stringArray){
        
    index = Math.random() * (stringLength - min) + min; // Math.random() * (max - min) + min;
    bonusIndex =  Math.random() * (bonusLength - min) + min;
    
    stringArray[Math.round(index)] = bonus[Math.round(bonusIndex)];
    
    return stringArray;
}


