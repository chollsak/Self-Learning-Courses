const EvenEmitter = require('events')

const customEmitter = new EvenEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved ${name} with id:${id}`)
})
customEmitter.on('response', () => {
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'john', 34)