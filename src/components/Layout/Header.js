import React from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import mealImage from '../../assets/meals.jpg'

const Header = (props) => {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Daily Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="A table full of delicious food!" />
            </div>
        </React.Fragment>

    );

};

export default Header