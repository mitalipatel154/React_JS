import React, { Component } from "react";

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        console.log("Constructor called");
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    componentWillUnmount() {
        console.log("Component Unmounted");
    }

    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <p>Count: {this.state.count}</p>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase</button>
            </div>
        );
    }
}

export default ClassComponent;
