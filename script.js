
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

  //llamado al formulario

  const nombreForm = document.querySelector("#nombre")
  console.log(nombreForm)
  const apellidoForm = document.querySelector("#apellido")
  console.log(apellidoForm)
  const correoForm = document.querySelector("#correo")

  //evento del formulario

  nombreForm.addEventListener("input",()=>{
    /* console.log(nombreForm.value) */
    if(nombreForm.value ===""){
      alert("El nombre es obligatorio")

    }
  })
  apellidoForm.addEventListener("input",()=>{
    /* console.log(nombreForm.value) */
    if(apellidoForm.value ===""){
      alert ("El nombre es obligatorio ")
    
      
    }
  })

  correoForm.addEventListener("input",()=>{
    if(correoForm.value ===""){
      alert("El correo es obligatorio")
    }
  })
  
  const formulario = document.querySelector("#formulario")
  console.log(formulario)

  const info = document.querySelector(".info")

  //Agregar la informacion del formulario en el doom
  
  const mostrarInfo = formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    info.innerHTML=`<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">¡Muchas gracias ${nombreForm.value} ${apellidoForm.value} por tu compra</h4>
    <p>estaremos en contacto en ${correoForm.value}.</p>
    <hr>
    <p class="mb-0">Siempre que lo necesites, asegúrate de usar utilidades de margen para mantener las cosas ordenadas y ordenadas.</p>
  </div>`
  
  })












//guardado de datos en el localStorage
  document.addEventListener("DOMContentLoaded",() => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    mostrarCarrito()
  })





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


  vaciarCarrito.addEventListener("click",() => {
    carrito.length = []
    mostrarCarrito()
  })

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


  function eliminarProducto(id) {
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    console.log(carrito)
    mostrarCarrito();
  }


  function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }