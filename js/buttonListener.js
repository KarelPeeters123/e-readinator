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
<<<<<<< HEAD
        addColor(span);
=======
        getFontWeight(span)
>>>>>>> 2ea972274b969e868bba77847bf7b56092e2a238
        element.append(span)
    }
} 
function addBackgroundColor(element) {
    let rgb = threeRandomNumbers();
    element.css("background-color", `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
}
<<<<<<< HEAD
function addColor(element) {
    let rgb = threeRandomNumbers();
    element.css("color", `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
}
=======
function getFontWeight(element){
    
    number = Math.floor(Math.random() * (9- 1 + 1) + 1)
    numver = number * 100;
    
    element.css("font-weight", number);
}
>>>>>>> 2ea972274b969e868bba77847bf7b56092e2a238
