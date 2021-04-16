const liczby = [55,70,50,60,99,100,120,258,600]
const liczbyOdDo = liczby.filter(item => {
    if(item > 101 && item < 580) {
        return item
    }
})

console.log(liczbyOdDo)


//kolejne//
const tickets = [
    {
        name: "Jan",
        isDog: false
    },
    {
        name: "Andrzej",
        isDog: true
    },
    {
        name: "Adam",
        isDog: false
    },
    {
        name: "Karolina",
        isDog: true
    }
    ]
const niePies = tickets.filter(item => {
        if(item.isDog === false) {
            return item
        }
    })
console.log(niePies)

//kolejne//

const num = [54,81,50,28,99,33,66,72]
const podzielne = num.filter(item => {
    if(item % 3 === 0 && item > 60) {
        return item
    }
})
console.log(podzielne)

//kolejne//

// const number = [5,55, 40]
// console.log(5*2,55*2,40*2)

const number = [5,55, 40]
const numerRazy2 = number.map (item => item * 2)
console.log(numerRazy2)

//kolejne//

const people = [
    {
        name: "Jan",
        age: 30,
        vaccine: false
    },
    {
        name: "Karol",
        age: 50,
        vaccine: false
    },
    {
        name: "Anna",
        age: 60,
        vaccine: false
    },
    {
        name: "Magda",
        age: 70,
        vaccine: false
    }
]
const lat = people.map(item => {
    if(item.age >= 50) {
        item.vaccine = true
        return item
    }
})

console.log(lat)

//kolejne//

const num3 = [54,81,50,28,99,33,66,72] 
const większe = num3.filter(item => {
    if(item > 50){
        return item
    }
}).map (item => item/2)
console.log(większe)

//kolejne//

    // for(let i = 1; i < 6; i++) {
    //     const paragraf = document.createElement('p')
    //     paragraf.innerText = "Jestem paragrafem numer " + i
    //     app
    //     paragraf.setAttribute('class','parka')
    //     app.appendChild(paragraf)
    // }
// kolejne//

const peoples = [
    {
        name: "Jan",
        age: 30,
        sName: "Kowalski"
    },
    {
        name: "Karol",
        age: 50,
        sName: "Nowak"
    },
    {
        name: "Anna",
        age: 60,
        sName: "Duda"
    },
    {
        name: "Magda",
        age: 70,
        sName: "Tusk"
    }
]
    const app = document.getElementById('app')
    for(let i = 0; i < peoples.length; i++){
        let paragraf = document.createElement('p')
        paragraf.setAttribute('class', 'parka')
        paragraf.innerText = peoples[i].name + " " + peoples[i].sName + " " + peoples[i].age + " " + "lat"
        app.appendChild(paragraf)
    }
