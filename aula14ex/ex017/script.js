function gerar() {
    let num = document.getElementById('numero')
    let tabuada = document.getElementById('selectabuada')
    if (numero.value.length == 0) {
        alert(' 🚫 Por favor, digite um numero 🚫')
    } else {
        let numero = Number(num.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let iten = document.createElement('option')
            iten.text = `${numero} x ${contador} = ${numero*contador}`
            tabuada.appendChild(iten)
            contador++
        }
    }
     
}