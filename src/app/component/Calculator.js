import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Calculator.less'

class Calculator extends Component {
    state = {
        data: '',
    }

    handleInput = () => {
        this.setState({
            data: this.state.data + String(event.target.value)
        })
    }
    handleReset = () => {
        this.setState({
            data: ""
        })
    }
    handleCalculate = () => {
        const regex = /\d+[\+\-\*]\d+/;
        console.log(this.state.data.replace(regex, '').length)
        if (this.state.data.replace(regex, '').length !== 0) {
            this.handleReset();
        } else {
            this.setState({
                data: eval(this.state.data)
            })
        }

    }
    render() {
        return (
          <div className="calculator">
            <h1>在线计算器</h1>
            <div className="calPadSround">
              <input
                className="screen"
                type="text"
                readOnly={true}
                value={this.state.data}
              />
              <div className="calPad">
                <button id="multiply" value="+" onClick={this.handleInput}>
                  +
                </button>
                <button id="minus" value="-" onClick={this.handleInput}>
                  -
                </button>
                <button id="add" value="*" onClick={this.handleInput}>
                  X
                </button>
                <button value="1" onClick={this.handleInput}>
                  1
                </button>
                <button value="2" onClick={this.handleInput}>
                  2
                </button>
                <button value="3" onClick={this.handleInput}>
                  3
                </button>
                <button value="4" onClick={this.handleInput}>
                  4
                </button>
                <button value="5" onClick={this.handleInput}>
                  5
                </button>
                <button value="6" onClick={this.handleInput}>
                  6
                </button>
                <button value="7" onClick={this.handleInput}>
                  7
                </button>
                <button value="8" onClick={this.handleInput}>
                  8
                </button>
                <button value="9" onClick={this.handleInput}>
                  9
                </button>
                <button value="0" onClick={this.handleInput}>
                  0
                </button>
                <button id="reset" value="c" onClick={this.handleReset}>
                  Clear
                </button>
                <button id="equals" value="=" onClick={this.handleCalculate}>
                  =
                </button>
              </div>
            </div>

            <Link className="homeLinkInCal" to="/">
              回到主页
            </Link>
          </div>
        );
    };
}

export default Calculator;