import React from 'react';

const myFlex = {
    width: '95vw',
    display: 'flex',
}

const card = {
    border: "2px solid",
    padding: "5px",
    textAlign: "center",
    width: "300px",
    margin: '50px auto',
    height: 'fit-content',
    borderRadius: "10px"
}

const Card =() =>{
    return(
        <div style={myFlex}>
            <div style={card}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Img" />
                <h2>React Card</h2>
                <p>This is a card</p>
            </div>
        </div>
    );
};

const CardSet =() =>{
    return(
        <div>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default CardSet;
