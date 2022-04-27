//Funciones de la pagina

/* 

1- Ingresar
2- Eliminar
3- Buscar (opciones de id, nombre)
4- ver listado 
5- Filtrar [comprar, en stock, comprado]
6-modificar


*/ 
//Busqueda

//ID
function buscarid(id,datos){
    let info = [];
    for(i=0; i<datos.length; i++){
        if(datos[i].id==id){
            info.push(datos[i]);
        }
    }

    return info
}
//nombre
function buscarno(nombre,datos){
    let infon = [];
    for(i=0; i<datos.length; i++){
        if(datos[i].componente==nombre){
            infon.push(datos[i]);
        }
    }

    return infon
}
//Funcicon Eliminar
function eliminar(datos,id_ele){
    let newdate=[]
    for(i=0;i<datos.length;i++){
        if(datos[i].id != id_ele){
              newdate.push(datos[i]);
        }
    }

    return newdate
}
// Creamo la estructura del objeto que vamos a utilizar de informacion por producto 

class Producto{

    constructor(componente,description,id,pre_unitario,datasheet,estado){
        this.componente = componente;
        this.description = description;
        this.id = id;
        this.pre_unitario = pre_unitario * 1.21;
        this.datasheet = datasheet;
        this.estado = estado;
    }
  /*  iva(){
        this.pre_unitario = this.pre_unitario * 1.21;
    }*/

}

// Variable que va contener la informacion de mis producto * Por el momento*
let productos_data = [];

//Ingreso de datos *Primeramente va ser de 4 //
//Ya que el ingreso futuramente va ser con una base de datos //

for(i=0; i<1; i++){
    
    productos_data.push(new Producto(prompt("Ingrese componente"),prompt("Ingrese description"),prompt("Ingrese ID"),prompt("Ingrese precio unitario"),prompt("Link Datashet"),prompt("Estado")));
}
console.log(productos_data);

//Eliminar


productos_data= eliminar(productos_data,prompt("Ingrese ID del producto a eliminar"));
console.log("Eliminado");
console.log(productos_data);

//Buscar id
console.log("Buscar id");
console.log(buscarid(prompt("ingrese id del producto a buscar"),productos_data));


//Buscar por nombre

console.log("Buscar nombre");
console.log(buscarno(prompt("ingrese nombre del producto a buscar"),productos_data));

//Ver listado
console.log("Ver listado");
for (let i = 0; i < productos_data.length; i++){
    console.log(productos_data[i]);
}