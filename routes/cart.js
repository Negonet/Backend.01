const express = require ('express')
const { Router } = express

const router = new Router ()


let cart = [];

router.get('/', (req, res)=>{
    res.send('hola usuario')
})

module.exports = router