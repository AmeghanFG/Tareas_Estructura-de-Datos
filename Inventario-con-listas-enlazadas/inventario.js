class Inventario {
  constructor() {
    this.primero = null;
  }

  //* Agregar por orden
  // TODO: Falta validar y devolver true o false
  agregar(producto) {
    // -> != null
    if (!this.primero) {
      producto.siguiente = this.primero;
      this.primero = producto;
    } else {
      this._agregate(producto, this.primero);
    }
  }

  _agregate(nuevo, productoX) {
    if (!productoX.siguiente || nuevo.codigo < productoX.siguiente.codigo) {
      nuevo.siguiente = productoX.siguiente;
      productoX.siguiente = nuevo;
    } else {
      this._agregate(nuevo, productoX.siguiente);
    }
  }

  //* Listar información (txt)
  listar() {
    let temp = this.primero;
    let info = "";
    while (temp != null) {
      info += temp.info() + "\n";
      temp = temp.siguiente;
    }
    return info;
  }

  //* Buscar
  buscar(codigo) {
    let temp = this.primero;
    while (temp != null) {
      if (temp.codigo == codigo) {
        return temp.info();
      }
      temp = temp.siguiente;
    }
    return null;
  }

  /*
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
  } */
}
