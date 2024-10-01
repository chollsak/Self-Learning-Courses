const express = require('express')
const app = express()
const {products, people} = require('./data')


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">product</a> ')
})

app.get('/api/products', (req,res) => {
    const newProducts = products.map((product) => {
        const  {id, name, image} = product
        return {id, name, image}
    })

    res.json(newProducts)
})

app.get('/api/products/:productID', (req,res) => {
    const { productID } = req.params

    const singleProduct = products.find((product) => product.id === Number(productID));

    if(!singleProduct){
        res.status(404).send('Product not found')
    }
    
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res) => {
    console.log(req.params)
    res.send('helloWorld')
})

app.listen(5000, () => {
    console.log('Server is listening at port 5000.....')
})