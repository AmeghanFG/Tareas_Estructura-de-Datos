class Inventario {
  constructor() {
    this.primero = null;
  }

  // A      B      C       D
  //a=null  a=A    a=B     a=C
  //s=B     s=C    s=D     s=null

  //* Agregar por orden
  agregar(producto) {
    if (this.buscar(producto.codigo) == null) {
      if (!this.primero) {
        // Lista vacía
        this.primero = producto;
        return true;
      } else if (Number(producto.codigo) < Number(this.primero.codigo)) {
        // Si se agrega un numero menor al primero, se convierte en el nuevo primero
        producto.siguiente = this.primero; // N.sig = A; N.a=null; | 1ro: A.sig = B; A.a=null;
        this.primero.anterior = producto; //  A.a=N;
        this.primero = producto; // 1ro = N;
        return true;
      }
      return this._agregate(producto, this.primero); // Llamada a función recursiva
    } else {
      return false; // Ya existe
    }
  }

  // X      N           Y
  //a=null  a=null->X   a=X->N
  //s=Y->N  s=Y         s=S

  _agregate(nuevo, productoX) {
    if (
      !productoX.siguiente ||
      Number(nuevo.codigo) < Number(productoX.siguiente.codigo)
    ) {
      // Diferente a null o menor al producto siguiente
      nuevo.siguiente = productoX.siguiente; // N.sig = X.sig (Y);
      nuevo.anterior = productoX; // N.a = X;
      if (productoX.siguiente) {
        productoX.siguiente.anterior = nuevo; // Y.a = N;
      }
      productoX.siguiente = nuevo; // X.sig = N;
      return true;
    } else if (Number(nuevo.codigo) === Number(productoX.siguiente.codigo)) {
      return false; // Ya existe, no se agrega
    } else {
      return this._agregate(nuevo, productoX.siguiente); // Llamada recursiva
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
      if (Number(temp.codigo) == Number(codigo)) {
        return temp;
      }
      if (Number(temp.codigo) > Number(codigo)) {
        return null;
      }
      temp = temp.siguiente;
    }
    return null;
  }

  //* Eliminar
  eliminar(codigo) {
    if (this.buscar(codigo) != null) {
      // Caso: Primer nodo
      if (Number(this.primero.codigo) === Number(codigo)) {
        this.primero = this.primero.siguiente;
        this.primero.anterior = null;
        return true; // Se elimino el 1ero nodo
      }

      // Buscar el nodo anterior al que se eliminará
      let temp = this.primero;
      while (
        temp.siguiente != null &&
        Number(temp.siguiente.codigo) !== Number(codigo)
      ) {
        // Mientras el siguiente no sea nulo y codigo del nodo siguiente sea diferente al codigo buscado
        temp = temp.siguiente;
      }

      if (temp.siguiente == null) {
        return false; // No encontrado
      }

      // Caso: Eliminar nodo
      temp.siguiente = temp.siguiente.siguiente;
      temp.siguiente ? (temp.siguiente.anterior = temp) : null;
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
      this.primero ? (this.primero.anterior = null) : null;
      return primerProducto;
    } else {
      return false;
    }
  }

  //* Listar información inversa
  listarInverso(producto = this.primero) {
    if (producto == null) {
      return "";
    } else {
      return this.listarInverso(producto.siguiente) + producto.info() + "\n";
    }
  }
}
