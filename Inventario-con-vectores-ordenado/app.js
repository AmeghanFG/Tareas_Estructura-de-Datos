const miInventario = new Inventario(); // * Creación de un inventario

console.log(miInventario);

// Agregar
const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", () => {
  // Obtener valores de producto
  let codigo = document.getElementById("txtCod").value;
  let nombre = document.getElementById("txtNom").value;
  let cantidad = document.getElementById("numCant").value;
  let costo = document.getElementById("numCost").value;

  let nuevo = new Producto(codigo, nombre, cantidad, costo);
  let mg = document.getElementById("detalles");
  mg.innerHTML = "";
  let resultado = miInventario.agregar(nuevo);

  if (resultado) {
    mg.innerHTML += resultado; // Resultado de error
  } else {
    mg.innerHTML += `<h5>Se agregó</h5> \n <p>${nuevo.info()}</p>`;
  }
});
// Si pusieramos .infoHTML(), no regresaría texto plano, si no que te regresa html para que el usuario pueda ver dicha información

// Listar
const btnList = document.getElementById("btnList");
btnList.addEventListener("click", () => {
  let msg = document.getElementById("detalles");
  msg.innerHTML =
    '<h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Lista de Productos</h3>';
  msg.innerHTML += miInventario.listar();
  // listarHTML
});

// Buscar
const btnFind = document.getElementById("btnFind");

btnFind.addEventListener("click", () => {
  let msg = document.getElementById("detalles");
  msg.innerHTML = "";
  msg.innerHTML =
    '<h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Busqueda de productos</h3>';

  const codigo = document.getElementById("txtCod");
  let resultado = miInventario.buscar(codigo.value);
  if (resultado) {
    msg.innerHTML += resultado;
  } else {
    msg.innerHTML += "<p class='text-red-600'>No existe el producto</p>";
  }
});

// Agregar inicio
const btnAddBeginnig = document.getElementById("btnAddBeginnig");
btnAddBeginnig.addEventListener("click", () => {
  // Obtener valores de producto
  let codigo = document.getElementById("txtCod").value;
  let nombre = document.getElementById("txtNom").value;
  let cantidad = document.getElementById("numCant").value;
  let costo = document.getElementById("numCost").value;

  let msg = document.getElementById("detalles");
  msg.innerHTML = "";
  msg.innerHTML =
    '<h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Producto agregado</h3>';

  let nuevo = new Producto(codigo, nombre, cantidad, costo);
  let resultado = miInventario.agregarInicio(nuevo);

  if (resultado) {
    msg.innerHTML += resultado;
  } else {
    msg.innerHTML += nuevo.info();
  }
});

// Insertar producto
const btnInsert = document.getElementById("btnInsert");
btnInsert.addEventListener("click", () => {
  let codigo = document.getElementById("txtCod").value;
  let nombre = document.getElementById("txtNom").value;
  let cantidad = document.getElementById("numCant").value;
  let costo = document.getElementById("numCost").value;

  let posicion = parseInt(document.getElementById("numPos").value);

  let msg = document.getElementById("detalles");
  msg.innerHTML = "";
  msg.innerHTML =
    '<h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Producto insertado</h3>';

  let nuevo = new Producto(codigo, nombre, cantidad, costo);
  let resultado = miInventario.insertar(posicion, nuevo);

  if (resultado) {
    msg.innerHTML += resultado;
  } else {
    msg.innerHTML += nuevo.info();
  }
});

// Eliminar
const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", () => {
  let codigo = document.getElementById("txtCod").value;

  let msg = document.getElementById("detalles");
  msg.innerHTML = "";
  msg.innerHTML =
    '<h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Producto Eliminado</h3>';

  if (codigo) {
    let resultado = miInventario.eliminar(codigo);
    if (resultado) {
      msg.innerHTML += "<p class='text-black-600'>Elemento eliminado</p>";
    } else {
      msg.innerHTML +=
        "<p class='text-red-600'>No se pudo eliminar el producto</p>";
    }
  }
});

// Extraer primer elemento
const btnExtractFirst = document.getElementById("btnExtractFirst");
btnExtractFirst.addEventListener("click", () => {
  let msg = document.getElementById("detalles");
  msg.innerHTML = "";
  msg.innerHTML =
    '<h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Producto Extraido</h3>';

  let resultado = miInventario.extraerPrimero();
  if (resultado) {
    msg.innerHTML += resultado.info();
  } else {
    msg.innerHTML +=
      "<p class='text-red-600'>Hubo un error al extraer el elemento</p>";
  }
});
