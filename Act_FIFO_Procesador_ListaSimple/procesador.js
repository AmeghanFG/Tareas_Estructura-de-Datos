export class Procesador {
  constructor() {
    this.primero = null;
  }

  agregar(nuevo) {
    // Si esta vacío
    if (!this.primero) {
      this.primero = nuevo;
    } else {
      return this._agregate(nuevo, this.primero);
    }
  }

  _agregate(nuevo, procesoX) {
    if (!procesoX.siguiente) {
      procesoX.siguiente = nuevo;
      return true;
    } else {
      return this._agregate(nuevo, procesoX.siguiente);
    }
  }

  extraerPrimero() {
    if (this.primero) {
      this.primero = this.primero.siguiente;
    }
  }
}
