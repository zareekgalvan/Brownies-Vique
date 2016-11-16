$(document).ready(function() {
    //Sign up




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