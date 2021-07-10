import React from 'react';
import style from './style.module.css';

const Card =(prop) =>{
    console.log( "hgehef");
    // var page = {
    //         name: "Pizza",
    //         cal: "56"
    //     }
    return(
        <div className = {style.calCard}>
            <h1 className={style.name}>{prop.name}</h1>
            <hr style={{margin: "5px 0px"}}/>
            <p className={style.para}>You have consumed {prop.cal} cals today</p>
        </div>
    );
};

const CalChart = () =>{
    var food = [
        {
            name: "Pizza",
            cal: "56"
        },{
            name: "Burger",
            cal: "69"
        },{
            name: "Coke",
            cal: "500"
        },{
            name: "Browne",
            cal: "180"
        },{
            name: "Fried Rice",
            cal: "90"
        },{
            name: "Lassania",
            cal: "200"
        },{
            name: "Pani Puri",
            cal: "10"
        }
    ];
    
    return (
        <div>
            <h1 className={style.calHeading}>Calorie meter</h1>
            <div className={style.calContainer}>
                <div className={style.calScroll}>
                    {
                        food.map(ele  => {
                            return <Card name={ele.name} cal={ele.cal} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CalChart;