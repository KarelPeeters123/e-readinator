// this function randomly capitalises letters

function randCapital(input, freq){
    // this function switches around 2 characters every input frequency characters

    let stringArray = input.split(""); // splits every letter into array
    arrayLength = stringArray.length;
    
    
    for(let i = 0; i < arrayLength; i += freq ){
        // switch letters into capitals   // this does not diferentiate between spaces and letters

        upper = stringArray[i].toUpperCase(); // covert letter to upperacase
        stringArray[i] = upper; // put it back into the array
    }

    let outputText = stringArray.join("");

    return outputText
}