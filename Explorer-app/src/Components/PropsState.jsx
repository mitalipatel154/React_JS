import React, { use, useState } from "react";

function PropsState(){
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    return(
        <>
            <h2>Props & State</h2>

            <Welcome name={"Mitali"}/>

            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>decrease</button>

            <p>Status : {toggle ? "ON" : "OFF"}</p>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </>
    )
}
function Welcome({name}){
    return (
        <h3>Hello, {name}</h3>
    )
}

export default PropsState;