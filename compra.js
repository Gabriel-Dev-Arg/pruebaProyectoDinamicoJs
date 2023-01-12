
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
    

  }
})
apellidoForm.addEventListener("input",()=>{
  /* console.log(nombreForm.value) */
  if(apellidoForm.value ===""){
  
  
    
  }
})


correoForm.addEventListener("input",()=>{
  if(correoForm.value ===""){
   
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
  <p>le enviaremos el tiked de compra a ${correoForm.value}.</p>
  <hr>
  
</div>`

})