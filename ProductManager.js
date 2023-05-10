const fs = require('fs')

class ProductManager {

    constructor(){
        this.products = [];
        this.id = 0;
    }

    async addProduct (title, description, price, thumbnail, code, stock) {

        try {
            
            let readProducts = await fs.promises.readFile('./productos.json', 'utf-8')
            let arrayProduct = JSON.parse(readProducts)
            
            this.products = arrayProduct
            
            const search = this.products.find(product => {
                return product.code == code})
            

            if (!search) {
                const newProduct = {title, description, price, thumbnail, code, stock};

                newProduct.id = ++this.id
                this.products.push(newProduct)
                

            
               let writeProduct = await fs.promises.writeFile('./productos.json' ,JSON.stringify(this.products, null, 2), 'utf-8')
            }     else {
                console.log('este item ya existe')
            }  
    
        }catch(err) {
            console.log(err)
        }
        }

    getProducts = async () => {

        try {

            let readProducts = await fs.promises.readFile('./productos.json', 'utf-8')
            let arrayProduct = JSON.parse(readProducts)
            this.products = arrayProduct
            return this.products
            

        }catch (err) {
            console.log(err)
        }

    }

    deleteProduct = async (id) => {
        try {
            let readProducts = await fs.promises.readFile('./productos.json', 'utf-8')
            let arrayProduct = JSON.parse(readProducts)
            this.products = arrayProduct

            const searchId = this.products.findIndex(product => product.id === id.id)
            
            if (searchId !== -1) {
                
                this.products.splice(searchId, 1)
                let writeProduct = await fs.promises.writeFile('./productos.json' ,JSON.stringify(this.products, null, 2), 'utf-8')
                
            }
            else{
                console.log('no se encuentra el producto')
            }
        
        }catch(err) {
            console.log(err)
        } 
    }

    async getProductById(id) {
        
            let readProducts = await fs.promises.readFile('./productos.json', 'utf-8')
            let arrayProduct = JSON.parse(readProducts)
            this.products = arrayProduct
            const searchId = this.products.find(product => {
                return product.id == id
            }) 
            
            
            if (searchId) {
                               
                return searchId
            
            }
            else{
                return 'no se encuentra el producto'
            }
        
        }
    

    updateProduct = async (id) => {
        try {
            let readProducts = await fs.promises.readFile('./productos.json', 'utf-8')
            let arrayProduct = JSON.parse(readProducts)
            this.products = arrayProduct

            const searchId = this.products.findIndex((product => product.id === id.id))

            if ( searchId >= 0 ) {

                const update = arrayProduct.map(product => {

                    if (product.id == id.id) {
                        product.stock=id.stock
                        console.log(this.products)
                       
                        }

                } )} 
                
                else{
                console.log('no se encuentra el producto')
            }
        
        }catch(err) {
            console.log(err)
        }
    }
}

module.exports = ProductManager

//updateProduct(1,69)

//Agregar Item:
// const productos = new ProductManager()
// productos.addProduct('cubiertos','plastico',8,'no existente',50,50);
// productos.addProduct('wok','aluminio',47,'no existente',37,50);
//productos.addProduct('sarten','aluminio',29,'no existente',23,25);
//productos.getProducts()

//Obtener productos:
//getProducts()

//Borrar producto por su Id:
//deleteProduct(1)

//Buscar producto por su Id:
//getProductById(2)
