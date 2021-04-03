import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = (props) => {
    
    let { trigger, setTrigger, allProducts, setAllProducts } = props;
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                setAllProducts(res.data);
            })
            .catch((err) => console.log(err));
        console.log("API was called to get List");
        console.log("Trigger is " + trigger);
    }, [trigger, setAllProducts]);

    const handleDeleteButton = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        
        console.log(trigger);
        setTrigger(!trigger);

        console.log("product list trigger changed to " + trigger);
    }

    return (
        <div>
            <h1>All Products:</h1>
            <ul>
            {
                allProducts.map((product, idx) => (
                    <li key={idx}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <button onClick={ (e) => handleDeleteButton(product._id) }>Delete</button>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default ProductList;