import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Cart = () => {
    const {
        state: { cart, loading, error }
    } = useProducts();

    let content;

    if (loading) {
        content = <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
            Processing...
        </button>
    }

    if (error) {
        content = <p>Something went wrong!!</p>
    }

    if (!loading && !error && cart.length === 0) {
        content = <p>Nothing to show product list is empty!</p>
    }

    if (!loading && !error && cart.length) {
        content = cart.map(product => <ProductCard
            key={product._id}
            product={product}
        ></ProductCard>)
    }

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 max-w-7xl mx-auto my-10'>
            {
                content
            }
        </div>
    );
};

export default Cart;