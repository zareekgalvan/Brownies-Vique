$(document).ready(function() 
{
    //General
    loadComs();
    console.log("Ready");
    if ($.session.get("name") != null)
    {
        console.log($.session.get("name"));
        $(".user").append("<li><a href='pastorders.html'> ¡Hola " + $.session.get("name") + "!</a></li>");
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

    function loadComs() {
        var jsonData = 
        {
            "action" : "LOAD"
        }

        $.ajax(
        {
            url : "http://localhost:8888/BrowniesVique/data/applicationLayer.php",
            type : "POST",
            data : jsonData,
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonResponse)
            {
                var newHTMLContent = "";
                for (var element in jsonResponse) {
                    newHTMLContent += "<div class='decor-coms'>" + jsonResponse[element].date;
                    newHTMLContent += "<p class='p16'><span>" + jsonResponse[element].name + "</span></p>";
                    newHTMLContent += jsonResponse[element].body;
                    newHTMLContent += "</div><hr>";
                    $("#coms").prepend(newHTMLContent);
                    newHTMLContent = "";
                }
                
            },
            error : function(errorMessage)
            {
                console.log("No se cargaron los comentarios");
            }
        });
    }



    //Kart
    $("#agregar").click(function()
    {
        var newGroup = "<div class='decor-coms'>";
        newGroup += "<div class='form-group brownie'>";
        newGroup += "<label>Selecciona el brownie a pedir:</label>";
        newGroup += "<div class='row item'>";
        newGroup += "<div class='col-md-10 col-xs-9 tipo'>";
        newGroup += "<select class='form-control tipob'>";
        newGroup += "<option>Cheesecake</option>";
        newGroup += "<option>Walnut</option>";
        newGroup += "<option>Sprinkles</option>";
        newGroup += "<option>Sugar Glass</option>";
        newGroup += "<option>White chocolate</option>";
        newGroup += "</select>";
        newGroup += "</div>";
        newGroup += "<div class='col-md-2 col-xs-3 numb'>";
        newGroup += "<div class='form-group'>";
        newGroup += "<input type='number' class='form-control num' min='1' value='1'>";
        newGroup += "</div>";
        newGroup += "</div>";
        newGroup += "</div>";
        newGroup += "<div class='row'>";
        newGroup += "<div class='col-md-offset-3 col-md-6'>";
        newGroup += "<div class='bottom'>";
        newGroup += "<a class='btn btn-default btn-block comprar' id='quitar'><i class='glyphicon glyphicon-minus'></i></a>";
        newGroup += "</div>";
        newGroup += "</div>";
        newGroup += "</div>";
        newGroup += "</div>";
        newGroup += "</div>";
        $("#products").append(newGroup);
    });

    $("#quitar").click(function() 
    {
        var last = $(".decor-coms").last();
        last.remove();
    });

    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("comment");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $("#buy").click(function() 
    {
        if($(".decor-coms").length > 0)
        {
            var str = "";
            $(".decor-coms").each(function(){
                str+= $(this).children(".brownie").children(".item").children(".tipo").children(".tipob").val() + " x";
                str+= $(this).children(".brownie").children(".item").children(".numb").children(".form-group").children(".num").val() + "\n";

                
            });
            console.log(str);
            var jsonData = {
                "action" : "ORDER",
                "name" : $.session.get("name"),
                "body" : str
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
                    console.log(jsonResponse);
                    if (jsonResponse.status != "POSTED")
                    {
                        alert("No se pudo procesar tu orden en este momento");
                    }
                    else
                    {
                        modal.style.display = "block";
                    }
                },
                error : function(errorMessage)
                {
                    alert("No se pudo procesar tu orden");
                }
            });
        }
        else
        {
            alert("Necesitas agregar brownies para poder proceder");
        }
    });





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