const express = require ('express')


const app = express()
const PORT = 8080
const handlebars = require('express-handlebars')
const routesProducts = require('./routes/products')
const routesCart = require('./routes/cart')

app.use('/products', routesProducts)

app.use(express.json())
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log('corriendo en el puerto', PORT)
})