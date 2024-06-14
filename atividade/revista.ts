import { Artigo } from "./Artigo";
import { materialDeLeitura } from "./materialDeLeitura";
import { Livro } from "./biblioteca";

class Revista implements materialDeLeitura {
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }
    exibirDetalhes(): void {
        console.log(`livro: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.edicao}`);
    }

    const livro = new Livro("Quarto de Despejo", "Carolina Maria de Jesus", 200);
    const revista = new Revista("Nacional Geographic", "John Doe", 150);
    const artigo = new Artigo("Aprenda Typescript com leveza", "Natalia", new Date(2024, 6, 13));

    livro; exibirDetalhes();
    revista; exibirDetalhes();
    artigo; exibirDetalhes();
}
