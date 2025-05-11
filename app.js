//Algoritmo:
// Datos de entrada: numero al que le quiero calcular el porcentaje
// Porcentaje que deseo calcular
// Datos de salida: Porcentaje del numero ingresado
// Procesos: Calcular el porcentaje del numero ingresado
// mostrar el porcentaje
// preguntar si desea calcular otro numero//

const calcularPorcentaje = (numero, porcentaje) => {
    let resultado = (numero * porcentaje) / 100
    return resultado
}

document.getElementById("form")
.addEventListener("submit", function(event) {
    event.preventDefault()
    let numero = parseFloat(document.getElementById("numero").value)
    let porcentaje = parseFloat(document.getElementById("porcentaje").value)
    let resultado = calcularPorcentaje(numero, porcentaje)
    let mensaje = `El ${porcentaje}% de ${numero} es ${resultado}`
    document.getElementById("resultado").value = mensaje
})

const limpiarFormulario = () => {
    document.getElementById("form").reset()
    document.getElementById("resultado").value= ""
}