// --- 1. Passa por aqui (com toggle) ---
const h2PassaRato = document.getElementById("passaRato");

h2PassaRato.addEventListener("click", function() {
  // alterna uma classe CSS
  h2PassaRato.classList.toggle("ativo");

  // muda o texto conforme o estado
  if (h2PassaRato.classList.contains("ativo")) {
    h2PassaRato.textContent = "Obrigada por passares! 😄";
  } else {
    h2PassaRato.textContent = "1. Passa por aqui!";
  }
});



let contador = 33;

/*
// --- 2. Pinta-me! ---

function pintarVermelho() {
  document.getElementById("textoColorido").style.color = "red";
}

function pintarVerde() {
  document.getElementById("textoColorido").style.color = "green";
}

function pintarAzul() {
  document.getElementById("textoColorido").style.color = "blue";
}
*/

// --- 2. Pinta-me! (versão com querySelectorAll e data-color) ---
document.querySelectorAll("button.color").forEach((button) => {
  button.addEventListener("click", () => {
    const cor = button.dataset.color;
    const texto = document.getElementById("textoColorido");

    texto.style.color = cor;
    texto.textContent = `Adoro a cor ${cor}! 🌈`;
  });
});


// --- 3. Experimenta escrever... ---
const inputTexto = document.getElementById("inputTexto");
const cores = ["lightcoral", "lightyellow", "lightblue", "lightgreen"];

let indiceCor = 0;

inputTexto.addEventListener("keydown", function() {
  indiceCor = (indiceCor + 1) % cores.length;
  inputTexto.style.backgroundColor = cores[indiceCor];
});

/*
// --- 4. Escolha uma cor em inglês --- 
function submeterCor() {
  const cor = document.getElementById("corEscolhida").value.toLowerCase();
  document.body.style.backgroundColor = cor;
}
*/
/*
// --- 4. Escolha uma cor em inglês --- 
document.addEventListener('DOMContentLoaded', () => {
  // --- 4. Escolha uma cor em inglês ---
  submeterCor = () => {
    const cor = document.getElementById("corEscolhida").value.toLowerCase();
    document.body.style.backgroundColor = cor;
  };
});
*/

// --- 4. Escolha uma cor em inglês (this)--- 
document.querySelector('#cor').onchange = function() {
  document.body.style.backgroundColor = this.value;
};

// --- 5. Conta ---


function incrementarContador() {
  contador++;
  document.getElementById("contador").textContent = contador;
}

// --- 6. Formulário... ---
document.querySelector('form').onsubmit = (e) => {
  e.preventDefault(); // impede o reload da página

  const nome = document.querySelector('#nome').value;
  const idade = document.querySelector('#idade').value;
  const msg = document.querySelector('#mensagem');

  msg.textContent = `Olá, o ${nome} tem ${idade}!`;

  // adiciona listener apenas depois de mostrar a mensagem
  setTimeout(() => {
    document.addEventListener('click', limparMensagem);
  }, 0);
};

function limparMensagem() {
  document.querySelector('#mensagem').textContent = '';
  document.querySelector('#nome').value = '';
  document.querySelector('#idade').value = '';

  // remove o listener para não continuar ativo
  document.removeEventListener('click', limparMensagem);
}


// --- Exercício 7: contador automático ---
let counter = 0;
let intervalo = null;

function iniciarContador() {
  if (intervalo === null) { // garante que só começa uma vez
    intervalo = setInterval(() => {
      counter++;
      document.querySelector('#counter').textContent = counter;
    }, 1000); // incrementa a cada 1 segundo
  }
}

// Inicia o contador assim que o utilizador em qualquer elemento da página
document.addEventListener('input', iniciarContador);
document.addEventListener('click', iniciarContador);