$(document).ready(function() {
    //Sign up
    $("#register").click(function(){
        event.preventDefault();
        if($("#sname").val() != "" && $("#semail").val() != "" && $("#spwd").val() != "" && $("#spwd2").val() != "")
        {
            if ($("#spwd").val() != $("#spwd2").val())
            {
                alert("Las contraseñas no coinciden");
            }
            else
            {
                var jsonData = {
                    "action" : 'REGISTER',
                    "name" : $("#sname").val(),
                    "email" : $("#semail").val(),
                    "pass" : $("#spwd").val()
                };
                $.ajax({
                    url : "http://localhost:8888/BrowniesVique/data/applicationLayer.php",
                    type : "POST",
                    data : jsonData,
                    dataType : "json",
                    contentType : "application/x-www-form-urlencoded",
                    success: function(jsonResponse){
                        alert("Bienvenido");
                        console.log(jsonResponse.status);
                    },
                    error : function(errorMessage){
                        alert("No ha sido posible registrarlo,\nintente de nuevo.");
                    }
                });
            }  
        }
        else 
        {
            alert("Por favor llene todos los campos");
        }
        event.stopPropagation();
    });



    //Log in   




    //Products  




    //Comentarios




    //Kart




    //Contacto
    $("#csubmit").click(function(){
        event.preventDefault();
        if($("#cname").val() != "" && $("#cemail").val() != "" && $("#ccomment").val() != "")
        {
            var jsonData = {
                "action" : 'CONTACT',
                "name" : $("#cname").val(),
                "email" : $("#cemail").val(),
                "comment" : $("#ccomment").val()
            };

            $.ajax({
                url : "http://localhost:8888/BrowniesVique/data/applicationLayer.php",
                type : "POST",
                data : jsonData,
                dataType : "json",
                contentType : "application/x-www-form-urlencoded",
                success: function(jsonResponse){
                    alert("Se ha enviado su duda/mensaje, \n¡Muchas gracias!");
                    console.log(jsonResponse.status);
                },
                error : function(errorMessage){
                    alert("Por el momento no ha sido posible enviar su mensaje,\nintente de nuevo.");
                }
            });
        }
        else 
        {
            alert("Por favor llene todos los campos");
        }
        event.stopPropagation();
    });


    //Ordenes pasadas
});