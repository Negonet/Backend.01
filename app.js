const express = require ('express')
const fs = require('fs')
const path = require('path')
const ProductManager = require('./ProductManager')
const app = express()
const PORT = 8080

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/ProductManager.js'))
})

app.get('/products', (req, res) => {

    let products = new ProductManager()
    const resp = products.getProducts()
    resp.then(pr => {
        
        res.send(pr)
    }).catch(err => {
        console.log(err)
    })
    
    
})

app.get('/products/:pid', (req, res) => {
    
    const id = req.params.pid
    
    let products = new ProductManager()
    const resp = products.getProductById(id)
    
    resp.then(pr => {
        
        res.send(pr)

    }).catch(err => {
        console.log(err)
    })   
})


app.post('/addproduct', (req, res)=> {
   
    let newProduct = req.body
    let product = new ProductManager()
    const resp = product.addProduct(newProduct)
    resp.then(pr => {
        
        res.send(pr)
    }).catch(err => {
        console.log(err)
    })
})

app.listen(PORT, () => {
    console.log('corriendo en el puerto', PORT)
})