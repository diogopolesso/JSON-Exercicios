//Como Filtrar uma Lista:

const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento (clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && 
        !cliente.endereco.hasOwnProperty("complemento")
        );
    });
};

const filtrados = filtrarApartamentosSemComplemento(clientes);

console.log(filtrados);

/*  se cliente.endereco tem uma propriedade,
utilizando um método de objeto chamado hasOwnProperty().

Essa função hasOwnProperty vai verificar se o endereço do cliente tem complemento,
por isso, seu parâmetro é "complemento".

Mas, lembre-se que queremos o nome das pessoas que não tem um complemento preenchido.
Por isso, acrescentamos um sinal de exclamação ! no começo da linha
para contrariar a expressão contendo hasOwnProperty. */