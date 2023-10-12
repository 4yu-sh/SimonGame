


for (var i= 0; i < 4; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", (button)=>{
        const clicked_button = button.target.getAttribute("value")
        // console.log(clicked_button)

        const randomNumber = Math.random();

        console.log(randomNumber);
        switch (clicked_button) {
            case "R":
                console.log("red hhas been clicked");
                break;
        
            case "G":
                console.log("Green Has been Clicked");
                break;

            case "B":
                console.log("Blue Has been Clicked");

            case "Y":
                console.log("Yellow has been Clicked");
        }
    });      
}   