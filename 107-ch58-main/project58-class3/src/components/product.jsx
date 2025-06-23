import { useEffect } from 'react';
import './product.css';
import QtyPicker from './qtyPicker';

function Product() {

    // This component represents a single product in the catalog
    // It should display the product title, image, price, total, and a button to add to cart
    // The QtyPicker component should be used to select the quantity of the product
    useEffect(() => {
        console.log("Hellow im a product component");
        // You can load product data here if needed
        // For example, you might fetch product details from an API or service

    },[]
);


    return(
        <div className='product'>
            <h5>  </h5>
            <img src="https://picsum.photos/200/200"/>
            <div className='prices>'>
                <label htmlFor="price">Price</label>
                <label htmlFor="total">Total</label>
            </div>
            <QtyPicker></QtyPicker>
            <button className='btn btn-sm btn-dark'>Add</button>
        </div>
    );
}

export default Product;