let miformulario = document.getElementById("formulario");

miformulario.addEventListener("submit",validarformulario);

//Contenido del formulario
function validarformulario(e){
    e.preventDefault();
    let formulario = e.target 
    //num_line
    console.log(formulario.children[1].value);
    console.log(formulario.children[5].value);
    console.log(formulario.children[9].value);
   
}
//Reacione al ENTER 
$("#stock").keypress(function(e){
    if(e.keyCode == 13){
        $("#submit").click();
    }
});