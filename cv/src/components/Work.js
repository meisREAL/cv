import React, { Component } from "react";

class Work extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.handleInputChange(event);
    }

    render() {
        const { position, company, workedFrom, workedTill } = this.props
        return (
            <div className="mainInputs">
                <div className="inputs">
                    <label>Position</label>
                    <input
                        type="text"
                        name="position"
                        value={position}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>Company</label>
                    <input
                        type="text"
                        name="lastName"
                        value={company}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>Email</label>
                    <input type="email" name="email"
                        value={email} onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>From</label>
                    <input
                        type="text"
                        name="workedFrom"
                        value={workedFrom}
                        onChange={this.handleInputChange}
                    />
                </div>
            </div>
        );
    }
}

export default Work;