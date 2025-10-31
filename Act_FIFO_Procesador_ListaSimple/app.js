import { Procesador } from "./procesador.js";
import { Proceso } from "./proceso.js";

let procesador = new Procesador();

let emptyFifo = 0;
let procesosAtend = 0;

for (let i = 0; i < 300; i++) {
  // Tratamiento de ciclos
  if (procesador.primero) {
    procesador.primero.atender();
    if (procesador.primero.ciclos === 0) {
      procesador.extraerPrimero();
      procesosAtend++;
    }
  } else {
    emptyFifo++;
  }

  // Agregar nuevo proceso (35% de probabilidades)
  let posibilidad = Math.floor(Math.random() * 100) + 1;
  if (posibilidad < 36) {
    let ciclos = Math.floor(Math.random() * 11 + 4);
    // (max - min + 1)) + min
    let nuevo = new Proceso(ciclos);
    procesador.agregar(nuevo);
  }
}

console.log(`Ciclos sin atender procesos ${emptyFifo}`);
console.log(`Procesos completados ${procesosAtend}`);
