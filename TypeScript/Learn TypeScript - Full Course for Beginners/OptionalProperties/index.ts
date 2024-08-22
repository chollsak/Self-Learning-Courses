type Addressz = {
    street: string
    city: string
    country: string
}


type Personz = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person3: Personz = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person4: Personz = {
    name: "Jill",
    age: 66,
    isStudent: false,
        address:  {
        street: 'charong krung',
        city: 'bangkok',
        country: 'thailand'
    }
}

function displayInfo(person: Personz){
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person2)