function getClientes() {
    axios.get('/admin/api/cliente')
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
}
$(function() {


    $("#client-table").DataTable({
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
            { "data": "sector" }
        ]
    });

    $("#mostrar-formulario-cliente").on("click", function() {
        var context = $(this).data("context");
        if (context == "listar") {
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

        // if (hasError) {
        //     return false;
        // }

        axios.post('/admin/api/cliente', _data)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

    });

    $("#button-cliente-cancelar").on("click", function() {
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
    });

    // getClientes();

});