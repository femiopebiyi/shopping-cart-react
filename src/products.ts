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
    productImage: string;
    specs: string;
}

export const products: Products[] = [
    {
        id: 1,
        productName: 'IPhone',
        price: 999.0,
        productImage: product1,
        specs: 'The iPhone features a 6.1-inch Liquid Retina HD display, A14 Bionic chip, dual-camera system with 12MP Ultra Wide and Wide cameras, water and dust resistance, and Face ID for secure authentication.'
    },
    {
        id: 2,
        productName: 'Macbook Pro 2022',
        price: 899.0,
        productImage: product2,
        specs: 'The MacBook Pro 2022 boasts a 13.3-inch Retina display, Apple M2 chip, 8GB unified memory, 256GB SSD storage, Thunderbolt 4 ports, and up to 17 hours of battery life.'
    },
    {
        id: 3,
        productName: 'Cannon M50 Camera',
        price: 799.0,
        productImage: product3,
        specs: 'The Canon M50 Camera features a 24.1 Megapixel CMOS sensor, DIGIC 8 image processor, Dual Pixel CMOS AF, vari-angle touchscreen LCD, and compatibility with a wide range of lenses.'
    },
    {
        id: 4,
        productName: 'Denim Jacket',
        price: 799.0,
        productImage: product4,
        specs: 'This denim jacket is crafted from 100% cotton denim fabric with a classic style, button-front closure, two chest pockets with button-flap closures, and adjustable waist tabs for a customizable fit.'
    },
    {
        id: 5,
        productName: 'LED Light Strips',
        price: 799.0,
        productImage: product5,
        specs: 'These LED light strips come in a 16.4 feet length with RGB color changing lights, a remote control offering multiple color and brightness options, and easy installation with adhesive backing.'
    },
    {
        id: 6,
        productName: 'SPECTRUM LS TEE',
        price: 699.0,
        productImage: product6,
        specs: 'The SPECTRUM LS TEE is made from 100% cotton jersey fabric with a regular fit, crew neck, long sleeves, and a printed logo on the chest for a casual yet stylish look.'
    },
    {
        id: 7,
        productName: 'Auto Service shirt',
        price: 899.0,
        productImage: product7,
        specs: 'This Auto Service shirt features a polyester-cotton blend fabric, button-up closure, collared neck, short sleeves, and an embroidered logo on the chest pocket for a professional appearance.'
    },
    {
        id: 8,
        productName: 'Unstructured Hat',
        price: 799.0,
        productImage: product8,
        specs: 'The Unstructured Hat is made from 100% cotton twill fabric with an unstructured design for a relaxed fit, adjustable strap closure, and an embroidered logo on the front.'
    }
];
