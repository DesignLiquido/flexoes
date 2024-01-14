import { palavrasInvariaveis } from "./palavras-invariaveis";

const vogais = ['a', 'e', 'i', 'o', 'u'];
const vogaisAcentuadas = ['ã', 'á', 'à', 'é', 'ê', 'í', 'ó', 'ô', 'u'];
const todasAsVogais = vogais.concat(vogaisAcentuadas);
const palavrasFinalL = {
    al: { acrescentar: 'is', quantidadeCaracteres: 1 },
    el: { acrescentar: 'éis', quantidadeCaracteres: 2 },
    il: { acrescentar: 's', quantidadeCaracteres: 1 },
    ol: { acrescentar: 'óis', quantidadeCaracteres: 2 },
    ul: { acrescentar: 'uis', quantidadeCaracteres: 2 },
}

/**
 * Dada uma palavra, devolve sua versão no plural.
 * @param palavra A palavra em português.
 * @returns {string} A palavra no plural.
 */
export function pluralizar(palavra: string): string {
    if (!palavra) {
        return palavra;
    }

    const palavraMinuscula = palavra.toLocaleLowerCase('pt');
    // O plural de palavras terminadas em 'x' é a própria palavra.
    if (palavraMinuscula.endsWith('x') || palavrasInvariaveis.includes(palavraMinuscula)) {
        return palavraMinuscula;
    }
    
    const comprimento = palavraMinuscula.length

    const palavraFinalL = palavrasFinalL[palavraMinuscula.substring(comprimento - 2)]
    if (palavraFinalL) {
        return palavraMinuscula.substring(0, comprimento - palavraFinalL.quantidadeCaracteres) + palavraFinalL.acrescentar;
    }

    if (palavraMinuscula.endsWith('m')) {
        return palavraMinuscula.substring(0, comprimento - 1) + 'ns';
    }

    if (palavraMinuscula.endsWith('r') || palavraMinuscula.endsWith('z')) {
        return palavraMinuscula.substring(0, comprimento) + 'es';
    }

    return palavra + 's';
}

export function singularizar(palavra: string) {
    if (!palavra) {
        return palavra;
    }

    const palavraMinuscula = palavra.toLocaleLowerCase('pt');

    if (palavraMinuscula.endsWith('x') || palavrasInvariaveis.includes(palavraMinuscula)) {
        return palavraMinuscula;
    }

    const comprimento = palavraMinuscula.length

    if (palavraMinuscula.endsWith('ns')) {
        return palavraMinuscula.substring(0, comprimento - 2) + 'm';
    }

    if (palavraMinuscula.endsWith('es')) {
        return palavraMinuscula.substring(0, comprimento - 2);
    }

    if (palavraMinuscula.endsWith('s')) {
        return palavraMinuscula.substring(0, comprimento - 1)
    }
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
