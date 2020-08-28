import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Enrolled Items: {cart.length}</p>
            <p>Total Price: {formatNumber(total)}</p>
            <button type="button" class="btn btn-secondary">Pay Now</button>
        </div>
    );
};

export default Cart;