//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

function changeColors(){
    const random = Math.floor(Math.random() * colors.length);
    document.querySelector('body').style.background = colors[random];

}
