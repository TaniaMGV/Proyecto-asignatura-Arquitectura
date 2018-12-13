//funciones para realizar los procesos




function cargarValores(instruccion){
    $("#div-instrucciones").html("<img src='img/loading.gif'>");
    parametro = "instruccion="+instruccion;
    $.ajax({
        data:parametro,
        method:"POST",
        success:function(respuesta){
            $("#div-instrucciones").html(respuesta);
        },
        error:function(){
            alert("Oh no, algo ha sucedido!!!");
        }
    });
}


//funcion para limpiar las cajas de texto 
$('#btn-limpiar').click(function(){
    limpiar();
});


function limpiar(){
        $('#txt-contenido-0').val("");
        $('#txt-contenido-1').val("");
        $('#txt-contenido-2').val("");
        $('#txt-contenido-3').val("");
        $('#txt-contenido-4').val("");
        $('#txt-contenido-5').val("");
        $('#txt-contenido-6').val("");
        $('#txt-contenido-7').val("");
        $('#txt-contenido-8').val("");
        $('#txt-contenido-9').val("");
        $('#txt-contenido-10').val("");
        $('#txt-contenido-11').val("");
        $('#txt-contenido-12').val("");
        $('#txt-contenido-13').val("");
        $('#txt-contenido-14').val("");
        $('#txt-contenido-15').val("");
        $('#txt-contenido-16').val("");
        $('#txt-contenido-17').val("");
        $('#txt-contenido-18').val("");
        $('#txt-contenido-19').val("");

        $('#txt-instruccion-0').val("");
        $('#txt-instruccion-1').val("");
        $('#txt-instruccion-2').val("");
        $('#txt-instruccion-3').val("");
        $('#txt-instruccion-4').val("");
        $('#txt-instruccion-5').val("");
        $('#txt-instruccion-6').val("");
        $('#txt-instruccion-7').val("");
        $('#txt-instruccion-8').val("");
        $('#txt-instruccion-9').val("");
        $('#txt-instruccion-10').val("");
        $('#txt-instruccion-11').val("");
        $('#txt-instruccion-12').val("");
        $('#txt-instruccion-13').val("");
        $('#txt-instruccion-14').val("");
        $('#txt-instruccion-15').val("");
        $('#txt-instruccion-16').val("");
        $('#txt-instruccion-17').val("");
        $('#txt-instruccion-18').val("");
        $('#txt-instruccion-19').val("");

        $('#txt-direccion-0').val("");
        $('#txt-direccion-1').val("");
        $('#txt-direccion-2').val("");
        $('#txt-direccion-3').val("");
        $('#txt-direccion-4').val("");
        $('#txt-direccion-5').val("");
        $('#txt-direccion-6').val("");
        $('#txt-direccion-7').val("");
        $('#txt-direccion-8').val("");
        $('#txt-direccion-9').val("");
        $('#txt-direccion-10').val("");
        $('#txt-direccion-11').val("");
        $('#txt-direccion-12').val("");
        $('#txt-direccion-13').val("");
        $('#txt-direccion-14').val("");
        $('#txt-direccion-15').val("");
        $('#txt-direccion-16').val("");
        $('#txt-direccion-17').val("");
        $('#txt-direccion-18').val("");
        $('#txt-direccion-19').val("");

        $('#txt-pc-ejecucion').val("");
        $('#txt-acumulador-ejecucion').val("");
        $('#txt-ir').val("");
        $('#txt-pantalla').val("");
        $('#txt-resultado').val("");
        

};




$(document).ready(function(){
  $('#txt-cont-0').val("000");
  $('#txt-cont-1').val("001");
  $('#txt-cont-2').val("002");
  $('#txt-cont-3').val("003");
  $('#txt-cont-4').val("004");
  $('#txt-cont-5').val("005");
  $('#txt-cont-6').val("006");
  $('#txt-cont-7').val("007");
  $('#txt-cont-8').val("008");
  $('#txt-cont-9').val("009");
  $('#txt-cont-10').val("010");
  $('#txt-cont-11').val("011");
  $('#txt-cont-12').val("012");
  $('#txt-cont-13').val("013");
  $('#txt-cont-14').val("014");
  $('#txt-cont-15').val("015");
  $('#txt-cont-16').val("016");
  $('#txt-cont-17').val("017");
  $('#txt-cont-18').val("018");
  $('#txt-cont-19').val("019");





//for que genera un conjunto de cajas de texto para las instrucciones ingresadas
for (var i = 0; i < 20; i++) {
    document.getElementById('div-depuracion').innerHTML += '<table class="cuadro-transparente" style="margin-top:10px;margin:20px;"><tr>'+
                                            '<td>'+

                                                '<label>&nbsp&nbsp&nbsp Instrucción</label>'+
                                                '&nbsp&nbsp&nbsp<input class="cuadro-transparente" type="text" name="txt-decodificacion-'+i+'" id="txt-decodificacion-'+i+'" style="width: 80px; margin:20px;">'+
                                            '</td>'+
                                            '<td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td>'+
                                            '<td>'+
                                               '<label>Dirección:</label>'+
                                               '&nbsp&nbsp&nbsp<input type="text" style="color:white;background-color: rgba(0,0,0,0.5);border:1px; border-color:#9370DB;border-style: solid;padding:10px;margin:10px;" name="txt-direccion-'+i+'" id="txt-direccion-'+i+'" style="width: 80px;border:8px">'+
                                            '</td>'+
                                            '</tr></table>'+
                                            '<hr>'+
                                            '<table>'+
                                                '<tr>'+
                                                   '<td><label >&nbsp&nbsp&nbsp PC:</label></td>'+
                                                   '<td>&nbsp&nbsp&nbsp<input type="text" style="color:white;background-color: rgba(0,0,0,0.5);border:1px; border-color:#9370DB;border-style: solid;padding:10px;margin:10px;" name="txt-pc-'+i+'" id="txt-pc-'+i+'"></td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td><label >&nbsp&nbsp&nbsp Acumulador:</label></td>'+
                                                    '<td>&nbsp&nbsp&nbsp<input type="text" style="color:white;background-color: rgba(0,0,0,0.5);border:1px; border-color:#9370DB;border-style: solid;padding:10px;margin:10px;" name="txt-acumulador-'+i+'" id="txt-acumulador-'+i+'"><br></td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td><label>&nbsp&nbsp&nbsp IR:</label></td>'+
                                                    '<td>&nbsp&nbsp&nbsp<input type="text" style="color:white;background-color: rgba(0,0,0,0.5);border:1px; border-color:#9370DB;border-style: solid;padding:10px;margin:10px;" name="txt-ir-'+i+'" id="txt-ir-'+i+'"></td>'+
                                                '</tr>'+
                                            '</table><hr>';
}






//funcion para ejecutar las instruccciones ingresadas
$('#btn-ejecutar').click(function(){
    ejecutar();
});


function ejecutar(){
    for (var i = 0; i < 20; i++) {
       var input = "#txt-contenido-"+i+"";
       var cadena = $(input).val();
       var subcadena1 = cadena.substring(0,2);
       var subcadena = cadena.substring(2,5);
       switch(subcadena1){
         case '10':
            var subcadena = cadena.substring(2,5);
            var numero = prompt('Ingrese un numero para la direccion correspondiente a la instruccion '+ subcadena+': ','');
            var ubicacion = '#txt-ubicacion-'+subcadena;
            $(ubicacion).val(numero);
            if (i < 10) {
                var acumuladorEjecucion = "00"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
            if (i > 9 && i < 21) {
                var acumuladorEjecucion = "0"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
         break;
         case '11':
             var ubicacion = "#txt-ubicacion-"+subcadena;
             var acumulador = $(ubicacion).val();
             document.getElementById("txt-pantalla").innerHTML += acumulador;
             if (i < 10) {
                var acumuladorEjecucion = "00"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
             if (i > 9 && i < 21) {
                var acumuladorEjecucion = "0"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
             }
         break;
         case '20':
             var ubicacion = "#txt-ubicacion-"+subcadena;
             var contenido = $(ubicacion).val();
             $("#txt-acumulador-ejecucion").val(contenido);
             if (i < 10) {
                var acumuladorEjecucion = "00"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
            if (i > 9 && i < 21) {
                var acumuladorEjecucion = "0"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
         break;
         case '21':
            var acumulador = $('#txt-acumulador-ejecucion').val();
            var ubicacion = "#txt-ubicacion-"+subcadena;
            $(ubicacion).val(acumulador);
            if (i < 10) {
                var acumuladorEjecucion = "00"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
            if (i > 9 && i < 21) {
                var acumuladorEjecucion = "0"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
         break;
         case '30':
             var ubicacion = "#txt-ubicacion-"+subcadena;
             var contenido = $(ubicacion).val();
             var contenido1 = parseInt(contenido);
             var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
             var acumulador1 = parseInt(acumulador);
             var resultado = contenido1 + acumulador1;
             $("#txt-acumulador-ejecucion").val(resultado);
             if (i < 10) {
                var acumuladorEjecucion = "00"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
            if (i > 9 && i < 21) {
                var acumuladorEjecucion = "0"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
         break;
         case '31':
             var ubicacion = "#txt-ubicacion-"+subcadena;
             var contenido = $(ubicacion).val();
             var contenido1 = parseInt(contenido);
             var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
             var acumulador1 = parseInt(acumulador);
             var resultado = contenido1 - acumulador1  ;
             //alert(resultado);
             $("#txt-acumulador-ejecucion").val(resultado);
             if (i < 10) {
                var acumuladorEjecucion = "00"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
            if (i > 9 && i < 21) {
                var acumuladorEjecucion = "0"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
         break;
         case '32':
             var ubicacion = "#txt-ubicacion-"+subcadena;
             var contenido = $(ubicacion).val();
             var contenido1 = parseInt(contenido);
             var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
             var acumulador1 = parseInt(acumulador);
             var resultado = contenido1 / acumulador1 ;
             $("#txt-acumulador-ejecucion").val(resultado);
             if (i < 10) {
                var acumuladorEjecucion = "00"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
            if (i > 9 && i < 21) {
                var acumuladorEjecucion = "0"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
         break;
         case '33':
             var ubicacion = "#txt-ubicacion-"+subcadena;
             var contenido = $(ubicacion).val();
             var contenido1 = parseInt(contenido);
             var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
             var acumulador1 = parseInt(acumulador);
             var resultado = acumulador1 * contenido1 ;
             $("#txt-acumulador-ejecucion").val(resultado);
             if (i < 10) {
                var acumuladorEjecucion = "00"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
            if (i > 9 && i < 21) {
                var acumuladorEjecucion = "0"+(i+1);
                $('#txt-pc-ejecucion').val(acumuladorEjecucion);
            }
         break;
         case '40':
             if (i < 10 ) {
                var instruccionInicio = "00" + i;
             }
             if (i > 9 && i < 20) {
                var instruccionInicio = "0" + i;
             }
             var instruccionFinal = parseInt(subcadena);
             var instruccionInicial = parseInt(instruccionInicio);
             for (var n = instruccionInicial ; n < instruccionFinal - 1; n++) {
                    var instruccionBorrar = "#txt-contenido-"+(n+1);
                    $(instruccionBorrar).val(" ");                     
             }
            var contenido = parseInt(subcadena);
            ejecutarBifurcacion(contenido);
         break;
         case '41':
             if (parseInt($('#txt-acumulador-ejecucion').val()) < 0) {
                    if (i < 10 ) {
                        var instruccionInicio = "00" + i;
                    }
                    if (i > 9 && i < 20) {
                        var instruccionInicio = "0" + i;
                    }
                    var instruccionFinal = parseInt(subcadena);
                    var instruccionInicial = parseInt(instruccionInicio);
                    for (var n = instruccionInicial ; n < instruccionFinal - 1; n++) {
                        var instruccionBorrar = "#txt-contenido-"+(n+1);
                        $(instruccionBorrar).val(" ");                     
                    }
                    var contenido = parseInt(subcadena);
                    ejecutarBifurcacion(contenido);
             }
         break;
         case '42':
             if (parseInt($('#txt-acumulador-ejecucion').val()) < 0) {
                    if (i < 10 ) {
                        var instruccionInicio = "00" + i;
                    }
                    if (i > 9 && i < 20) {
                        var instruccionInicio = "0" + i;
                    }
                    var instruccionFinal = parseInt(subcadena);
                    var instruccionInicial = parseInt(instruccionInicio);
                    for (var n = instruccionInicial ; n < instruccionFinal - 1; n++) {
                        var instruccionBorrar = "#txt-contenido-"+(n+1);
                        $(instruccionBorrar).val(" ");                     
                    }
                    var contenido = parseInt(subcadena);
                    ejecutarBifurcacion(contenido);
             }
         break;
         case '43':
             return;
         break;
       }
       var resultado = $('#txt-acumulador-ejecucion').val();
       $('#txt-resultado').val(resultado);
    }
};




   

//para las instrucciones de bifurcacion
function ejecutarBifurcacion(saltoInstruccion){
        var salto = saltoInstruccion;
        var input = "#txt-contenido-"+salto;
        var cadena = $(input).val();
        if (cadena != "") {
            var subcadena1 = cadena.substring(0,2);
           var subcadena = cadena.substring(2,5);
           switch(subcadena1){
             case '10':
                var subcadena = cadena.substring(2,5);
                var numero = prompt('Ingrese el numero que ingresara en la posicion '+ subcadena+': ','');
                var ubicacion = '#txt-ubicacion-'+subcadena;
                $(ubicacion).val(numero);
             break;
             case '11':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var  mensaje = $(ubicacion).val();
             break;
             case '20':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 $("#txt-acumulador-ejecucion").val(contenido);
             break;
             case '21':
                var acumulador = $('#txt-acumulador-ejecucion').val();
                var ubicacion = "#txt-ubicacion-"+subcadena;
                $(ubicacion).val(acumulador);
             break;
             case '30':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 var contenido1 = parseInt(contenido);
                 var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                 var acumulador1 = parseInt(acumulador);
                 var resultado = contenido1 + acumulador1;
                 $("#txt-acumulador-ejecucion").val(resultado);
             break;
             case '31':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 var contenido1 = parseInt(contenido);
                 var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                 var acumulador1 = parseInt(acumulador);
                 var resultado = acumulador1 - contenido1 ;
                 $("#txt-acumulador-ejecucion").val(resultado);
             break;
             case '32':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 var contenido1 = parseInt(contenido);
                 var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                 var acumulador1 = parseInt(acumulador);
                 var resultado = acumulador1 / contenido1 ;
                 $("#txt-acumulador-ejecucion").val(resultado);
             break;
             case '33':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 var contenido1 = parseInt(contenido);
                 var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                 var acumulador1 = parseInt(acumulador);
                 var resultado = acumulador1 * contenido1 ;
                 $("#txt-acumulador-ejecucion").val(resultado);
             break;
             case '40':
                 var contenido = "#txt-contenido-"+subcadena;
                 var instruccion = $(contenido).val();
                 var subcadena1 = instruccion.substring(0,2);
                 var subcadena = instruccion.substring(2,5);
             break;
           
        }
        }
};





//seccion de depuracion
$('#btn-depurar').click(function(){
    for (var i = 0; i < 1; i++) {
        var input = "#txt-contenido-"+i+"";
        var cadena = $(input).val();
        var subcadena1 = cadena.substring(0,2);
        var subcadena = cadena.substring(2,5);
        var instruccion = "#txt-decodificacion-"+i;
        $(instruccion).val(subcadena1);
        var direccion = "#txt-direccion-"+i;
        $(direccion).val(subcadena);
        //Obtener la siguiente instruccion a ejecutar
        if ( i < 9) {
           var siguiente = "00"+(i+1);
        }
        if (i > 9 && i < 20) {
            var siguiente = "0"+(i+1);
        }
        var pc = "#txt-pc-"+i;
        $(pc).val(siguiente);
    }

});



$('#btn-compilar').click(function(){
    compilar();
        
});




function compilar(){
    var arrayInstrucciones = ["10:Leer variable numero","11:Escribir en pantalla","20:Cargar en AC         ","21:Almacenar en memoria     ","30:Sumar AC               ","31:Restar AC                ","32:Dividir AC               ","33:Multiplicar AC                ","40:Bifurca               ","41:Bifurca negativo               ","42:Bifurca cero               ","43:Fin ejecucion                 "];
    var regex = /^(10|11|20|21|30|31|32|33|40|41|42|43|00|01|02|03|04|05|06|07|08|09)[0-9]{3}$/;
    var comprobacion = 0;
    for (var i = 0; i < 20; i++) {
        var input = "#txt-contenido-"+i+"";
        var input1 = "#txt-instruccion-"+i;
        var cadena = $(input).val();
        if (cadena != "") {
            var contenido = regex.test(cadena.trim());
            var subcadena = cadena.substring(2,5);
            var subcadena1 = cadena.substring(0,2);
            if (contenido ) {
                
                for (var j = 0; j < 13; j++) {
                    var instruccion = '"'+arrayInstrucciones[j]+'"';
                    var contenidoInstruccion = instruccion.substring(1,3);
                    var contenidoInstruccion1 = instruccion.substring(4,24);
                    if (contenidoInstruccion == subcadena1 ) {
                        $(input1).val(contenidoInstruccion1);
                    }
                }
            }
            else{
                var numero = alert('Las instrucciones ingresadas no son correctas!!!!!!');
                //limpiar();
            }
        }
    }
    if ( comprobacion == 0){
        var numero = alert('las instrucciones se han compilado correctamente!!!!!!');
        return false;
        
    }
    return true;
}



           



});