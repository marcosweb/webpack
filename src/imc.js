
export const calcularImc = (peso, altura) => {
    return peso / altura ** 2;
}

export const diagnostico = (imc) => {
    if (imc < 18.5) {
        return { msg: 'Peso Baixo', cor: 'success' }
    }
    else if (imc < 24.9) {
        return { msg: 'Peso Normal ou Adequado', cor: 'success' }
    }
    else if (imc < 29.9) {
        return { msg: 'Sobrepeso', cor: 'warning' }
    }
    else if (imc < 34.9) {
        return { msg: 'Obesidade Grau 1', cor: 'danger' }
    }
    else if (imc < 39.9) {
        return { msg: 'Obesidade Grau 2', cor: 'danger' }
    }
    return { msg: 'Obesidade Grau 3 ou Mórbida', cor: 'danger' }
}
export default { calcularImc, diagnostico }