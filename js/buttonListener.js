console.log("start");
let fileSelector = $('#myFile');
console.log(fileSelector)
const content = $(".output");
console.log("test");
fileSelector[0].addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList[0].type);
    if (fileList[0].type === "text/plain") {
        readFile(fileList[0]);
    }
});
function readFile(file) {
    var fileReader=new FileReader();

    fileReader.onload=function(){
        $('form').remove();
        let windowMain = $(".window-main");
        windowMain.removeClass("window-main");
        windowMain.addClass("window-main-filled");

        localStorage.setItem("text", fileReader.result);
        localStorage.setItem("dificulty", "easy");

        addEasySpans(content, applyEasyManipulations(fileReader.result, 1), 1);
    }

   fileReader.readAsText(file);
}

function applyManipulations(text) {
    let newText = text;
    newText = addBonusWords(newText);
    newText = randCapital(newText, 15);
    newText = mixLetters(newText, 15);
    return newText;
}
function addSpans(element, text) {
    for (const character of text) {
        let span = $(`<span></span>`).text(character)
        addBackgroundColor(span);
        getFontWeight(span)
        element.append(span)
    }
} 
function addMediumSpans(element, text, x) {
    for (const character of text) {
        let span = $(`<span></span>`).text(character)

        if (x == 1) {
            // all under manipulations
        }
        else if (x == 2) {
            getFontWeight(span)
            addBackgroundColor(span);
            addFontFamily(spans)
        }
        else if (x == 3) {
            // all under manipulations
        }
    }
} 

function applyMediumManipulations(text, x) {
    let newText = text;

    if (x == 1) {
        // linespace
    }
    else if (x == 2) {
        // all in span
    }
    else if (x == 3) {
        newText = addBonusWords(newText);
        newText = mixLetters(newText, 15);
        newText = randCapital(newText, 15);
        return newText;
    }

    element.append(span)

    if (x == 1) {
        element.append($("<br"));
    }
}
function applyEasyManipulations(text, number) {
    let newText = text;
    if (number == 1){
        newText = mixLetters(newText, 50);
        return newText;
    } else if (number == 2){
        newText = addEmoji(newText);
        return newText;
    } else if (number == 3) {
        newText = addBonusWords(newText);
        return newText;
    }
}
function addEasySpans(element, text, number) {
    for (const character of text) {
        let span = $(`<span></span>`).text(character)
        if (number == 1){
            addBackgroundColor(span);
            element.append(span);
        } else if (number == 2){
            getFontWeight(span);
            element.append(span);
        } else if (number == 3) {
            randCapital(span, 50)
            addFontFamily(span);
            element.append(span);
        }
        
    }
} 
function addBackgroundColor(element) {
    let rgb = threeRandomNumbers();
    element.css("background-color", `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
}

function addFontFamily(element) {
    let nb = randomNumberBetween1And11();
    element.addClass(`font${nb}`);
}
function addColor(element) {
    let rgb = threeRandomNumbers();
    element.css("color", `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
}
function getFontWeight(element){
    
    number = Math.floor(Math.random() * (9- 1 + 1) + 1)
    numver = number * 100;
    
    element.css("font-weight", number);
}

function addHardSpans(text, number){
    for (const character of text) {
        let span = $(`<span></span>`).text(character)
        if (number == 1){
            getFontWeight(span)
            // linespace
            addFontFamily(span);

        }
        else if (number == 2){
            addBackgroundColor(span);
            addColour(span);
        }
        else {
            addBackgroundColor(span)
        }
        
        
        element.append(span)

        if (number == 3) {
            element.append($("<br>"));
        }
    }
   
}
function applyHardManipulations(text,number) {
    let newText = text;

    if (number == 1){
        newText = addBonusWords(newText);
        newText = mixLetters(newText, 15);
        // font weight linespace
        return newText;
    }
    else if (number == 2){ //2x colours emoji randcapital
        newText = replaceWordWithEmoji(newText);
        newText = randCmapital(newText, 15);
        newText = mixLetters(newText, 15);
        return newText;
    }
    else { //vertical 1x colour, letter swap
        newText = mixLetters(newText, 15);
        newText = addBonusWords(newText);
        return newText;
    }
}