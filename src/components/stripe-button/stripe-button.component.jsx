import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStrip = price * 100;
    const publishableKey = 'pk_test_tOPqKREjYXlLmzHuncA81L1e00U3ah9zOk';

    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;