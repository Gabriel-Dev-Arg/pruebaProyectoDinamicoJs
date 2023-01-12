
  //objeto de indumentaria
  const indumentaria = [{
    id: 1,
    nombre: "Camiseta de entrenamiento",
    precio: 10000,
    cantidad: 1,
    img : "/bostrap/assets/entrenamiento_racing.jpg",

},{
    id: 2,
    nombre: "Shoggin de entrenamiento",
    cantidad: 1,
    precio: 12000,
    img : "/bostrap/assets/pantalon_racing.jpg",
},{
    id: 3,
    nombre: "Campera de entrenamiento",
    cantidad: 1,
    precio: 10000,
    img : "/bostrap/assets/campera_racing.jpg",
},{
    id: 4,
    nombre: "Camiseta oficial copa de trofeo 2022",
    precio: 15000,
    cantidad: 1,
    img : "/bostrap/assets/campeon.jpg",
},
] 
//llamado al carrito
let carrito = []
const contenedor = document.querySelector("#contenedor")
const carritoContenedor = document.querySelector
("#carritoContenedor")
const vaciarCarrito = document.querySelector("#vaciarCarrito")
const precioTotal = document.querySelector("#precioTotal")
const procesarCompra = document.querySelector("#procesarCompra")








//guardado de datos en el localStorage
document.addEventListener("DOMContentLoaded",() => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || []
  mostrarCarrito()
})




//carrito producto
indumentaria.forEach(producto => {
    //descontruracion
    const{id, nombre, precio, cantidad,img} = producto
    console.log(nombre)
    contenedor.innerHTML += `<div class="card " style="width: 18rem; ">
    <img class="card-img-top mt-2" src="${img}"  alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>`
    
});
//asignacion evento click para la continuacion de compra
procesarCompra.addEventListener("click",()=>{
if(carrito.length === 0){
  alert("comprar algo para continuar")
}else{
  location.href = "compra.html"
}
})
// evento vaciar carro boton
vaciarCarrito.addEventListener("click",() => {
  carrito.length = []
  mostrarCarrito()
})


//funcion agregar producto y sumar la cantidad de producto
const agregarProducto = (id) => {
  
  
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = indumentaria.find((prod)=> prod.id === id)
  carrito.push(item)

  }
  mostrarCarrito()
  /* console.log(item) */
}

const mostrarCarrito = ()=> {
    const modalBody = document.querySelector(".modal .modal-body")
  modalBody.innerHTML = ""
    carrito.forEach((prod) => {
      const{id, nombre, precio, cantidad,img} = prod
      modalBody.innerHTML += `<div class="modal-contenedor">
      <div>
      <img class="img-fluid img-carrito" src="${img}"/>
      </div>
      <div>
      <p>Producto: ${nombre}</p>
    <p>Precio: ${precio}</p>
    <p>Cantidad :${cantidad}</p>
    <button class="btn btn-danger" onclick="eliminarProducto(${id})">Eliminar producto</button>
      </div>
    </div>`
    })
    if(carrito.length === 0){
      modalBody.innerHTML = `<p class ="text-center text-primary parrafo">Aun no agregaste nada!</p>`
    }else 
      console.log("hay algo")

    carritoContenedor.textContent = carrito.length;

    precioTotal.innerText = carrito.reduce((acmulador, prod) =>
    acmulador+ prod.cantidad * prod.precio, 0)

    guardarStorage()

    
}

//funcion elimiar producto
function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  /* console.log(carrito) */
  mostrarCarrito();
}


function guardarStorage(){
  localStorage.setItem("carrito", JSON.stringify(carrito))
}