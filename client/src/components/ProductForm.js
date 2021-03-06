import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState("");
    let { trigger, setTrigger } = props;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));

        // This triggers the useEffect on ProductList
        console.log(trigger);
        setTrigger(!trigger);
        console.log("productform Trigger changed to " + trigger);
        
        setTitle("");
        setPrice("");
        setDescription("");
    }
    
    return(
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label>Title</label>
                <input type="text" value={title || ""} onChange={(e) => setTitle(e.target.value) } />
            </p>
            <p>
                <label>Price</label>
                <input type="text" value={price  || ""} onChange={(e) => setPrice(e.target.value) } />
            </p>
            <p>
                <label>Description</label>
                <input type="text" value={description  || ""} onChange={(e) => setDescription(e.target.value) } />
            </p>
            <button type="submit">Create</button>
        </form>
    );
};

export default ProductForm;