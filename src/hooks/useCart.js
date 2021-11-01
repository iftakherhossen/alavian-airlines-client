import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = details => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (details.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = details.find(details => details._id === key);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    }, [details]);

    return [cart, setCart];
}

export default useCart;