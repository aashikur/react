import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => { 
    const [error, setError] = useState('error');

    const ProductForm = (e) => {
        e.preventDefault(); 
        console.log(e.target.name.value)

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value; 

        if(name.length == 0){
            setError('Invalid name.') 
            return;
        } 
        else if(price.length == 0){
            setError('invalid price') 
            return;
        } 
        else if(quantity.length == 0){
            setError('invalid Quantity') 
            return;
        } else {
            setError('')
        }

        const newProduct = {
            name,price, quantity
        }

        // console.log(newProduct)
        handleAddProduct(newProduct);

    }
    return (
        <div> 
            <h3 className='text-3xl mb-3'>Add A Product</h3>
            <form onSubmit={ProductForm}>
                <input name='name' type="text" placeholder='Product Name' /> 
                <br />
                <input name='price'  type="text" placeholder='Product Price' /> 
                <br />
                <input name='quantity'  type="text" placeholder='Product Quantity' /> 
                <br />
                <input type="submit"/> 
                <br />
            </form> 
            <div className='text-red-500 py-2'>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default ProductForm;