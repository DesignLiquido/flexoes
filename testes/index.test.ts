import { ditongos } from "..";

describe('Casos de Sucesso', () => {
    describe('Ditongos', () => {
        it('ditongos, palavra sem ditongos', () => {
            expect(ditongos("artigo")).toStrictEqual([]);
        });
    
        it('ditongos, palavra com 1 ditongo', () => {
            expect(ditongos("mãe")).toStrictEqual(["ãe"]);
        });
    
        it('ditongos, palavra com 2 ditongos', () => {
            expect(ditongos("roupão")).toStrictEqual(["ou", "ão"]);
        });
    });
});