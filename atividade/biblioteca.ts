import { materialDeLeitura } from "./materialDeLeitura";


class Livro implements materialDeLeitura {
    titulo: string;
    autor: string;
    numeroPagina: number;

    constructor(titulo: string, autor: string, numeroPagina: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPagina = numeroPagina;
    }

    exibirDetalhes(): void {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Número de páginas: ${this.numeroPagina}`);
    }
}

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
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.edicao}`);
    }
}

class Artigo implements materialDeLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhes(): void {
        console.log(`Artigo: ${this.titulo}, Autor: ${this.autor}, Data de publicação: ${this.dataPublicacao.toDateString()}`);
    }
}

const livro = new Livro("Quarto de Despejo", "Carolina Maria de Jesus", 200);
const revista = new Revista("National Geographic", "John Doe", 150);
const artigo = new Artigo("Aprenda Typescript com leveza", "Natalia", new Date(2024, 6, 13));

livro.exibirDetalhes();
revista.exibirDetalhes();
artigo.exibirDetalhes();
