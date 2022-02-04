function calcular(n1, n2) {
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch (selector) {
        case '+':
            calculo = Math.round((n1 + n2))
            if (Number.isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = `Insira um número válido!`
            } else {
                document.getElementById("resultado").innerHTML = `o resultado é ${n1} + ${n2} = ${calculo}`
            }
            break;
        case '-':
            calculo = Math.round((n1 - n2))
            if (Number.isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = `Insira um número válido!`
            } else {
                document.getElementById("resultado").innerHTML = `o resultado é ${n1} - ${n2} = ${calculo}`
            }
            break;
        case '*':
            calculo = Math.round((n1 * n2))
            if (Number.isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = `Insira um número válido!`
            } else {
                document.getElementById("resultado").innerHTML = `o resultado é ${n1} * ${n2} = ${calculo}`
            }
            break;
        case '/':
            calculo = Math.round((n1 / n2))
            if (Number.isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = `Insira um número válido!`
            } else {
                document.getElementById("resultado").innerHTML = `o resultado é ${n1} / ${n2} = ${calculo}`
            }
            break;
    
        default:
            break;
    }

}