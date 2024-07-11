// Quando o documento estiver pronto, inicialize o carrossel de imagens
$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true // Define o carrossel para autoplay (troca automática de imagens)
    });
});

// Aplica a máscara no campo de telefone
$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DD) 12345-6789' // Define o placeholder da máscara
});

// Aplica a máscara no campo de CPF
$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00' // Define o placeholder da máscara
});

// Aplica a máscara no campo de CEP
$('#cep').mask('00000-000', {
    placeholder: '01234-567' // Define o placeholder da máscara
});

// Valida o formulário
$('form').validate({
    rules: {
        nome: {
            required: true // Campo nome é obrigatório
        },
        email: {
            required: true, // Campo email é obrigatório
            email: true // O valor deve ser um email válido
        },
        telefone: {
            required: true // Campo telefone é obrigatório
        },
        endereco: {
            required: true // Campo endereço é obrigatório
        },
        cep: {
            required: true // Campo CEP é obrigatório
        },
        cpf: {
            required: true // Campo CPF é obrigatório
        },
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!"); // Mensagem de sucesso
        form.reset(); // Reseta o formulário
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!"); // Mensagem de erro
    }
});