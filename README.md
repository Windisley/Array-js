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


Manipulação de Arrays com splice() e Renderização Dinâmica no DOM
Este projeto demonstra o uso do método splice() para manipular arrays em JavaScript e exibir resultados no DOM, com listas <ul> e <li> que representam diferentes operações de remoção e substituição em arrays.

![Splice](https://github.com/user-attachments/assets/5169573b-5bf7-411e-b892-628576f7a8f6)

Estrutura e Funcionalidades
Remoção de Elemento
Utiliza splice() para remover o primeiro item do array fruits1. O array atualizado é exibido em uma lista HTML (<ul>) existente.

javascript
Copiar código
const fruits1 = ["Banana", "Uva", "Mexirica", "Melancia"];
fruits1.splice(0, 1); // Remove "Banana"
Substituição de Elemento
Com splice(), substituímos o primeiro item de fruits2 por "Laranja". Essa lista é exibida em uma nova <ul>, criada dinamicamente e estilizada com CSS inline.

javascript
Copiar código
const fruits2 = ["Banana", "Uva", "Mexirica", "Melancia"];
fruits2.splice(0, 1, "Laranja"); // Substitui "Banana" por "Laranja"
Renderização Dinâmica no DOM
Cada array é mapeado para gerar elementos <li> e adicionar ao DOM, criando duas listas: uma lista com um item removido e outra com um item substituído, ambas exibidas no contêiner .container.

Funcionamento do splice()
Sintaxe: array.splice(index, deleteCount, newItem1, ...)
index: Posição para alteração.
deleteCount: Número de itens a remover.
newItem: (Opcional) Itens para adicionar na posição.
Exemplo:

fruits1.splice(0, 1) remove "Banana".
fruits2.splice(0, 1, "Laranja") remove "Banana" e adiciona "Laranja".
Esse projeto ilustra a eficiência do splice() em manipular arrays e a renderização dinâmica no DOM para atualizações em tempo real.

 -----------------------------

 
