const express = require ('express')

const path = require('path')
const ProductManager = require('../ProductManager')
const { Router } = express


const router = new Router ()

router.get('/all', (req, res) => {

    let products = new ProductManager()
    const resp = products.getProducts()
    resp.then(pr => {
        
        res.render('products', {
            products: pr
        })

    }).catch(err => {
        console.log(err)
    })
    
    
})

router.get('/:pid', (req, res) => {
    
    const id = req.params.pid
    
    let products = new ProductManager()
    const resp = products.getProductById(id)
        
    resp.then(pr => {
        res.render('searchId', pr)

    }).catch(err => {
        console.log(err)
    })   
})


router.post('/addproduct', (req, res)=> {
   
    let newProduct = req.body
    console.log(newProduct)
    let product = new ProductManager()
    const resp = product.addProduct(newProduct)
    resp.then(pr => {
        
        res.send(pr)
    }).catch(err => {
        console.log(err)
    })
})

router.put('/update', (req, res) => {
    
    let updateProd = req.body
    
    let products = new ProductManager()
    const resp = products.updateProduct(updateProd)
    
    resp.then(pr => {
        
        res.send(pr)

    }).catch(err => {
        console.log(err)
    })   
})

router.delete('/delete', (req, res) => {
    
    let deleteProd = req.body
    
    let products = new ProductManager()
    const resp = products.deleteProduct(deleteProd)
    
    resp.then(pr => {
        
        res.send(pr)

    }).catch(err => {
        console.log(err)
    })   
})


module.exports = router