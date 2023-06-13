import React, {useContext, useState} from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = props => {

    const [isCheckOut, setIsCheckOut] =  useState(false);

    const ctx = useContext(CartContext);
    const totalAmount= `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length >0;

    const cartItemRemoveHandler = id=> {
        ctx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        ctx.addItem({...item, amount:1})
    };

    const orderHandler = ( ) => {
        setIsCheckOut(true);
    }

    const cartItems = <ul className={classes['cart-items']}>
        {ctx.items.map((item) => <CartItem key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
        />)}
    </ul>

    const modalAction = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
   {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
</div>

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckOut && <Checkout onCancel={props.onClose}/>}
            {!isCheckOut && modalAction}
        </Modal>
    );
}

export default Cart; 