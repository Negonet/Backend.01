const fs = require('fs')

class ProductManager {

    constructor(){
        this.products = [];
        this.id = 0;
    }

    async addProduct (newProduct) {

        try {
            
            let readProducts = await fs.promises.readFile('./productos.json', 'utf-8')
            let arrayProduct = JSON.parse(readProducts)
            
            this.products = arrayProduct

            
            const search = this.products.find(product => {
                return product.code == newProduct.code})

            if (!search) {
                const id = ++this.id
                const productAdded = {...newProduct, id};
                this.products.push(productAdded)
           
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
    

    updateProduct = async (updateProd) => {
        try {
            let readProducts = await fs.promises.readFile('./productos.json', 'utf-8')
            let arrayProduct = JSON.parse(readProducts)
            this.products = arrayProduct

            const searchId = this.products.findIndex((product => product.id === updateProd.id))
            
            if ( searchId >= 0 ) {

                this.products[searchId].stock = updateProd.stock;
                let writeProduct = await fs.promises.writeFile('./productos.json' ,JSON.stringify(this.products, null, 2), 'utf-8')

            } 
                
                else{
                console.log('no se encuentra el producto')
            }
        
        }catch(err) {
            console.log(err)
        }
    }
}

module.exports = ProductManager
