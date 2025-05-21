/*when button clicked write to a paragraph*/

/*
const writeParagraph = () => {
    console.log("Hello Everyone!");
}; 

document.getElementById("btn-write").onclick = writeParagraph;
*/

document.getElementById("btn-write").onclick = () => {
    document.getElementById("writep").innerHTML = "You clicked the button";
};