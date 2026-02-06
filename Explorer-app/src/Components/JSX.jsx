import React from "react";

function JSX(){
    const Message = "Hello!";

    return(
        <div>
            <h2>JSX & Component Rendering</h2>

            <p>{Message}</p>
            <Child/>
        </div>
    )
}

function Child(){
    return(
        <p>Welcome to React Explorer</p>
    )
}

export default JSX;