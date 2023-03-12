let fileSelector = $('#myFile');
const content = $(".output");
let originalText = ""
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
        originalText = fileReader.result;
        addSpans(content, applyManipulations(fileReader.result));
    }

   fileReader.readAsText(file);
   console.log("TEST", originalText);
}

function applyManipulations(text) {
    let newText = text;
    newText = addEmoji(newText);
    newText = addBonusWords(newText);
    newText = randCapital(newText, 15);
    newText = mixLetters(newText, 15);
    return newText;
}
function addSpans(element, text) {
    for (const character of text) {
        let span = $(`<span></span>`).text(character)
        addBackgroundColor(span);
        addColor(span);
        getFontWeight(span)
        element.append(span)
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
function addEasySpans(element, text) {
    for (const character of text) {
        let span = $(`<span></span>`).text(character)
        if (number == 1){
            addBackgroundColor(span);
            element.append(span);
        } else if (number == 2){
            
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