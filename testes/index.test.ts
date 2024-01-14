import { ditongos, pluralizar, singularizar } from "..";

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

    describe('Pluralizar', () => {
        it('pluralizar, vazio', () => {
            expect(pluralizar("")).toBe("");
        });

        it('pluralizar, trivial: "s" adicionado ao final da palavra.', () => {
            expect(pluralizar("artigo")).toBe("artigos");
        });

        it('pluralizar, palavras terminadas em "x".', () => {
            expect(pluralizar("clímax")).toBe("clímax");
            expect(pluralizar("tórax")).toBe("tórax");
        });

        it('pluralizar, palavras terminadas em "m".', () => {
            expect(pluralizar("álbum")).toBe("álbuns");
            expect(pluralizar("jovem")).toBe("jovens");
            expect(pluralizar("som")).toBe("sons");
            expect(pluralizar("homem")).toBe("homens");
        });

        it('pluralizar, palavras terminadas em "r" ou "z".', () => {
            expect(pluralizar("açúcar")).toBe("açúcares");
            expect(pluralizar("algoz")).toBe("algozes");
            expect(pluralizar("catéter")).toBe("catéteres");
            // expect(pluralizar("raiz")).toBe("raízes");
        });

        it('pluralizar, palavras terminadas em "l".', () => {
            expect(pluralizar("varal")).toBe("varais");
            expect(pluralizar("fuzil")).toBe("fuzis");
            expect(pluralizar("canil")).toBe("canis");
            expect(pluralizar("aluguel")).toBe("aluguéis");
            expect(pluralizar("lençol")).toBe("lençóis");
        });
    });

    describe('Singularizar', () => {
        it('singularizar, vazio', () => {
            expect(singularizar("")).toBe("");
        });

        it('singularizar, trivial: "s" adicionado ao final da palavra.', () => {
            expect(singularizar("artigos")).toBe("artigo");
        });

        it('singularizar, palavras terminadas em "x".', () => {
            expect(singularizar("clímax")).toBe("clímax");
            expect(singularizar("tórax")).toBe("tórax");
        });

        it('singularizar, palavras terminadas em "m".', () => {
            expect(singularizar("álbuns")).toBe("álbum");
            expect(singularizar("jovens")).toBe("jovem");
            expect(singularizar("sons")).toBe("som");
            expect(singularizar("homens")).toBe("homem");
        });

        it('singularizar, palavras terminadas em "r" ou "z".', () => {
            expect(singularizar("açúcares")).toBe("açúcar");
            expect(singularizar("algozes")).toBe("algoz");
            expect(singularizar("catéteres")).toBe("catéter");
            // expect(singularizar("raiz")).toBe("raízes");
        });

        // it('singularizar, palavras terminadas em "is".', () => {
        //     expect(singularizar("varal")).toBe("varais");
        //     expect(singularizar("fuzil")).toBe("fuzis");
        //     expect(singularizar("canil")).toBe("canis");
        //     expect(singularizar("aluguel")).toBe("aluguéis");
        //     expect(singularizar("lençol")).toBe("lençóis");
        // });
    });
});