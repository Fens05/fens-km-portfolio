import React from 'react';
import Nav from '../Navigation';

function Header () {
    return (
        <header>
            <div> 
                <h1>Krista Meyer</h1>
                <p className="pHeader">Portfolio </p>
                </div>
                <Navigation/>
        </header>
    );
}

export default Header;