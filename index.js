const validateCpfInput = document.querySelector("#validate-cpf");

const generateCpfButton = document.querySelector("#generate-button");
const validateCpfButton = document.querySelector("#validate-button");

const generateMessage = document.querySelector("#generate-message");
const validateMessage = document.querySelector("#validate-message");


generateCpfButton.addEventListener("click", () => {;
    const cpf = Cpf.generate();
    generateMessage.innerHTML = `cpf gerado: ${cpf}`;
})

validateCpfButton.addEventListener("click", () => {
    const message = getValidate();
    validateMessage.innerHTML = message;
})

function getValidate(){
    const cpf = validateCpfInput.value;
    if (Cpf.validate(cpf)) return "CPF válido";
    return "CPF inválido";
}


