import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";
import product5 from "./assets/products/5.png";
import product6 from "./assets/products/6.webp";
import product7 from "./assets/products/7.webp";
import product8 from "./assets/products/8.webp";

type Products = {
    id: number;
    productName: string;
    price: number;
    productImage: string
}

export const products: Products[] = [
    {
        id: 1,
        productName: 'IPhone',
        price: 999.0,
        productImage: product1
    },
    {
        id: 2,
        productName: 'Macbook Pro 2022',
        price: 899.0,
        productImage: product2
    },
    {
        id: 3,
        productName: 'Cannon M50 Camera',
        price: 799.0,
        productImage: product3
    },
    {
        id: 4,
        productName: 'Denim Jacket',
        price: 799.0,
        productImage: product4
    },
    {
        id: 5,
        productName: 'LED Light Strips',
        price: 799.0,
        productImage: product5
    },
    {
        id: 6,
        productName: 'SPECTRUM LS TEE',
        price: 699.0,
        productImage: product6
    },
    {
        id: 7,
        productName: 'Auto Service shirt',
        price: 899.0,
        productImage: product7
    },
    {
        id: 8,
        productName: 'Unstructured Hat',
        price: 799.0,
        productImage: product8
    }
];
