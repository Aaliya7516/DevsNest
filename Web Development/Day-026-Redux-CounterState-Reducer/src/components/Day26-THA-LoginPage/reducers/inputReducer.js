const inputReducer = (data = {name : "", email : "" }, action) => {
    if (action.type === "NAME") { 
        data = { ...data, name : action.name }
    }else if (action.type === "EMAIL") { 
        data = { ...data,email : action.email } 
    }
    
    return data;
}
export default inputReducer;
