import React from 'react';
import style from './style.module.css'
var arr = [0,1,2,3,4,5,6,7]
const Board =() =>{
    return(
        <div className={style.boardBorder}>
            {arr.map((i) => (
                arr.map((j) => (
                    <div key={i*10+j} className={((i+j) % 2===0)? style.boardFilled: style.boardUnfilled}></div>
                ))
            ))}
        </div>
    );
};

export default Board;