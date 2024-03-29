// seleccionar elementos del dom
const boton = document.querySelector('button');
const texto = document.getElementById('color-texto');

// mecanismo general :D

function genColorHexAleatorio(){
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for(let i = 0; i < 6; i++){
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex
}

boton.addEventListener('click', ()=>{
  let colorAleatorio =genColorHexAleatorio();
  // Actualizar el texto
  texto.textContent = colorAleatorio;
  // Actualizar el color de fondo
  document.body.style.backgroundColor = colorAleatorio;
});