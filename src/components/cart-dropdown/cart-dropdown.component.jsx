import React from 'react';
import {connect} from 'react-redux';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { SelectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
            }
            <CustomButton> GO TO CHECKOUT </CustomButton>
        </div>
    </div>
)

const mapStateToProps = state => ({
    cartItems : SelectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);