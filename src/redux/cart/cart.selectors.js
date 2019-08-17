import { createSelector } from "reselect";

const SelectCart = state => state.cart;

export const SelectCartItems = createSelector(
    [SelectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [SelectCart],
    cart => cart.hidden
)

export const SelectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => 
        cartItems.reduce(
        (   accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
        )
)


export const SelectCartTotal = createSelector(
    [SelectCartItems],
    cartItems => 
        cartItems.reduce(
        (   accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0
        )
)