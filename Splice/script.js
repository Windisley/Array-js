const container = document.querySelector(".container")

const $ul = document.querySelector(".ul")
console.log($ul.innerHTML)

const fruits1 = ["Banana", "Uva", "Mexirica", "Melancia"]
fruits1.splice(0,1)

fruits1.map((fruit)=>{
    const $li = document.createElement("li")
    $li.innerHTML = fruit
    $ul.appendChild($li)
    
    
})

const fruits2 = ["Banana", "Uva", "Mexirica", "Melancia"]
fruits2.splice(0,1, "Laranja")

const $ul2 = document.createElement("ul")
container.appendChild($ul2)
fruits2.map((fruit)=>{
    
    const $li = document.createElement("li")

    $li.style = "font-size: 1.5rem; font-family: sans-serif; letter-spacing: 1px; color: blue;"
    $li.innerHTML = fruit
    $ul2.appendChild($li)
    
    
})



