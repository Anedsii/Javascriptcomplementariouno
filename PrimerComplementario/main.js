// Creamos las variables de entrada 

var one_number;
var two_number;

// contador
var contador=0;


one_number= prompt("Ingrese un numero");
two_number= prompt("Ingrese segundo numero");

//creo el bucle
while(contador<25){

  
//solo si x es igual a cero
    if((contador%one_number) == 0){
        //si es asi multiplico contador por el segundo numero ingresado
        console.log(contador*two_number);
    }
//sumo uno a contador
    contador= contador + 1;

}



