import React, { useState } from "react";

function Form() {
    const [name, setname] = useState("");

    function handleClick(e){
        e.preventDefault();
        alert("Submitted..");
    }

    return (
        <>
            <form action="">
                <label>Name : </label>
                <input type="text" placeholder="Enter Your Name" onClick={(e) => setname(e.target.value)}/>
            </form>
            <button type="submit" onClick={handleClick}>Submit</button>
        </>
    )
}

export default Form;