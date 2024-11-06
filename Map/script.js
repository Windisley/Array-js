const Container = document.querySelector(".container")

const frutas = ["Maça", "Banana", "Morango", "Manga", "Abacate"]

console.log(frutas)


frutas.map((fruta)=>{
    const $p = document.createElement("p")
    $p.innerHTML = fruta
    Container.appendChild($p)
})


