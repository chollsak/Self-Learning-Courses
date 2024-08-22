type Address = {
    street: string
    city: string
    country: string
}


type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address:  {
        street: 'charong krung',
        city: 'bangkok',
        country: 'thailand'
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
        address:  {
        street: 'charong krung',
        city: 'bangkok',
        country: 'thailand'
    }
}

console.log(person1)