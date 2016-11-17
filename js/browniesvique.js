$(document).ready(function() 
{
    //General
    console.log("Ready");
    if ($.session.get("name") != null)
    {
        console.log($.session.get("name"));
        $(".user").append("<li><a> ¡Hola " + $.session.get("name") + "!</a></li>");
        $("#su").remove();
        $("#li").remove();
        $(".navbar-right").prepend( "<li><a id='cs'>Cerrar sesión</a></li>" );
    }
    else
    {
        console.log("not set");
    }

    $("#cs").click(function()
    {
        $.session.remove("name");
        window.location.replace("../BrowniesVique/index.html");

    });



    //Sign up
    $("#register").click(function()
    {
        event.preventDefault();
        if($("#sname").val() != "" && $("#semail").val() != "" && $("#spwd").val() != "" && $("#spwd2").val() != "")
        {
            if ($("#spwd").val() != $("#spwd2").val())
            {
                alert("Las contraseñas no coinciden");
            }
            else
            {
                var jsonData = 
                {
                    "action" : 'REGISTER',
                    "name" : $("#sname").val(),
                    "email" : $("#semail").val(),
                    "pass" : $("#spwd").val()
                };
                $.ajax(
                {
                    url : "http://localhost:8888/BrowniesVique/data/applicationLayer.php",
                    type : "POST",
                    data : jsonData,
                    dataType : "json",
                    contentType : "application/x-www-form-urlencoded",
                    success: function(jsonResponse)
                    {
                        if (jsonResponse.status == "EXISTS")
                        {
                            alert("El email que escribiste ya esta en uso, porfavor selecciona otro.")
                        }
                        else
                        {
                            $.session.set("name", jsonResponse.name);
                            window.location.replace("../BrowniesVique/productos.html");
                        }
                    },
                    error : function(errorMessage)
                    {
                        alert("No ha sido posible registrarlo, intente de nuevo.");
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
    $("#login").click(function()
    {
        event.preventDefault();
        if($("#lemail").val() != "" && $("#lpwd").val() != "")
        {
            var jsonData = 
            {
                "action" : 'LOGIN',
                "email" : $("#lemail").val(),
                "pass" : $("#lpwd").val()
            };
            $.ajax(
            {
                url : "http://localhost:8888/BrowniesVique/data/applicationLayer.php",
                type : "POST",
                data : jsonData,
                dataType : "json",
                contentType : "application/x-www-form-urlencoded",
                success: function(jsonResponse)
                {
                    if (jsonResponse.status == "NO EXISTS")
                    {
                        alert("El email que escribiste no está en uso, porfavor selecciona uno valido.")
                    }
                    else
                    {
                        $.session.set("name", jsonResponse.name);
                        window.location.replace("../BrowniesVique/productos.html");

                    }
                },
                error : function(errorMessage)
                {
                    alert("No ha sido posible iniciar sesión, intente de nuevo.");
                }
            }); 
        }
        else 
        {
            alert("Por favor llene todos los campos");
        }
        event.stopPropagation();
    });



    //Products  




    //Comentarios
    $("#comentar").click(function()
    {
        event.preventDefault();
        if ($("#comment").val() == "") 
        {
            alert("Escriba su comentario");
        }
        else if ($.session.get("name") != null)
        {
            var jsonData = 
            {
                "action" : "POST",
                "name" : $.session.get("name"),
                "body" : $("#comment").val()
            };

            $.ajax(
            {
                url : "http://localhost:8888/BrowniesVique/data/applicationLayer.php",
                type : "POST",
                data : jsonData,
                dataType : "json",
                contentType : "application/x-www-form-urlencoded",
                success: function(jsonResponse)
                {
                    alert("Se ha posteado su comentario");
                    console.log(jsonResponse.status);
                    window.location.replace("../BrowniesVique/comentarios.html");
                },
                error : function(errorMessage)
                {
                    alert("Por el momento no ha sido posible enviar su mensaje, intente de nuevo.");
                }
            });
        }
        else
        {
            alert("Primero tiene que iniciar sesión");
            window.location.replace("../BrowniesVique/login.html");
        }
    });



    //Kart




    //Contacto
    $("#csubmit").click(function()
    {
        event.preventDefault();
        if($("#cname").val() != "" && $("#cemail").val() != "" && $("#ccomment").val() != "")
        {
            var jsonData = 
            {
                "action" : 'CONTACT',
                "name" : $("#cname").val(),
                "email" : $("#cemail").val(),
                "comment" : $("#ccomment").val()
            };

            $.ajax(
            {
                url : "http://localhost:8888/BrowniesVique/data/applicationLayer.php",
                type : "POST",
                data : jsonData,
                dataType : "json",
                contentType : "application/x-www-form-urlencoded",
                success: function(jsonResponse)
                {
                    alert("Se ha enviado su duda/mensaje, ¡Muchas gracias!");
                    console.log(jsonResponse.status);
                },
                error : function(errorMessage)
                {
                    alert("Por el momento no ha sido posible enviar su mensaje, intente de nuevo.");
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