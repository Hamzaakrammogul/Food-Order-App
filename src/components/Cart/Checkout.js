import react from "react";
import classes from './Checkout.module.css'
const Checkout = (props) => {

    const confirmHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text"></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="street"> Street</label>
                <input id="street" type="text"></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="postal"> Postal Code</label>
                <input id="postal" type="text"></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="city" >City</label>
                <input id="city" type="text"></input>
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );

}

export default Checkout;
