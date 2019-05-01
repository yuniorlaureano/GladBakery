var ClientModule = (function(){


    return {

    };
}());

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

    $("#button-cliente-gardar").on("click", function(){
        var data = {
            nombre: { val: $("#input-cliente-nombre").val(), valid: function(){ return this.val != "" && this.val != undefined}, validationspan: 'validation-span-nombre'},
            apellido: { val: $("#input-cliente-apellido").val(), valid: function(){ return this.val != "" && this.val != undefined}, validationspan: 'validation-span-apellido'},
            edad: { val: $("#input-cliente-edad").val(), valid: function(){ return this.val != "" && this.val != undefined}, validationspan: 'validation-span-edad'},
            email: { val: $("#input-cliente-email").val(), valid: function(){ return this.val != "" && this.val != undefined}, validationspan: 'validation-span-email'},
            clave: { val: $("#input-cliente-clave").val(), valid: function(){ return this.val != "" && this.val != undefined}, validationspan: 'validation-span-clave'},
            retry: { val: $("#input-cliente-retry").val(), valid: function(retry){ return (this.val != "" && this.val != undefined) && this.val == retry}, validationspan: 'validation-span-retry'},
            telefono: { val: $("#input-cliente-telefono").val(), valid: function(){ return this.val != "" && this.val != undefined}, validationspan: 'validation-span-telefono'},
            sector: { val: $("#input-cliente-sector").val(), valid: function(){ return this.val != "" && this.val != undefined}, validationspan: 'validation-span-sector'},
            calle: { val: $("#input-cliente-calle").val(), valid: function(){ return this.val != "" && this.val != undefined}, validationspan: 'validation-span-calle'},
            numero: { val: { val: $("#input-cliente-numero").val(), valid: function(){ return this.val != "" && this.val != undefined}, validationspan: 'validation-span-numero'},
            referencia: { val:$("#input-cliente-referencia").val(), valid: function(){ return this.val != "" && this.val != undefined}, validationspan: 'validation-span-referencia'}
        };

        var hasError = false;
        var _data = Object.keys(data).filter(function(item){
            if(!data[item].valid(data.clave)){
                $("." + data[item].validationspan).show();
                hasError = true;
            } else {
                $("." + data[item].validationspan).hide();
            }
        });

        if(hasError)
            return;
    });

    $("#button-cliente-cancelar").on("click", function(){
        $("#input-cliente-nombre").val('da');
        $("#input-cliente-apellido").val('a');
        $("#input-cliente-edad").val('asdf');
        $("#input-cliente-email").val('ad');
        $("#input-cliente-clave").val('fads');
        $("#input-cliente-retry").val('fads');
        $("#input-cliente-telefono").val('af');
        $("#input-cliente-sector").val('asdf');
        $("#input-cliente-calle").val('as');
        $("#input-cliente-numero").val('34');
        $("#input-cliente-referencia").val('af');
    });
});

