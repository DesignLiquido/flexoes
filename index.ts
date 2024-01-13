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
    if (palavraMinuscula.endsWith('m')) {
        return palavraMinuscula.split('m')[0] + 'ns';
    }

    if (palavraMinuscula.endsWith('r') || palavraMinuscula.endsWith('z')) {
        return palavraMinuscula + 'es';
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
