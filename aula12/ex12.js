// dar 'Bom dia', 'Boa tarde', 'Boa noite'
let agora = new Date()
let diaSemana = agora.getDay() // hora atual DO >>SISTEMA QUE TA RODANDO O SCRIPT,  se tiver rodando em servidor, vai ser a hora do servidor<<
switch(diaSemana) {
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda. Ótima semana! 🌸⭐️')
        break
    case 2:
        console.log('Hoje é Terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta. Ótimo final de semana! 🌈🎉')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
}
// console.log(`Agora são ${hora}hs `)
// if  (hora < 12) {
//     console.log('Bom Dia! 🌈☀️')
// } else if (hora < 18) {
//     console.log('Boa tarde! 💫🔥')
// } else {
//     console.log('Boa noite! ☁️🌙')
// } 