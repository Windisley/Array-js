# Exibição Dinâmica de Frutas em HTML Com o Método Map

Este projeto utiliza JavaScript para gerar e exibir uma lista de frutas em um elemento HTML específico da página. Cada fruta será inserida como um novo parágrafo dentro do contêiner com a classe .container.

![Map](https://github.com/user-attachments/assets/0629d461-1ed2-445a-b88a-452660d7c28b)

## Descrição do Código

O código JavaScript seleciona um elemento HTML com a classe `.container`, cria parágrafos dinamicamente e insere o nome de cada fruta contida em um array chamado `frutas`. O objetivo é exibir esses nomes na página de forma organizada e automatizada.

### Estrutura do Código

1. **Seleção do Contêiner no DOM**:
   javascript
   const Container = document.querySelector(".container");

 ### Este Codigo Esta na pasta Map

O método map() é usado para iterar sobre todos os elementos de um array, aplicando uma função específica a cada item e retornando um novo array com os resultados.
Uso no Código
No código fornecido, o map() está sendo utilizado para percorrer o array frutas e criar um elemento de parágrafo (<p>) para cada item do array. Em vez de criar um novo array, o map() aqui serve para realizar uma operação em cada elemento sem necessariamente usar seu retorno.

 -----------------------------

 
