import product from './src/product.mjs';
import service from './src/service.mjs';

product.Product.availableProducts = [new product.Food('Mleko', 100, 69, '23. 08. 2020'),
                                     new product.WhiteGoods('Šporet', 30000, 14, 5)];
service.addProductsToDOM();
