const username = (e) => {
    return {
        type: "NAME",
        name: e.target.value,
    };
};

const email = (e) => {
    return {
        type: "EMAIL",
        email: e.target.value,
    };
};

export { username, email }