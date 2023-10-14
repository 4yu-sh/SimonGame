
window.addEventListener("keypress",()=>{
    
    for (var i= 0; i < 4; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", clicked)
    }    

    do{
        var toContinue = "0";
        const temp_rand = randomNmbGen();

        switch (temp_rand){

            case "1":
                buttonAnimate("red_btn");
                break;

            case "2":
                buttonAnimate("blue_btn")
                break;

            case "3":
                buttonAnimate("yellow_btn")
                break;

            case "4":
                buttonAnimate("green_btn")
                break;

            default:
                console.log(temp_rand);
        }

    }while(toContinue === "1")
   
         
})

function clicked() {

    const clicked_button = this.getAttribute("value")

    switch (clicked_button) {
        case "1":
            console.log("red hhas been clicked");
            break;
    
        case "2":
            console.log("Blue Has been Clicked");
            break;

        case "3":
            console.log("Yellow has been Clicked");
            break;

        case "4":
            console.log("Green Has been Clicked");
            break;
    } 
}

function randomNmbGen() {
    return  Math.floor((Math.random() * 4)+1).toString();
}

function checkTheClick(temp_rand,clicked_button) {
    if (temp_rand === clicked_button) {
        return "1";
    } else {
        return "0";
    }    
}

function buttonAnimate(btn) {
    var glowingButton = document.querySelector("." + btn);
    glowingButton.classList.add("blink");
    setTimeout(() => {
       glowingButton.classList.remove("blink") 
    }, 100);
}