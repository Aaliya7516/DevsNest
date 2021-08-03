const inputReducer = (text = '', action) => {
    if (action.type === "NAME") { 
        text = action.name;
        console.log(text) }
    else if (action.type === "EMAIL") { 
        text = action.email;
        console.log(text) }
    return text;
}

export default inputReducer;