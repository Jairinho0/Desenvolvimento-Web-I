const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");

form.addEventListener('submit', function (event) {
    event.preventDefault();


    const formData = {
        nome: document.getElementById("name").value = "",
        email: document.getElementById("email").value = "",
        telefone: document.getElementById("phone").value = "",
        mensagem: document.getElementById("message").value = "",
    };

    console.log("Dados:", formData);

    fetch("http://localhost:3333/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((data) => {
        console.log("Sucesso:", data);
        alert("Mensagem enviada com sucesso!");
        form.reset(); 
    })
    .catch((error) => {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao enviar a mensagem.");
    })
});
