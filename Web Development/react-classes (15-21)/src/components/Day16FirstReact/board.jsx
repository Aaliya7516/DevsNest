import React from 'react';
import style from './style.module.css';

const Board =() =>{
    const gridSet = [];
    for (let i = 0; i<64; i++){
        gridSet.push( <div key={i} className={style.boardGrid}></div>)
    }
    return(
        <div className={style.boardBorder}>
            {gridSet}
        </div>
    );
};

export default Board;
