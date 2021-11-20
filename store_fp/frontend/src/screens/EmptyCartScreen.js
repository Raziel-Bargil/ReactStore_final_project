import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCartScreen() {
    return (
        <div className="empty-cart">
            The Cart Is Empty.
            <br></br>
            Please Go Back To <Link to="/"> Home Page</Link> -  fill your cart with  electronics supplies, video games and more...
        </div>
    )
}
export default EmptyCartScreen;
