class Inventario {
  constructor() {
    this.primero = null;
  }

  //* Agregar por orden
  // TODO: Falta validar y devolver true o false
  agregar(producto) {
    if (this.buscar(producto.codigo) == null) {
      if (
        !this.primero ||
        Number(producto.codigo) < Number(this.primero.codigo)
      ) {
        // Si se agrega un numero menor al primero, se convierte en el nuevo primero
        producto.siguiente = this.primero;
        this.primero = producto;
        return true;
      } else {
        return this._agregate(producto, this.primero);
      }
    } else {
      return false; // Ya existe
    }
  }

  _agregate(nuevo, productoX) {
    if (
      !productoX.siguiente ||
      Number(nuevo.codigo) < Number(productoX.siguiente.codigo)
    ) {
      nuevo.siguiente = productoX.siguiente; // Se le asigna el siguiente del actual elemento
      productoX.siguiente = nuevo; // Se le asigna como siguiente el nuevo
      return true;
    } else if (Number(nuevo.codigo) === Number(productoX.siguiente.codigo)) {
      return false; // Ya exite, no se agrega
    } else {
      return this._agregate(nuevo, productoX.siguiente);
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
        return temp;
      }
      temp = temp.siguiente;
    }
    return null;
  }

  //* Eliminar
  eliminar(codigo) {
    if (this.buscar(codigo) != null) {
      // Caso: Primero nodo
      if (this.primero.codigo == codigo) {
        this.primero = this.primero.siguiente;
        return true; // Se elimino el 1ero nodo
      }

      // Buscar el nodo anterior al que se eliminará
      let temp = this.primero;
      while (temp.siguiente != null && temp.siguiente.codigo != codigo) {
        // Mientras el siguiente no sea nulo y codigo del nodo siguiente sea diferente al codigo buscado
        temp = temp.siguiente;
      }

      if (temp.siguiente == null) {
        return false; // No encontrado
      }

      // Caso: Eliminar nodo
      temp.siguiente = temp.siguiente.siguiente;
      return true;
    } else {
      return false; // No se quita nada si no se encuentra el nodo o la lista esta vacía
    }
  }

  // Extraer el 1er elemento  (devolverlo y eliminarlo)
  extraerPrimero() {
    if (this.primero) {
      let primerProducto = this.primero;
      this.primero = this.primero.siguiente;
      return primerProducto;
    } else {
      return false;
    }
  }

  /*

  //* Listar información inversa
  listarInverso() {
    let info = "";
    for (let i = this.productos.length - 1; i >= 0; i--) {
      info += this.productos[i].info() + "\n";
    }
    return info;
  }

  // Validación de codigo
  _validarCodigo(codigo) {
    if (this.buscar(codigo)) {
      return false;
    }
    return true;
  } */
}
