//Funciones de la pagina

/* 

1- Ingresar
2- Eliminar
3- Buscar (opciones de id, nombre)
4- ver listado 
5- Filtrar [comprar, en stock, comprado]
6-modificar


*/
// Creamo la estructura del objeto que vamos a utilizar de informacion por producto 

class Producto{

    constructor(componente,description,id,pre_unitario,datasheet,estado){
        this.componente = componente;
        this.description = description;
        this.id = id;
        this.pre_unitario = pre_unitario;
        this.datasheet = datasheet;
        this.estado = estado;
    }
    iva(){
        this.pre_unitario = this.pre_unitario * 1.21;
    }



}
let vector =[];
const producto1 = new Producto("Anshu","hola",1,3,"http","stock");
const producto2 = new Producto("Anshu","hola",1,4,"http","stock");

vector.push(producto1);
vector.push(producto2);
console.log(producto1);

producto1.iva(); //aplica la funcion 
console.log(producto1);
console.log(vector);
console.log(vector[0].pre_unitario) //ver producto por fila

for (const ficher of vector) {
    ficher.iva(); //aplica la funcion

}
console.log(vector);
