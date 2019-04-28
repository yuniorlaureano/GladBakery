$(function(){
    $("#pastel-table").DataTable();

    $("#btn-ingrediente").on("click", function(){
        $("#modal-pastel-ingrediente").modal("show");
    });

    $("#btn-insumo").on("click", function(){
        $("#modal-pastel-insumo").modal("show");
    });
});