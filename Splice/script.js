const $ul = document.querySelector(".ul")
console.log($ul.innerHTML)

const fruits = ["Banana", "Uva", "Mexirica", "Melancia"]
fruits.splice(0,1)

fruits.map((fruit)=>{
    const $li = document.createElement("li")
    $li.innerHTML = fruit
    $ul.appendChild($li)

    
})
