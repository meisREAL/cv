import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        this.props.handleInputChange(event);
    }

    addEducationFields() {

    }

    handleAddClick() {
    }

    render() {
        const { university, subject, studyFrom, studyTill } = this.props
        return (
            <div className="mainInputs" id="eduInputs">
                <h2>Education</h2>
                <div className="inputs">
                    <label>University name</label>
                    <input
                        type="text"
                        name="university"
                        value={university}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>From</label>
                    <input
                        type="email"
                        name="studyFrom"
                        value={studyFrom}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>Till</label>
                    <input
                        type="text"
                        name="studyTill"
                        value={studyTill}
                        onChange={this.handleInputChange}
                    />
                </div>
                {/* <div className="inputs">
                    <input type="button" value="Add"
                        onClick={this.handleAddClick} />
                </div> */}
            </div>
        );
    }
}

export default Education;