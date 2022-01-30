const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D", "E", "F"];
//Hex color example #f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener("click", function (){
    let hexColor = '#';
    //Need to run loop 6 times to assemble 6 char of hex color
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
};

