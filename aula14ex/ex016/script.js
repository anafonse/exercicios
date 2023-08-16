function contar() {
    let comeco = document.getElementById('inicio')
    let fim = document.getElementById('final')
    let passo = document.getElementById('lasso')
    let resultado = document.getElementById('resultado')

    if (comeco.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Verifique os dados inseridos e tente novamente 🤍')
    } else {        
        let começo = Number(comeco.value)
        let final = Number(fim.value)
        let laço = Number(passo.value)
         if (começo < final) {
            for (let contador = começo; contador <= final; contador += laço){
            resultado.innerHTML += ` ${contador} `
        } 
         } else {
            for (let contador = começo; contador >= final; contador -= laço){
                resultado.innerHTML += ` ${contador} `
            }
         } resultado.innerHTML += ` 🤍`
    }
}