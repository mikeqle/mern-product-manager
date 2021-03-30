import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = (props) => {
    const [ allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                setAllProducts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>All Products:</h1>
            <ul>
            {
                allProducts.map((product, idx) => (
                    <li key={idx}><Link to={`/products/${product._id}`} key={idx}>{product.title}</Link></li>
                ))
            }
            </ul>
        </div>
    );
}

export default ProductList;