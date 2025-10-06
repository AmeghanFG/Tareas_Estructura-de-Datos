class Inventario {
  constructor() {
    this.productos = [];
  }

  //* Agregar por orden
  agregar(producto) {
    if (this._validarCodigo(producto.codigo)) {
      let posicion = this._encontrarPosicion(producto.codigo);
      this.productos.push(null);

      for (let i = this.productos.length - 1; i > posicion; i--) {
        this.productos[i] = this.productos[i - 1];
      }

      this.productos[posicion] = producto;
    } else {
      return "<p class='text-red-600'>El producto ya existe</p>";
    }
    console.log(this.productos);
  }

  _encontrarPosicion(codigo) {
    let i = 0;
    while (
      i < this.productos.length &&
      Number(codigo) > Number(this.productos[i].codigo)
    ) {
      i++;
    }

    return i;
  }

  //* Listar información (txt)
  listar() {
    let info = "";
    for (let i = 0; i < this.productos.length; i++) {
      info += this.productos[i].info() + "\n";
    }

    return info;
  }

  //* Listar información inversa
  listarInverso() {
    let info = "";
    for (let i = this.productos.length - 1; i >= 0; i--) {
      info += this.productos[i].info() + "\n";
    }
    return info;
  }

  //* Eliminar
  eliminar(codigo) {
    let posicion = this._buscarIndice(codigo);
    if (posicion !== -1) {
      for (let i = posicion; i < this.productos.length - 1; i++) {
        this.productos[i] = this.productos[i + 1];
      }
      this.productos.pop();
      return true;
    } else {
      return false;
    }
  }

  _buscarIndice(codigo) {
    let i = 0;

    while (i < this.productos.length && this.productos[i].codigo !== codigo) {
      i++;
    }

    return i < this.productos.length ? i : -1;
  }

  //* Buscar
  buscar(codigo) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo === codigo) {
        return this.productos[i].info();
      }
    }
    return null;
  }

  // Extraer el 1er elemento  (devolverlo y eliminarlo)
  extraerPrimero() {
    let primerProducto = this.productos[0];
    this.eliminar(this.productos[0].codigo);
    return primerProducto;
  }

  // Validación de codigo
  _validarCodigo(codigo) {
    if (this.buscar(codigo)) {
      return false;
    }
    return true;
  }

  //* Extraer último
  extraerUltimo() {
    let ultimoProducto = this.productos[this.productos.length - 1];
    this.eliminar(this.productos[this.productos.length - 1].codigo);
    return ultimoProducto;
  }
}
