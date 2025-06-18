import Product from '../components/product';
import './catalog.css';


function Catalog() {

    return(
        <div className='catalog-page'>
            <h1>Catalog page</h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );

}

export default Catalog;