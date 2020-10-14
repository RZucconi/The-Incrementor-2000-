import React, { Component } from 'react';

class Increment extends Component {
    constructor(props){
        super(props);
        this.state={count:0}

        this.encrementPlusOne = this.encrementPlusOne.bind(this)
        this.encrementMinusOne = this.encrementMinusOne.bind(this)
        this.reset = this.reset.bind(this)
    }

    encrementPlusOne(){
        const {count} = this.state
        this.setState({count: count + 1})
    }

    encrementMinusOne(){
        const {count} = this.state
        this.setState({count: count - 1})
    }

    reset(){
        this.setState({count: 0})
    }

    render(){
        const {count} = this.state
        return(
        <div>
            <h1>The Encrementor 2000 :</h1>
            <h2>The count is : {count}</h2>
            <p>
                <button onClick={this.encrementMinusOne}>-1</button>
                <button onClick={this.encrementPlusOne}>+1</button>
                <button onClick={this.reset}>Reset</button>
            </p>
        </div>
        )}
}

export default Increment;