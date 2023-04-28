const express = require ('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/ProductManager.js'))
})

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname + '/productos.json'))
})

app.get('/productos/:pid', (req, res) => {
    
        id = req.params.id
        console.log(id)
        
        let readProduct =  fs.readFile(path.join(__dirname + '/productos.json'))
        let arrayProduct = JSON.parse(readProduct)
        let productFound = arrayProduct.find((elem) => {
            return elem.id == id
        
        })  
        console.log(productFound)
    
        

    
})


app.listen(8080, () => {
    console.log('corriendo en el servidor 8080')
})