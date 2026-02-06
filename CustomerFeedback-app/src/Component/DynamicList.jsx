import React from "react";


function DynamicList({ title, items, setItems }) {
    const updateItem = (i, value) => {
        const list = [...items];
        list[i] = value;
        setItems(list);
    };


    const addItem = () => setItems([...items, ""]);


    const removeItem = (i) => {
        const list = items.filter((_, idx) => idx !== i);
        setItems(list);
    };


    return (
        <div className="list-block">
            <h3>{title}</h3>
            {items.map((item, i) => (
                <div key={i} className="list-row">
                    <input className="input flex" value={item} onChange={(e) => updateItem(i, e.target.value)}/>
                    <button onClick={addItem} className="btn-success">Add</button>
                    <button onClick={() => removeItem(i)} className="btn-danger">remove</button>
                </div>
            ))}
        </div>
    );
}
export default DynamicList;