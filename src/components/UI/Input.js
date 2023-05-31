import React from "react";
import classes from './Input.module.css';

//when you using ref in a custom component you need to wrap that component function in React.forwardRef(()=>{}) to make it valid for ref
const Input = React.forwardRef((props, ref) => {

    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref}{...props.input}/>
        </div>
    )
});
export default Input;