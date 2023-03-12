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
        addSpans(content, applyManipulations(fileReader.result));
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
function addBackgroundColor(element) {
    let rgb = threeRandomNumbers();
    element.css("background-color", `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
}
function getFontWeight(element){
    
    number = Math.floor(Math.random() * (9- 1 + 1) + 1)
    numver = number * 100;
    
    element.css("font-weight", number);
}