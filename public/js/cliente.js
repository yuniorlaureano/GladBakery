$(function() {


    var clienteTable = $("#client-table").DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "/admin/api/cliente",
            "type": "GET"
        },
        "columns": [
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "edad" },
            { "data": "email" },
            { "data": "telefono" },
            { "data": "sector" },
            {
                "data": "id",
                "render": function(data, type, row, meta) {
                    return "<button data-id='" + data + "' class='edit'>Edit</button>" + "<button class='delete' data-id='" + data + "'>Delete</button>"
                }
            }
        ]
    });

    $("#mostrar-formulario-cliente").on("click", function() {
        var context = $(this).data("context");
        if (context == "listar") {
            cleanClientFields();
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

    $("#button-cliente-gardar").on("click", function() {
        var data = {
            nombre: { val: $("#input-cliente-nombre").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-nombre' },
            apellido: { val: $("#input-cliente-apellido").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-apellido' },
            edad: { val: $("#input-cliente-edad").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-edad' },
            email: { val: $("#input-cliente-email").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-email' },
            clave: { val: $("#input-cliente-clave").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-clave' },
            retry: {
                val: $("#input-cliente-retry").val(),
                valid: function(retry) {
                    return (this.val != "" && this.val != undefined) && this.val == retry;
                },
                validationspan: 'validation-span-retry'
            },
            telefono: { val: $("#input-cliente-telefono").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-telefono' },
            sector: { val: $("#input-cliente-sector").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-sector' },
            calle: { val: $("#input-cliente-calle").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-calle' },
            numero: { val: $("#input-cliente-numero").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-numero' },
            referencia: { val: $("#input-cliente-referencia").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-referencia' }
        };

        var hasError = false;
        var _data = {};
        var keys = Object.keys(data);

        for (var i = 0; i < keys.length; i++) {
            if (!data[keys[i]].valid(data.clave.val)) {
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

        axios.post('/admin/api/cliente', _data)
            .then(function(response) {
                clienteTable.ajax.reload();
            })
            .catch(function(error) {
                console.log(error);
            });

    });

    $("#button-cliente-modificar").on("click", function() {
        var data = {
            nombre: { val: $("#input-cliente-nombre").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-nombre' },
            apellido: { val: $("#input-cliente-apellido").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-apellido' },
            edad: { val: $("#input-cliente-edad").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-edad' },
            email: { val: $("#input-cliente-email").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-email' },
            clave: { val: $("#input-cliente-clave").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-clave' },
            retry: {
                val: $("#input-cliente-retry").val(),
                valid: function(retry) {
                    return (this.val != "" && this.val != undefined) && this.val == retry;
                },
                validationspan: 'validation-span-retry'
            },
            telefono: { val: $("#input-cliente-telefono").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-telefono' },
            sector: { val: $("#input-cliente-sector").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-sector' },
            calle: { val: $("#input-cliente-calle").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-calle' },
            numero: { val: $("#input-cliente-numero").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-numero' },
            referencia: { val: $("#input-cliente-referencia").val(), valid: function() { return this.val != "" && this.val != undefined; }, validationspan: 'validation-span-referencia' }
        };

        var hasError = false;
        var _data = {};
        var keys = Object.keys(data);

        for (var i = 0; i < keys.length; i++) {
            if (!data[keys[i]].valid(data.clave.val)) {
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

        axios.put('/admin/api/cliente', _data)
            .then(function(response) {
                clienteTable.ajax.reload();
            })
            .catch(function(error) {
                console.log(error);
            });

    });

    $("#button-cliente-cancelar").on("click", function() {
        cleanClientFields();
    });

    $("#client-table").on("click", ".delete", function() {
        alert($(this).data("id"));
    });

    $("#client-table").on("click", ".edit", function() {

        axios.get('/admin/api/cliente/' + $(this).data("id"))
            .then(function(response) {
                if (response.data) {
                    var keys = Object.keys(response.data);
                    for (var i = 0; i < keys.length; i++) {
                        if ($("#input-cliente-" + keys[i])) {
                            $("#input-cliente-" + keys[i]).val(response.data[keys[i]]);
                        }

                    }
                }
            })
            .catch(function(error) {
                console.log(error);
            });

        $("#formulario-listado-cliente").hide();
        $("#formulario-registro-cliente").show();
        $("#mostrar-formulario-cliente").data("context", "listar");
        $("#mostrar-formulario-cliente").text("Listar");
    });

});


function cleanClientFields() {
    $("#input-cliente-nombre").val('');
    $("#input-cliente-apellido").val('');
    $("#input-cliente-edad").val('');
    $("#input-cliente-email").val('');
    $("#input-cliente-clave").val('');
    $("#input-cliente-retry").val('');
    $("#input-cliente-telefono").val('');
    $("#input-cliente-sector").val('');
    $("#input-cliente-calle").val('');
    $("#input-cliente-numero").val('');
    $("#input-cliente-referencia").val('');
}