import './product.css';
import QtyPicker from './qtyPicker';

function Product() {

    return(
        <div className='product'>
            <h5>Title of product goes here</h5>
            <QtyPicker></QtyPicker>
        </div>
    );
}

export default Product;