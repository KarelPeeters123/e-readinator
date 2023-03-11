console.log("start");
let fileSelector = $('#myFile');
console.log(fileSelector)
const content = document.querySelector(".output");
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
        content.textContent = applyManipulations(fileReader.result);

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
