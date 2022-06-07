const nome = "Admin";
let nome2 = "";
let pessoaDefault = {
  nome: "Admin",
  idade: "22",
  trabalho: "Administrador",
};

let nomes = ["Admin", "Nome1", "Nome2"];
let pessoas = [
  {
    nome: "Admin",
    idade: "22",
    trabalho: "Administrador",
  },
  {
    nome: "Nome1",
    idade: "22",
    trabalho: "Professor",
  },
  {
    nome: "Nome3",
    idade: "22",
    trabalho: "Desenvolvedor",
  },
];

function alterarnome() {
  nome2 = "Jaspion";
  console.log("Valor alterado:");
  console.log(nome2);
}

function recebeEalteranome(novoNome) {
  nome2 = novoNome;
  console.log("Valor alterado recebendo um nome:");
  console.log(nome2);
}

function imprimirPessoa(pessoa) {
  console.log("Nome:");
  console.log(pessoa.nome);

  console.log("Idade:");
  console.log(pessoa.idade);

  console.log("Trabalho:");
  console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
  pessoas.push(pessoa);
}

function imprimirPessoas() {
  console.log("---IMPRIMIR PESSOAS---");
  pessoas.forEach((item) => {
    console.log("Nome");
    console.log(item.nome);

    console.log("Idade:");
    console.log(item.idade);

    console.log("Trabalho:");
    console.log(item.trabalho);
  });
}

imprimirPessoas();

adicionarPessoa({
  nome: "Pessoa",
  idade: "22",
  trabalho: "Autonoma",
});

imprimirPessoas();
