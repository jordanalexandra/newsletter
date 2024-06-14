const submit = document.querySelector("button");

submit.addEventListener("click", () => {
    if(document.getElementById("email").value == "") {
        document.getElementById("error").style.visibility="visible";
        document.getElementById("email").style.cssText = `
        border: 1px solid red;
        backgroundColor: rgb(255, 98, 87, .3);
        color: red;
    `;
    } else if(document.getElementById("email").value != "") {
        document.getElementById("error").style.visibility="hidden";
        document.getElementById("email").style.border="1px solid hsl(235, 18%, 26%)";
        document.getElementById("popup").style.display="block";
        document.getElementById("container").style.display="none";
    }
});

const returnToPage = document.querySelector("#dismiss");

returnToPage.addEventListener("click", () => {
    document.getElementById("popup").style.display="none";
        document.getElementById("container").style.display= "";
        document.getElementById("form").reset();
        document.getElementById("email").style.backgroundColor="transparent";
});

//gets rid of default pop up error messages

document.addEventListener('invalid', (function(){
    return function(e) {
  
      e.preventDefault();
    
    };
})(), true);



