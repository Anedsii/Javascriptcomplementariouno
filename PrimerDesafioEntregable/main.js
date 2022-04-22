// Se va crear un simulador de stock de producto 
//se va tener una base de datos de componentes electronicos, quimicos y de mecanica 

let id= "001";
let producto = "Transistor IGBT";
let stock = 10;
let minstock= 2;
let maxstrock=5;
let stockreal=0;
let estado= "compra";
let provedor = "microelectronica";

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
