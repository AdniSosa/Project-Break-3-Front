import React, { useEffect, useRef } from 'react';

const StripeBuyButton = () => {
    const containerRef = useRef(null);

    useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    script.onload = () => {
        const stripe = window.StripeBuyButton;
    };
    document.body.appendChild(script);

    const button = document.createElement('stripe-buy-button');
    button.setAttribute('buy-button-id', 'buy_btn_1RDvBqRhaEv3IYcF3DpNyJ4e');
    button.setAttribute('publishable-key', 'pk_test_51RDv3PRhaEv3IYcFntZnqjheWmqEzVleSRF28IpseoiQTQSzmNxBJ2thlnF1wQSGsNTGYuEG1TleFiMbkTtQHMGa00Do3bDKx5');

    containerRef.current.appendChild(button);
    }, []);

    return <div ref={containerRef} />;
};

export default StripeBuyButton;
