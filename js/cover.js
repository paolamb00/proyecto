function mostrarUsuarios(){
    let htmlContentToAppend ="";
        let correo1 =  localStorage.getItem("Email");
        htmlContentToAppend +=`
         <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          `+correo1+`
          </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
        <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
        <li"><a class="dropdown-item" href="index.html">Cerrar sesión</a></li>
  </ul>
</div>
       `
         
         document.getElementById("usuario").innerHTML = htmlContentToAppend; 
    };



document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

//ELIMINAR USUARIO AUTENTICADO AL CERRAR CESIÓN


mostrarUsuarios();


