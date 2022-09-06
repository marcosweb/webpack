
export const calcularImc = (peso, altura) => {
    return peso / altura ** 2;
}

export const diagnostico = (imc) => {
    if (imc < 18.5) {
        return 'Peso Baixo'
    } 
    else if (imc < 24.9) {
        return 'Peso Normal ou Adequado'
    }
    else if (imc < 29.9) {
        return 'Sobrepeso'
    }
    else if (imc < 34.9) {
        return 'Obesidade Grau 1'
    }
    else if (imc < 39.9) {
        return 'Obesidade Grau 2'
    }
    return 'Obesidade Grau 3 ou Mórbida'
} 
export default { calcularImc, diagnostico }