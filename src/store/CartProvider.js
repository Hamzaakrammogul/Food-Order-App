import React, {useReducer} from "react";
import CartContext from "./cart-context";


const initialState = {
    items: [],
    totalAmount: 0
}

const cartreducer= (state, action)=>{
    if(action.type==='ADD_ITEM'){
      
        const updatedTotalAmount= state.totalAmount+action.item.price + action.item.amount

        const existingCartItemIndex= state.items.findIndex((item)=>item.id===action.item.id)
        
        const existingCartItem= state.items[existingCartItemIndex]
      
        let updatedItems;

        if(existingCartItem){
            
            const updatedItem={
                ...existingCartItem,
                amount: existingCartItem.amount +action.item.amount
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }else {
            updatedItems = state.items.concat(action.item);

        }

        return {
            items: updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    return initialState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction]=useReducer(cartreducer, initialState)

    const addItemToCartHandler = item =>{
        dispatchCartAction({
            type: 'ADD_ITEM',
            item:item
        });
    };

    const removeItemFromCartHandler= id => { 
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id:id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler ,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider; 