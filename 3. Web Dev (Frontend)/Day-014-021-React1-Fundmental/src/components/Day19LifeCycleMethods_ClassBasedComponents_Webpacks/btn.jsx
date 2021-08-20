import React from 'react';
import style from './style.module.css';

class Button extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    handleCount =() =>{
        this.setState((prev) => {
            return {
                count: prev.count + 1
            }
        } )
    }

    render(){
        return (
            <div>
            <button className={style.btn} onClick={this.handleCount}> {this.state.count} </button>
             <p className={style.btnDesc} >{this.props.player}</p> 
             {/* Props and states are passed by default to the class as 'this.props' and 'this.states' */}
            </div>
        )
    }
}

const BtnSet = () =>{
    return (
        <div className={style.btnSuperContainer}>
            <div className={style.btnContainer}>
                <h1 className={style.btnHeading}>Score of Each Player</h1> 
                <div className={style.btnSet}>
                    <Button player="1" />
                    <Button player="2" />
                    <Button player="3" />
                    <Button player="4" />
                </div>
            </div> 
        </div>

    )
}
export default BtnSet;