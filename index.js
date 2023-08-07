class ProductManager {
    static id = 0;
    title;
    products;

    constructor(nombre) {
        this.nombre = nombre;
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, stock) {
        const product = {
            id: ProductManager.id,
            title,
            description,
            price,
            thumbnail,
            stock,
        };

        this.products.push(product);
        ProductManager.id++;
        return product;
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            if (product.id === id) {
                return product;
            }
        }

        return 'Not found';
    }

}

const hipermercado = new ProductManager('Guolmart');
const product = hipermercado.addProduct('Lechelita', 'Leche deslactosada', 800, 'soy_una_img_xd.png', 10 );
const product2 = hipermercado.addProduct('Blue Label', 'Es un elisir', 300000, 'soy_super_expensive.png', 4 );
const product3 = hipermercado.addProduct('Pitusas', 'Las galletitas mas nobles del mundo', 400, 'pitusas.png', 4 );
const product4 = hipermercado.addProduct('Coca Cola', 'Formula ultrasecreta pero deliciosa 😋', 600, 'soy_una_coca.png', 4 );

/*------Get all products------*/

console.log(hipermercado.getProducts()); 

/*------Id Finder------*/

console.log(hipermercado.getProductsById(2));