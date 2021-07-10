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
                    <Card name={food[0].name} cal={food[0].cal} />
                    <Card name={food[1].name} cal={food[1].cal} />
                    <Card name={food[2].name} cal={food[2].cal} />
                    <Card name={food[3].name} cal={food[3].cal} />
                    <Card name={food[4].name} cal={food[4].cal} />
                    <Card name={food[5].name} cal={food[5].cal} />
                    <Card name={food[6].name} cal={food[6].cal} />
                </div>
            </div>
        </div>
    )
}

export default CalChart;