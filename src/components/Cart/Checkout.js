import { useRef, useState } from "react";
import classes from './Checkout.module.css'

const Checkout = (props) => {

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    });

    const isEmpty = (value) => {
        return value.trim() === "";
    };

    const isFiveChars = (value) => {
        return value.trim().length > 5;
    }

    const nameInputRef = useRef();
    const streetRef = useRef();
    const cityRef = useRef();
    const postalRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetRef.current.value;
        const enteredCity = cityRef.current.value;
        const enteredPostal = postalRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityisValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isFiveChars(enteredPostal);

        const formIsValid = enteredNameIsValid && enteredCityisValid && enteredPostalIsValid && enteredStreetIsValid;

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityisValid,
            postal: enteredPostalIsValid
        })

        if (!formIsValid) {
            return;
        }else
        {
        props.onSubmitHandlerProp({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal
        });
    }

    };

    return (
        <form onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`}>
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} id="name" type="text"></input>
                {!formInputValidity.name && <p>Name must not be empty</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.street ? '' : classes.invalid} `}>
                <label htmlFor="street"> Street</label>
                <input ref={streetRef} id="street" type="text"></input>
                {!formInputValidity.street && <p>Street must not be empty</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.postal ? '' : classes.invalid}`}>
                <label htmlFor="postal"> Postal Code</label>
                <input ref={cityRef} id="postal" type="text"></input>
                {!formInputValidity.postal && <p>Postal code must not be empty and less than 6 char</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
                <label htmlFor="city" >City</label>
                <input ref={postalRef} id="city" type="text"></input>
                {!formInputValidity.city && <p>City must not be empty</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" className={classes.submit}>Confirm</button>
            </div>
        </form>
    );

}

export default Checkout;
