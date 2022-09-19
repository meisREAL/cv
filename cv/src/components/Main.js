import React, { Component } from "react";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',

        }
    }
    render() {
        return (
            <div className="main">
                Place for CV components
            </div>
        );
    }
}

export default Main;