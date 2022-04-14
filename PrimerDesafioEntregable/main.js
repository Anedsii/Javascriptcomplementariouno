// Se va crear un simulador de stock de producto 
//se va tener una base de datos de componentes electronicos, quimicos y de mecanica 

var id= "001";
var producto = "Transistor IGBT";
var stock = 10;
var minstock= 2;
var maxstrock=5;
var stockreal=0;
var estado= "compra";
var provedor = "microelectronica";

var validar = true;

//se va realizar una consulta el estado que se encuetra el componente
while(validar){
var ingresoprod= prompt("Ingrese ID:");


    if(id == ingresoprod ){
        console.log("Estado de producto:");
        console.log("Producto:" + producto);
        console.log("Stockreal:" + stockreal);
        console.log("estado:" + estado);
    } else{
        console.log("El producto no existe.")
    }
    
var buscar = prompt("Desea buscar otro prodicto? S o N");
if(buscar == "S"){
    validar = true;
}else if (buscar == "N"){
    validar = false;
}
}
