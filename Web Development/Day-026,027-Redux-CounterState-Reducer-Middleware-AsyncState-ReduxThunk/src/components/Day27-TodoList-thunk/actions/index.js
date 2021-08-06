const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item, // for convension, we wrote payload
    }
}

const removeItem =(id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id,
    }
}

export {addItem, removeItem};
