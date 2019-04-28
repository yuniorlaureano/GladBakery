$(function(){
    $("#client-table").DataTable();

    $("#mostrar-formulario-cliente").on("click", function(){
        var context = $(this).data("context");
        if(context == "listar"){
            $(this).data("context", "crear");
            $(this).text("Crear");
            $("#formulario-listado-cliente").show();
            $("#formulario-registro-cliente").hide();
        } else {
            $(this).data("context", "listar");
            $(this).text("Listar");
            $("#formulario-listado-cliente").hide();
            $("#formulario-registro-cliente").show();
        }
    });
});