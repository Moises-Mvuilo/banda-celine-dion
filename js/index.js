//Validação de formulário e mensagem de sucesso ao enviar o formulário corretamente.


const form = document.getElementById("meuFormulario");
const mensagem = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede o envio automático do formulário

  // capturar valores
  const nome = document.getElementById("nome").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const data = document.getElementById("data").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // limpar mensagens antigas
  document.getElementById("erroNome").textContent = "";
  document.getElementById("erroSurname").textContent = "";
  document.getElementById("erroData").textContent = "";
  document.getElementById("erroEmail").textContent = "";
  document.getElementById("erroPhone").textContent = "";
  document.getElementById("erroMessage").textContent = "";
  document.getElementById("mensagemSucesso").textContent = "";

  let valido = true;

  // valida nome
  if (nome === "") {
    document.getElementById("erroNome").textContent =
      "Por favor, insira o seu nome.";
    valido = false;
  }

  // valida o apelido
  if (surname === "") {
    document.getElementById("erroSurname").textContent =
      "Por favor, insira o seu apelido.";
    valido = false;
  }

  // valida a data

  if (data === "") {
    document.getElementById("erroData").textContent =
      "Por favor, insira a sua data.";
    valido = false;
  }

  // valida email
  if (email === "") {
    document.getElementById("erroEmail").textContent = "O email é obrigatório.";
    valido = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("erroEmail").textContent = "Email inválido.";
    valido = false;
  }

  if (phone === "") {
    document.getElementById("erroPhone").textContent =
      "Por favor, insira o seu telefone.";
    valido = false;
  }

  // valida mensagem
  if (message.length < 10) {
    document.getElementById("erroMessage").textContent =
      "A mensagem deve ter pelo menos 10 caracteres.";
    valido = false;
  }

  // se estiver tudo certo
  if (valido) {
    document.getElementById("mensagemSucesso").textContent =
      "Formulário enviado com sucesso!";
    form.reset(); // limpa os campos
  }

  // Exibe a mensagem de sucesso
  mensagem.style.display = "block";

  // Limpa os campos do formulário
  form.reset();

// Exibe a mensagem de sucesso
mensagem.style.display = "block";

// Limpa os campos do formulário
form.reset();

// Oculta a mensagem após 3 segundos
setTimeout(() => {
  mensagem.style.display = "none";
}, 3000);
});
