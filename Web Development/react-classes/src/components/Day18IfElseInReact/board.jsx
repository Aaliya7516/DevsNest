import React from 'react';

const border = {
    border: '20px solid',
    padding: '1px',
    display: 'grid',
    margin: 'auto',
    width:'fit-content',
    gridTemplateRows: 'repeat(8, auto)',
    gridTemplateColumns: 'repeat(8, auto)'
}
const filled ={
    height: '20px',
    width: '20px',
    backgroundColor: 'black'
}
const unfilled ={
    height: '20px',
    width: '20px',
    backgroundColor: 'white'
}
var arr = [0,1,2,3,4,5,6,7]
const Board =() =>{
    return(
        <div style={border}>
            {arr.map((i) => (
                arr.map((j) => (
                    <div key={i*10+j} style={((i+j) % 2===0)? filled:unfilled}></div>
                ))
            ))}
        </div>
    );
};

export default Board;
