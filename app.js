const express = require ('express')
const PORT = 8080


const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);


const handlebars = require('express-handlebars')
const routesProducts = require('./routes/products')
const routesCart = require('./routes/cart')

app.use('/products', routesProducts)
app.use('/cart', routesCart)
app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

io.on('connection', (socket)=> {
    console.log('User conectado')
})

app.get('/', (req, res) => {
    res.render('index')
})

server.listen(PORT, () => {
    console.log('corriendo en el puerto', PORT)
})