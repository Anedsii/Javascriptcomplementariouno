//
let STOCKELECTRONICA=[];

// Se va crear un simulador de stock de producto 
//se va tener una base de datos de componentes electronicos, quimicos y de mecanica
//campos
let producto = {
    nombre: '00',
    ID: '00',
    minstock: ' 00',
    maxstrock: '20',
    stockreal:'00',
    estado:'comprar',
    provedor: 'microelectronica'
}

//inicio del desafio
//ingreso de productos

    producto.nombre = prompt("Ingrese nombre del producto");
    producto.ID= prompt("Ingrese ID del producto");
    producto.minstock=prompt("Ingrese min del producto");
    producto.maxstock=prompt("Ingrese max del producto");
    producto.stock=prompt("Ingrese stock del producto");
    producto.estado=prompt("Ingrese estado del producto");
    producto.provedor= prompt("Ingrese provedor del producto");
    STOCKELECTRONICA.push(producto);







console.log(STOCKELECTRONICA);


