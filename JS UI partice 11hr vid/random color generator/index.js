// First we create this boxes with for loop and create a div with the name container
// create a container using query selector and follow through the rest of code below

const ContainerE1 = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerE1 = document.createElement("div");

    colorContainerE1.classList.add("class-container");

    ContainerE1.appendChild(colorContainerE1);
    
}