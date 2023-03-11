const fileSelector = document.getElementById('myFile');
const content = document.querySelector(".output");
console.log("test");
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList[0].type);
    if (fileList[0].type === "text/plain") {
        readFile(fileList[0]);
    }
});
function readFile(file) {
    var fileReader=new FileReader();

   fileReader.onload=function(){

      content.textContent=applyManipulations(fileReader.result);

   }

   fileReader.readAsText(file);
}
function applyManipulations(text) {
    let newText = addBonusWords(text);
    return newText;
}
