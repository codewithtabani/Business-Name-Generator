
let Adjectives,Shop_name,Another_word


let random = Math.random()
if (random < 0.33) {
    Adjectives = "Crazy"
}
else if (random >= 0.33 && random < 0.66) {
    Adjectives = "Amazing"
}
else{
    Adjectives = "Fire"
}

 random = Math.random()
if (random < 0.33) {
    Shop_name = "Engine"
}
else if (random >= 0.33 && random < 0.66) {
    Shop_name = "Foods"
}
else{
    Shop_name = "Garments"
}

random = Math.random()
if (random < 0.33) {
    Another_word = "Bros"
}
else if (random >= 0.33 && random < 0.66) {
    Another_word = "Limited"
}
else{
    Another_word = "Hub"
}

let text;
  if (confirm("Do you want to generate a business name generator") == true) {
    alert(` Your Buisness Name is ${Adjectives} ${Shop_name} ${Another_word}`)
  } else {
    alert("You canceled!");
}
