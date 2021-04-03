import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [ trigger, setTrigger ] = useState(false);
    const [ allProducts, setAllProducts] = useState([]);

    return (
        <div>
        <ProductForm trigger={trigger} setTrigger={setTrigger} />
        <hr />
        <ProductList trigger={trigger} setTrigger={setTrigger} allProducts={allProducts} setAllProducts={setAllProducts}/>
        </div>
    );
};

export default Main;