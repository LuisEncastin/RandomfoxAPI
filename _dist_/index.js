import {registerImage} from './lazy.js'

console.log('Happy hacking :)')

const url = "https://randomfox.ca/floof/";

//Función para imágenes aleatorias
const minimum = 1;
const maximum = 123;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () =>{

    //Contenedor de la imagen
    const container = document.createElement("div");
        container.className = "p-4";

    //imagen
    const imagen = document.createElement("img");
        imagen.className = "mx-auto";
        imagen.width = "320";
        imagen.dataset.src= `https://randomfox.ca/images/${random()}.jpg`; //TO DO

    // Contenedor gris de carga
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";

    imageWrapper.appendChild(imagen);
    container.appendChild(imageWrapper);

    appendedImages++;
    printLog();

    return container;
}

//Funcionamiento de las imágenes.
const mountNode = document.getElementById('images');
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

//Funcionamiento de los botones
//Añadir
const addButton = document.querySelector("#add");
addButton.addEventListener('click', addImage);
//Borrar
const cleanImages = () => {

    console.log(mountNode.childNodes);

    [...mountNode.childNodes].forEach(child => {
        child.remove();
    }) 

}
const cleanButton = document.querySelector("#clean");
cleanButton.addEventListener("click", cleanImages)

