import './qtyPicker.css';
import { useState } from 'react';


function QtyPicker() {
    const [qty, setQty] = useState(1);

    function decrement() {
        let newQty = qty - 1;
        if (newQty < 1) {
            newQty = 1;
        }
        setQty(newQty);
    }
    function increment() {
        let newQty = qty + 1;
        setQty(newQty);
    }
    // function reset() {
    //     let newQty = 1;
    //     setQty(newQty);
    // }
    return (
        <div className='qty-Picker'>

            <button className='btn btn-sm btn-warning' disabled={qty === 1} onClick={decrement}>-</button>
            <label>{qty}</label>
            <button className='btn btn-sm btn-primary' onClick={increment}>+</button>
           {/* <button onClick={reset}>Reset</button>*/}
        </div>

    );
}



export default QtyPicker;