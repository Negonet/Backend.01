const express = require ('express')


const app = express()
const PORT = 8080

const routesProducts = require('./routes/products')
const routesCart = require('./routes/cart')

app.use('/products', routesProducts)

app.use(express.json())


app.listen(PORT, () => {
    console.log('corriendo en el puerto', PORT)
})
