class Producto {
  constructor(codigo, nombre, cantidad, costo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.costo = costo;
  }

  //* metodo info()
  /*info() {
      return `Código: ${this.codigo}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Costo: $${this.costo}`;
    }*/
  info() {
    return `
    <div class="flex flex-wrap gap-x-6 text-sm text-gray-700">
      <span><span class="font-semibold">Código:</span> ${this.codigo}</span>
      <span><span class="font-semibold">Nombre:</span> ${this.nombre}</span>
      <span><span class="font-semibold">Cantidad:</span> ${this.cantidad}</span>
      <span><span class="font-semibold">Costo:</span> $${this.costo}</span>
    </div>
  `;
  }
}
