const tableBody = document.querySelector('tbody');
tableBody.addEventListener('click', (e) => {
  const bookId = e.target.getAttribute('data-book-id');
  if (bookId) {
    const acao = e.target.innerText;
    if (acao === 'Remover') {
      biblioteca.removerLivro(bookId);
    } else { // muda status
      biblioteca.livros[bookId].trocarStatus();
    }
  }
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputTitulo = document.querySelector('#titulo');
  const inputAutor = document.querySelector('#autor');
  const inputPaginas = document.querySelector('#paginas');
  const inputLido = document.querySelector('#lido');
  const novoLivro = new Livro(inputTitulo.value, inputAutor.value, inputPaginas.value, inputLido.checked);
  biblioteca.adicionarLivro(novoLivro);
});


class Livro {
  constructor(titulo, autor, paginas, lido) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }
  trocarStatus() {
    this.lido = !this.lido;
    atualizaTabela();
  }
}

const biblioteca = (() => {
  let livros = [];

  const livroExiste = (titulo) => {
    for (const livro of livros) {
      if (livro.titulo === titulo) {
        return true;
      }
    }
    return false;
  };

  const removerLivro = (bookIndex) => {
    livros.splice(bookIndex, 1);
    atualizaTabela();
  };

  const adicionarLivro = (novoLivro => {
    if (livroExiste(novoLivro.titulo)) {
      return;
    }
    livros.push(novoLivro);
    atualizaTabela();
  });

  return {
    livros,
    removerLivro,
    adicionarLivro,
  };
})();

const livro = new Livro("The Hobbit", "J.R.R. Tolkien", 295, false);
biblioteca.adicionarLivro(livro);

function atualizaTabela() {
  tableBody.innerHTML = '';
  biblioteca.livros.forEach(livro => {
    const livroHTML = `
    <tr>
      <td>${livro.titulo}</td>
      <td>${livro.autor}</td>
      <td>${livro.paginas}</td>
      <td><a href="#" data-book-id="${biblioteca.livros.indexOf(livro)}">${livro.lido ? "Sim" : "Não"}</a></td>
      <td><a href="#" data-book-id="${biblioteca.livros.indexOf(livro)}">Remover</a></td>
    </tr>
    `;

    tableBody.insertAdjacentHTML("beforeend", livroHTML);
  });
}
