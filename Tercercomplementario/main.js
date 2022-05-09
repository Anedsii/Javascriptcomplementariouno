function guardar(){
   
    let producto = document.getElementById("producto").value;
    let Estado = document.getElementById("Estado").value;
    let Proveedor = document.getElementById("Proveedor").value;

    let fila="<tr><td>"+producto+"</td><td>"+Estado +"</td><td>"+Proveedor +"</td></tr>";

    let btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tabla").appendChild(btn);
}

//Ingreso de datos interactuando con HTML