import React, { useState, useEffact } from 'react';
import style from './style.module.css';

const Cal = (props) => {
    return (
        <div>
            <div className={style.calCard}>
                <h1 className={style.name}>{props.food}
                <button className={style.calDelBtn} onClick={()=>{
                    const newCals = props.cals.filter((el, index) => index !== props.index )
                    props.setCals(newCals);
                }}>Delete</button>
                </h1>
                <hr style={{ margin: "5px 0px" }} />
                <p className={style.para} key={props.index}>You have consumed {props.cal} cals today</p>
            </div>
        </div>
    );
}

function App(props) {
    const [foodName, setFoodName] = useState("");
    const [foodCal, setFoodCal] = useState("");
    const [cals, setCals] = useState([
        ["Pizza", "220"], 
        ['Burger','300'],
        ['Coke','500'],
        ['Browne','180'],
        ['Fried Rice','90'],
        ['Lassania','200'],
        ['Pani Puri', '10']
    ]);
    // useEffact(()=>{
        // setCals([]);
    // }, []);
    return (
        <div>
            <h1 className={style.calHeading}>Calorie meter</h1>
            <div className={style.calInput}>
                <input
                    type="text"
                    placeholder="Enter food name"
                    className={style.calInputFood}
                    onChange={(e) => {
                        setFoodName(e.target.value);
                    }}
                    value={foodName}
                />
                <input
                    type="number"
                    placeholder="Enter Calories"
                    className={style.calInputCal}
                    onChange={(e) => {
                        setFoodCal(e.target.value);
                    }}
                    value={foodCal}
                />
                <button 
                    type="submit"
                    className={style.calAddBtn}
                    onClick={() => {
                        if (foodName && foodCal){
                            setCals([...cals, [foodName,foodCal]]);
                            setFoodName("");
                            setFoodCal("");
                    }}}>Add</button>
                </div>
            <div className={style.calContainer}>
                <div className={style.calScroll}>
                    {
                        cals.map((cal, index) => (
                            <Cal key={index} index={index} food={cal[0]} cal={cal[1]} cals={cals} setCals={setCals} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;