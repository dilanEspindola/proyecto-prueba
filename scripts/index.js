import { getData } from "./services.js";

const personajes = await getData();
const app = document.getElementById("app");

personajes.forEach((personaje) => {
  app.innerHTML += `  
    <div class="flex flex-col gap-2 items-center relative rounded-lg overflow-hidden">
    <img  src=${personaje.image} alt=${personaje.id} class="w-full" />
    <h2 class="absolute bottom-5 text-black font-bold text-2xl">${personaje.name}</h2>
    </div>  
  `;
});
