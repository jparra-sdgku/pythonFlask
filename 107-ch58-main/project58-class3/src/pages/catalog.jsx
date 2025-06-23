import { useState, useEffect } from 'react';
import Product from '../components/product';
import './catalog.css';
import DataService from '../service/data';


function Catalog() {

    const [items, setItems] = useState([]);


    useEffect(() => {
        console.log("catalog is mounted");
        loadCatalog();
    }, []
    );

    function loadCatalog() {
        //get the data from the service
        let service = new DataService();
        let productEnd = service.getProducts();
        console.log("Products: ", productEnd);
        setItems(productEnd);

    }
    return (
        <div className='catalog-page'>
            <h1>Catalog page</h1>
            <h5>Hellow we have {items.length} new peoducts</h5>
            <div className='catalog'>
                {items.map((item, index) => {
                    return <Product key={index} product={item} />
                })}
            </div>
        </div>
    );

};

export default Catalog;