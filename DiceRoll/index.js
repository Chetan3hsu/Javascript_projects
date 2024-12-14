function rolldice(){
    const numDice = document.getElementById("numdice").value;
    const diceResult = document.getElementById("diceresult");
    const diceImages = document.getElementById("diceimages");
    const values= [];
    const images=[] ;
    for (let i = 0; i < numDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value) ;
        images.push(`<img src="dice_images/${value}.png">`);
    }

     diceResult.textContent =`dice : ${values.join(", ")}` ;
     diceImages.innerHTML = images.join(' ');
}