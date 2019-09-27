var contatos = [];

function salvarContato(event){
    // Inibe a recarga da página
    event.preventDefault();

    //var sel = document.querySelector;

    let nome = $('#nome').val();
    let telefone = $('#telefone').val();
    let email = $('#email').val();
    let dataNascimento = $('#dataNascimento').val();

    let contato = {nome, telefone, email, dataNascimento};

    //Adiciona contato no nosso BD (no final do vetor)
    contatos.push(contato);

    console.log(contatos)
}