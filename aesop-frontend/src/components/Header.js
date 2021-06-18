import React from 'react'
import './Header.css'
import { Button } from '@material-ui/core';

function HeaderTop() {
    return (
        <div className="header">
           
            <div className="header__button">
                <Button>Shop</Button>
                <Button>Read</Button>
                <Button>Stores</Button>
                <Button>Search</Button>
            </div>
            
            <div className="header__button">
                <Button>Login</Button>
                <Button>Cart</Button>
            </div>
        </div>
    )
}

export default HeaderTop
