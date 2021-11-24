const isIntersecting = (entry) => {
    return entry.isIntersecting //true dentro de la pantalla.
}

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.querySelector("img");
    const url = imagen.dataset.src;
    imagen.src = url;

    loadedImages++;
    printLog();

    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries)=>{
    entries 
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (imagen) => {
    //Insertesctionobserver => Observador(image)
    observer.observe(imagen);
}