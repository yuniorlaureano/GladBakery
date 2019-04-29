$(function(){
    $("#pastel-table").DataTable();

    $("#btn-ingrediente").on("click", function(){
        $("#modal-pastel-ingrediente").modal("show");
    });

    $("#btn-insumo").on("click", function(){
        $("#modal-pastel-insumo").modal("show");
    });

    $("#tbn-producto").on("click", function(){
        var context = $(this).data("context");
        if(context == "listar"){
            $(this).data("context", "crear");
            $(this).text("Crear Producto");
            $("#formulario-listar-producto").show();
            $("#formulario-registro-producto").hide();
        } else {
            $(this).data("context", "listar");
            $(this).text("Listar Producto");
            $("#formulario-listar-producto").hide();
            $("#formulario-registro-producto").show();
        }
    });

    $("#upload-pastel").on("click", function(){
        $("#upload-pastel-image").click();
    });
});