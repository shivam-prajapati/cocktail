import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                "background-color": '#' + Math.floor(Math.random() * 16777215).toString(16)
            }
        }
    }

    render() {
        const onC = () => {
            let randColour = Math.floor(Math.random() * 16777215).toString(16);
            console.log(randColour)
            this.setState({
                style: {
                    "background-color": '#' + randColour
                }
            })
        }

        return <div className="square" onClick={onC} style={this.state.style} >click to change colour</div>
    }
}

export default Square