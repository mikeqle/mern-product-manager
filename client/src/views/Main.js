import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    return (
        <div>
        <ProductForm />
        <hr />
        <ProductList />
        </div>
    );
};

export default Main;