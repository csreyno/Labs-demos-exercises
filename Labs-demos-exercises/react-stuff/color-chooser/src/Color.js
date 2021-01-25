// 1. import React
import React from 'react';
//3. 
function Color() {
    return (
        <section id="colors">
            <nav className="c1">
            <button onClick={props.handleClick}>
                Click Here
                </button>
            </nav>
            <div className="c2">
            Click Here
            </div>
            <div className="c3">
            Click Here
            </div>
        </section>
    );
}

// 2. export default header
export default Color;