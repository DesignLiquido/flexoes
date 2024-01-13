const vogais = ['a', 'e', 'i', 'o', 'u'];
const vogaisAcentuadas = ['ã', 'á', 'à', 'é', 'ê', 'í', 'ó', 'ô', 'u'];
const todasAsVogais = vogais.concat(vogaisAcentuadas);

/**
 * Dada uma palavra, devolve sua versão no plural.
 * @param palavra A palavra em português.
 * @returns {string} A palavra no plural.
 */
export function pluralizar(palavra: string): string {
    const palavraMinuscula = palavra.toLocaleLowerCase('pt');
    // O plural de palavras terminadas em 'x' é a própria palavra.
    if (palavraMinuscula.endsWith('x')) {
        return palavraMinuscula;
    }
    
    const comprimento = palavraMinuscula.length

    switch(palavraMinuscula.substring(comprimento - 2)) {
        case 'al':
            return palavraMinuscula.substring(0, comprimento - 1) + 'is';
        case 'el':
            return palavraMinuscula.substring(0, comprimento - 2) + 'éis';
        case 'il':
            return palavraMinuscula.substring(0, comprimento - 1) + 's';
        case 'ol':
            return palavraMinuscula.substring(0, comprimento - 2) + 'óis';
        case 'ul':
            return palavraMinuscula.substring(0, comprimento - 2) + 'uis';
    }

    if (palavraMinuscula.endsWith('m')) {
        return palavraMinuscula.substring(0, comprimento - 1) + 'ns';
    }

    if (palavraMinuscula.endsWith('r') || palavraMinuscula.endsWith('z')) {
        return palavraMinuscula.substring(0, comprimento) + 'es';
    }

    return palavra + 's';
}

/**
 * Dada uma palavra, localiza todos os seus ditongos.
 * Um ditongo é uma combinação de duas vogais adjacentes.
 * @param palavra A palavra em português.
 */
export function ditongos(palavra: string) {
    const ditongos: string[] = [];
    let acumulador = "";
    for (const caracter of palavra.toLocaleLowerCase('pt')) {
        if (!todasAsVogais.includes(caracter)) {
            acumulador = "";
            continue;
        }

        acumulador += caracter;
        if (acumulador.length > 1) {
            ditongos.push(acumulador);
            acumulador = "";
        }
    }

    return ditongos;
}
