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
    document.getElementById('div-depuracion').innerHTML += '<table class= cuadro-transparente style="margin-top:10px;"><tr>'+
                                            '<td>'+
                                                '<label>Instruccion</label>'+
                                                '&nbsp&nbsp&nbsp<input class=cuadro-transparente type="text" name="txt-decodificacion-'+i+'" id="txt-decodificacion-'+i+'" style="width: 50px;">'+
                                            '</td>'+
                                            '<td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td>'+
                                            '<td>'+
                                               '<label>Direccion:</label>'+
                                               '&nbsp&nbsp&nbsp<input type="text" style="color:black" name="txt-direccion-'+i+'" id="txt-direccion-'+i+'" style="width: 50px;border-radius:8px">'+
                                            '</td>'+
                                            '</tr></table>'+
                                            '<hr>'+
                                            '<table>'+
                                                '<tr>'+
                                                   '<td><label >PC:</label></td>'+
                                                   '<td>&nbsp&nbsp&nbsp<input type="text" style="color:black" name="txt-pc-'+i+'" id="txt-pc-'+i+'"></td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td><label >Acumulador:</label></td>'+
                                                    '<td>&nbsp&nbsp&nbsp<input type="text" style="color:black" name="txt-acumulador-'+i+'" id="txt-acumulador-'+i+'"><br></td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td><label>IR:</label></td>'+
                                                    '<td>&nbsp&nbsp&nbsp<input type="text" style="color:black" name="txt-ir-'+i+'" id="txt-ir-'+i+'"></td>'+
                                                '</tr>'+
                                            '</table><hr>';
}



//funcion para el boton limpiar (edte limpia las cajas de tecto y la pantalla)
$('#btn-limpiar').click(function(){
    for (var i = 0; i < 20; i--) {
        var contenido = '#txt-contenido-'+i;
        $(contenido).val(" ");
      
    }
    for (var i = 0; i < 20; i--) {
        var instruccion = '#txt-instruccion-'+i;
        $(instruccion).val(" ");
      
    }

});


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
            var numero = prompt('Ingrese el numero que ingresara en la posicion '+ subcadena+': ','');
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




//para las bifurcaiones
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


//seccion de compilacion
$('#btn-compilar').click(function(){
        var arrayInstrucciones = ["10:Leer","11:Escribir","20:Cargar","21:Almacenar","30:Sumar","31:Restar","32:Dividir","33:Multiplicar","40:Bifurca","41:Bifurca negativo","42:Bifurca cero","43:Alto"];
        var regex = /^(10|11|20|21|30|31|32|33|40|41|42|43)[0-9]{3}$/;
        for (var i = 1; i  < 2; i++) {
            var input = "#txt-contenido-"+i+"";
            var input1 = "#txt-instruccion-"+i;
            var cadena = $(input).val();
            //alert(cadena);
            var contenido = regex.test(cadena.trim());
            alert(contenido);
            var subcadena = cadena.substring(2,5);
            alert(subcadena);
            var subcadena1 = cadena.substring(0,2);
            alert(subcadena1);
            var prueba = subcadena == (001||002);
            alert(prueba);
            if ((contenido) && (subcadena == ('001'||'002'))) {
                $(input).css("background-color", "white");
                for (var i = 0; i < 13; i++) {
                    var instruccion = '"'+arrayInstrucciones[i]+'"';
                    var contenidoInstruccion = instruccion.substring(1,3);
                    var contenidoInstruccion1 = instruccion.substring(4,15);
                    if (contenidoInstruccion == subcadena1 ) {
                        //alert(contenidoInstruccion1);
                        $(input1).val(contenidoInstruccion1);
                    }
                }
            }
            else
                $(input).focus();
                $(":focus").css("background-color", "#D5F5E3");
        }

        //verificando que las instrucciones son correctas
        var input2 = "#txt-instruccion-"+i+"";
        var subcadena2 = cadena.substring(0,2);
        for (var i = 0; i < 12; i++) {
          if (arrayInstrucciones[i][0] == subcadena2) {
              var instruccion = arrayInstrucciones[i][1];
              $(input2).val(instruccion);
          }
        }

});



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


//alerts para ingresar los valores
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var paso = $(e.target).data('paso');
        var porcentaje = (parseInt(paso) / 4) * 100;
        $('.progress-bar').css({width: porcentaje + '%'});
        $('.progress-bar').text("Paso " + paso + " de 4");
})

    $('#txt-fecha').click(function(){
        $("#txt-fecha").datepicker();
    })

    $('#personal').click(function(){
        var nombre = $("#txt-nombre").val();
        var apellido = $("#txt-apellido").val();
        var fecha = $("#txt-fecha").val();
        if (nombre=="") {
            $("#mensaje1").fadeIn("slow");
                  return false;
        }
        else{
            $("#mensaje1").fadeOut();
            if (apellido=="") {
                $("#mensaje2").fadeIn("slow");
                return false;
            }
            else{
                $("#mensaje2").fadeOut();
                if (fecha=="") {
                    $("#mensaje3").fadeIn("slow");
                    return false;
                }
                else{
                    $("#mensaje3").fadeOut();
                    $('.nav-pills a[href="#'+'paso2'+'"]').tab('show');
                            
                }
            }
        }       
    })

    $('#social').click(function(){
        $('.nav-pills a[href="#'+'paso3'+'"]').tab('show');
    })

            $('#seguridad').click(function(){
                var correo = $("#txt-correo").val();
                var contraseña = $("#txt-contraseña").val();
                var contraseña2 = $("#txt-contraseña2").val();
                if (correo=="") {
                    $("#mensaje4").fadeIn("slow");
                    return false;
                }
                else{
                    $("#mensaje4").fadeOut();
                    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
                    if (regex.test($('#txt-correo').val().trim())) {
                            $("#mensaje8").fadeOut();
                    }
                    else {
                        
                        $("#mensaje8").fadeIn("slow");
                        return false;
                    }
                    if (contraseña=="") {
                        $("#mensaje5").fadeIn("slow");
                        return false;
                    }
                    else{
                        $("#mensaje5").fadeOut();
                        if (contraseña2=="") {
                            $("#mensaje6").fadeIn("slow");
                            return false;
                        }
                        else{
                            $("#mensaje6").fadeOut();
                            if (contraseña!=contraseña2) {
                                $("#mensaje7").fadeIn("slow");
                            }
                            else{
                                $("#mensaje7").fadeOut();
                                $('.nav-pills a[href="#'+'paso4'+'"]').tab('show');
                            }
                        }
                    }
                }

                
            })

           



});