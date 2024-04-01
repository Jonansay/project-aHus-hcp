const resultado = document.querySelector("#resultado");
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;
console.log(max)
console.log(min)
//variables

//eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(); // muestra los autos al cargar

  //llena ls opciones de years

  llenarSelect()
});

//funciones
function mostrarAutos() {
  autos.forEach((auto) => {

    const {marca, modelo, year, precio,puertas,  color, transmision } = auto;
    const autoHTML = document.createElement("p");

    autoHTML.textContent = 
     //  opcion diferente ${auto.marca} mas abajo usando disticturing
    `
       
        ${marca}  ${modelo} - ${year}  - ${puertas} puertas - transmision ${transmision} - Precio: ${precio} - color ${color}`;


        //insertar en el html
        resultado.appendChild(autoHTML)
  });
}

function llenarSelect(){
 
}
