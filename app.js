const express = require ('express')
const fs = require('fs')
const path = require('path')
const ProductManager = require('./ProductManager')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/ProductManager.js'))
})

app.get('/products', (req, res) => {

    let products = new ProductManager()
    const resp = products.getProducts()
    resp.then(pr => {
        console.log(pr)
        res.send(pr)
    }).catch(err => {
        console.log(err)
    })
    
    
})

app.get('/products/:pid', (req, res) => {
    
        // let id = req.params.pid
        // console.log(id)
        
        
        // let readProduct = fs.readFile(path.join(__dirname + '/productos.json'))
        // let arrayProduct = JSON.parse(readProduct)
        // console.log(arrayProduct)
        // // let productFound = arrayProduct.find((elem) => {
        // //     return elem.id == id
        
        // // })  
        // res.send(productFound)
        // console.log(productFound)
    
        

    
})


app.listen(8080, () => {
    console.log('corriendo en el servidor 8080')
})