export const calcularIMC = (altura, peso) => {
    return peso / altura ** 2;
}

export const diagnostico = (imc) => {
    if (!imc || typeof imc != 'number') {
        return '';
    }

    if (imc < 18.5)
        return {
            msg: 'Peso baixo',
            type: 'warning'
        }
    else if (imc < 24.9)
        return {
            msg: 'peso normal ou adequado',
            type: 'success'
        }
    else if (imc < 29.9)
        return {
            msg: 'sobrepeso',
            type: 'warning'
        }
    else if (imc < 34.9)
        return {
            msg: 'obesidade grau 1',
            type: 'danger'
        }
    else if (imc < 39.9)
        return {
            msg: 'obesidade grau 2',
            type: 'danger'
        }

    return {
        msg: 'obesidade grau 3 ou mórbida',
        type: 'danger'
    }
}


export default calcularIMC