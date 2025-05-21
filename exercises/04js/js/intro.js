/*when button clicked write to a paragraph*/

/*
const writeParagraph = () => {
    console.log("Hello Everyone!");
}; 

document.getElementById("btn-write").onclick = writeParagraph;
*/
/*
document.getElementById("btn-write").onclick = () => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    /* change the button text to say done */
document.getElementById("btn-write").onclick = (event) => {
    document.getElementById("btn-write").innerHTML = "Done";

    event.target.innerHTML = "done";
};

document.getElementById("btn-start").onclick = (event) => {
    document.getElementById("startp").innerHTML = "Started";
    event.target.innerHTML = "startstopp".innerHTML = "Started";
};

document.getElementById("btn-end").onclick = (event) => {
    document.getElementById("endp").innerHTML = "Ended";
    event.target.innerHTML = "Ending";
}