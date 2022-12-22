const inputText = document.getElementById("text");
document.getElementById("text").disabled = true;
const buttons = document.querySelectorAll("button");
var screen="";

for (item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if (buttonText=='x') {
            buttonText ='*';
            screen += buttonText;
            inputText.value = screen;
            
            
        } else if(buttonText=="C") {
             inputText.value = inputText.value.slice(0,-1);
            //  inputText.value = screen.substr(0, screen.length - 1);
            
            
        }
        else if(buttonText=="AC") {
            screen ="";
            inputText.value = screen;

        } else if(buttonText=="=") {
            inputText.value =eval(screen);

        }
        else{
            screen += buttonText;
            inputText.value = screen;
        }
    })
}