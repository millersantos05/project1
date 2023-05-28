let btnDarkTheme = document.getElementById('switch-shadow')
let icon = document.getElementById('icon-sun')

btnDarkTheme.onclick = () => {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "img/moon.png"
    } else {
        icon.src = "img/sun.png"
    }
}

function showDiv() {
    showResultado = document.getElementById('resultado')
    if (showResultado.style.display === 'none') {
        showResultado.style.display = 'flex'
    } else{
        showResultado.style.display = 'flex'
    }

    scrollToResult = document.getElementById('btn-calcular')
    scrollToResult.scrollIntoView()
}

function calcTMB(){
    let gender = document.querySelector('input[name="radio-mw"]:checked').value
    let age = document.querySelector('input[name="age"]').value
    let height = document.querySelector('input[name="height"]').value
    let kg = document.querySelector('input[name="kg"]').value
    if (age === '' || height === '' || kg === '') {
        alert('Por favor, preencha os dados corretamente')
    } else if (gender === 'male') {
        resultTMB = (13.75 * kg) + (5 * height) - (6.76 * age) + 66.5
    } else if (gender === 'female') {
        resultTMB = (9.56 * kg) + (1.85 * height) - (4.68 * age) + 665
    } 

    return resultTMB
}

function fatorAtividade() {
    let atividadeDiaria = document.querySelector('input[name="radio-ad"]:checked').value
    if (atividadeDiaria === 'a-leve') {
        resultado = resultTMB * 1.2
    } else if (atividadeDiaria === 'a-moderada') {
        resultado = resultTMB * 1.375
    } else if (atividadeDiaria === 'a-elevada') {
        resultado = resultTMB * 1.55
    } else if (atividadeDiaria === 'a-intensa') {
        resultado = resultTMB * 1.725
    }
    
    document.getElementById('r-perder-peso').innerHTML = (resultado - 480).toFixed(0) + ` kcal`
    document.getElementById('r-manter-peso').innerHTML = (resultado).toFixed(0) + ` kcal`
    document.getElementById('r-ganhar-peso').innerHTML = (resultado + 520).toFixed(0) + ` kcal`
}


let eventFunctions = document.getElementById('btn-calcular')

eventFunctions.addEventListener('click', () => {
    calcTMB()
    fatorAtividade()
    showDiv()
})


/**/

