//MODO OSCURO

function cambiarOscuro(){
    var cuerpoweb = document.body;
    cuerpoweb.classList.toggle("oscuro");
}

//ESCRITURA ANIMADA
const text = document.getElementById("animate-text");
let str = text.innerHTML;
text.innerHTML = "";

const speed = 120;
let i = 0;

const typeWriter = () => {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

setTimeout(typeWriter, speed);
