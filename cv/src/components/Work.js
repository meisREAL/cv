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
                <h2>Work experience</h2>
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
                        name="company"
                        value={company}
                        onChange={this.handleInputChange}
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
                <div className="inputs">
                    <label>Till</label>
                    <input
                        type="text"
                        name="workedTill"
                        value={workedTill}
                        onChange={this.handleInputChange}
                    />
                </div>
            </div>
        );
    }
}

export default Work;