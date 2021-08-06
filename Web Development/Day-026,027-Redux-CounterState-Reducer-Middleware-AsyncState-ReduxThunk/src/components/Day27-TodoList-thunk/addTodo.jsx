import { useState } from "react";

const AddTodo = () => {
    const [item, setItem] = useState("");
    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a todo..." 
                value={item} 
                onChange={(e) => {setItem(e.target.value)}} />
            <button onClick={() => {setItem("")}} >Add</button>
        </div>
    )
}

export default AddTodo;