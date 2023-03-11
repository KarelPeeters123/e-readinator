// this function mixes letters around depending on the input frequency letter/space
// input and output = string

function mixLetters(input, freq){
    // this function switches around 2 characters every input frequency characters

    let stringArray = input.split(""); // splits every letter into array
    arrayLength = stringArray.length;
    
    
    for(let i = 0; i < arrayLength; i += freq ){
        // switches letters                  [ i , i+1 ] -> [ i+1 , i ]
        keepLetter = stringArray[i];
        stringArray[i] = stringArray[i+1];
        stringArray[i+1] = keepLetter;
    }

    let outputText = stringArray.join("");

    return outputText
}