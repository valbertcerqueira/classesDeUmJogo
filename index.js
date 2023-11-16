class heros {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    attack() {
        let typeAttack = ""
        if ( this.type === "guerreiro"){
            typeAttack = "espada"
        }
        else if ( this.type === "mago") {
            typeAttack = "magia"
        }
        else if ( this.type === "monge") {
            typeAttack = "artes marcias"
        }
        else if ( this.type === "ninja") {
            typeAttack = "shuriken"
        }
        return typeAttack
    }

}


let hero = new heros("Tony", "25", "ninja")
let typeOfAttack = hero.attack()
console.log(`O ${hero.type} atacou usando ${typeOfAttack}`)

