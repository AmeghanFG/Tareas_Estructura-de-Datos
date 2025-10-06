// Datos producto:  código, nombre, cantidad y costo

class Inventario {
  constructor() {
    this.productos = [];
  }

  // Agregar
  agregar(producto) {
    if (this._validarCodigo(producto.codigo)) {
      this.productos.push(producto);
    } else {
      return "<p class='text-red-600'>El producto ya existe</p>";
    }
  }

  // Agregar inicio
  agregarInicio(producto) {
    if (this._validarCodigo(producto.codigo)) {
      this.productos.push(producto);
      let aux = 0;
      for (let i = this.productos.length - 1; i > 0; i--) {
        aux = this.productos[i - 1];
        this.productos[i - 1] = this.productos[i];
        this.productos[i] = aux;
      }
    } else {
      return "<p class='text-red-600'>El producto ya existe</p>";
    }
  }

  // Insertar producto
  insertar(posicion, producto) {
    if (this._validarCodigo(producto.codigo)) {
      if (this.productos.length - 1 >= posicion && posicion >= 0) {
        this.productos.push(null);
        for (let i = this.productos.length - 1; i > posicion; i--) {
          this.productos[i] = this.productos[i - 1];
        }
        this.productos[posicion] = producto;
      } else {
        return "<p class='text-red-600'>La posición de inserción no es válida</p>";
      }
    } else {
      return "<p class='text-red-600'>El producto ya existe</p>";
    }
  }

  // Listar información (txt)
  listar() {
    let info = "";
    for (let i = 0; i < this.productos.length; i++) {
      info += this.productos[i].info() + "\n";
    }

    return info;
  }

  // Eliminar
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

  // Buscar
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
}
