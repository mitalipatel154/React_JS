import React, { useState } from "react";

function ListFilter(){
    const fruits = ["Apple", "Mango", "Banana", "Pineapple", "Orange"]
    const [search, setSearch] = useState("");

    const filtered = fruits.filter((f) => f.toLowerCase().includes(search.toLocaleLowerCase()));

    return(
        <div>
            <h2>List & Filter</h2>

            <input type="text" placeholder="Search Fruit" value={search} onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {
                    filtered.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ListFilter;