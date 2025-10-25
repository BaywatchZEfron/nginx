"use strict";
// Formulario 1: Crear tu sable de luz   
// Seleccionar todos los elementos de entrada
$("#lightsaber-form input, #lightsaber-form select").each(function () {
    console.log("Elemento de entrada:", this);
});
// Seleccionar el color del sable (input type="text")
$("#saber-color").on("input", function () {
    console.log("Color seleccionado:", $(this).val());
});
// Seleccionar el archivo de imagen (input type="file")
$("#saber-image").on("change", function () {
    var _a, _b, _c;
    const fileInput = this;
    const fileName = (_c = (_b = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : "Ningún archivo seleccionado";
    console.log("Archivo seleccionado:", fileName);
});
// Botón de submit
$("#lightsaber-form").on("submit", function (event) {
    event.preventDefault();
    console.log("Sable guardado!");
});
// Botón de reset
$("#lightsaber-form").on("reset", function () {
    console.log("Formulario restablecido");
});
// Formulario 2: Elegir tu rol en la misión
// Seleccionar radio buttons (afiliación a la Fuerza)
$('input[name="force-side"]').on("change", function () {
    const selected = $('input[name="force-side"]:checked').val();
    console.log("Afiliación a la Fuerza:", selected);
});
// Seleccionar checkbox (roles de la misión)
$('input[name="role"]').on("change", function () {
    const selectedRoles = [];
    $('input[name="role"]:checked').each(function () {
        selectedRoles.push($(this).val());
    });
    console.log("Rol seleccionado:", selectedRoles.join(", ") || "Ninguno");
});
// Botón para asignar rol
$("#assign-role").on("click", function () {
    const selectedRoles = [];
    $('input[name="role"]:checked').each(function () {
        selectedRoles.push($(this).val());
    });
    console.log("Roles asignados:", selectedRoles.join(", ") || "Ninguno");
});
// Formulario 3: Informe de estado
// Seleccionar textarea (contenido del informe)
$("#report-content").on("input", function () {
    console.log("Informe actualizado:", $(this).val());
});
// Seleccionar checkbox de entrenamiento completado
$("#completed-training").on("change", function () {
    const status = $(this).is(":checked")
        ? "Entrenamiento completado"
        : "Entrenamiento pendiente";
    console.log(status);
});
// Botón de submit del informe 
$("#status-report-form").on("submit", function (event) {
    event.preventDefault();
    console.log("Informe enviado");
});
//# sourceMappingURL=main.js.map