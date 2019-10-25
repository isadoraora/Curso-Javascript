var horaAgora = new Date()
var hora = horaAgora.getHours()
var minutoAgora = new Date()
var minuto = minutoAgora.getMinutes()
console.log(`Agora são exatamnete ${hora} horas e ${minuto}!`)
if (hora < 12) {
    console.log("Bom dia!")
} else if (hora <= 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite!")
}