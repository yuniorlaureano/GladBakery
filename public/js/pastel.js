$(function(){
    $("#pastel-table").DataTable();
    var insumoTable = $("#insumo-table").DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "/admin/api/pastel/insumo",
            "type": "GET"
        },
        "columns": [
            { "data": "nombre" },
            { "data": "descripcion" },
            {
                "data": "id",
                "render": function(data, type, row, meta) {
                    return "<button data-id='" + data + "' class='edit'>Edit</button>" + "<button class='delete' data-id='" + data + "'>Delete</button>"
                }
            }
        ]
    });


    $("#btn-ingrediente").on("click", function(){
        $("#modal-pastel-ingrediente").modal("show");
    });

    $("#btn-insumo").on("click", function(){
        $("#modal-pastel-insumo").modal("show");
    });

    $("#btn-insumo-guardar").on("click", function(){
        
        var data = {
            nombre: { val: $("#input-insumo-nombre").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-nombre' },
            descripcion: { val: $("#input-insumo-descripcion").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-descripcion' },
        };

        var hasError = false;
        var _data = {};
        var keys = Object.keys(data);

        for (var i = 0; i < keys.length; i++) {
            if (!data[keys[i]].valid()) {
                $("." + data[keys[i]].validationspan).show();
                hasError = true;
            } else {
                $("." + data[keys[i]].validationspan).hide();
            }

            _data[keys[i]] = data[keys[i]].val;
        }

        if (hasError) {
            return false;
        }

        axios.post('/admin/api/pastel/insumo', _data)
            .then(function(response) {
                insumoTable.ajax.reload();
            })
            .catch(function(error) {
                console.log(error);
            });

        cleanClientFields();
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

function cleanClientFields(){
    $("#input-insumo-nombre").val('');   
    $("#input-insumo-descripcion").val('');   
}