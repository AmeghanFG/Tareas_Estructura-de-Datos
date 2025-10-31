export class Proceso {
  constructor(ciclos) {
    this.ciclos = ciclos;
    this.siguiente = null;
  }

  atender() {
    this.ciclos--;
  }
}
