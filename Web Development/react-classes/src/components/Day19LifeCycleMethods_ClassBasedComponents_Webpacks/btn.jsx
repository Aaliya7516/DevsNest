import React from 'react';

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
            <button onClick={this.handleCount}> {this.state.count} </button>
        )
    }
}

const BtnSet = () =>{
    return (
        <div>
            <p>There are 4 counter component instances that each manage their own state.</p> 
            <Button />   
            <Button />   
            <Button />   
            <Button />   
        </div> 
    )
}
export default BtnSet;