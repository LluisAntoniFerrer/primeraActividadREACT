import React from 'react';
import { Link } from'react-router-dom';
import '../CSS/Error_404.css'

function Error_404() {
    return ( 
        <div>
            <section class="error-container">
                <span>4</span>
                <span><span class="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <div class="link-container">
                <Link className='link' to="/">Home</Link>
            </div>
        </div>
    )
};
export default Error_404;