import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        this.props.handleInputChange(event);
    }

    handleAddClick() {
        //code fot button here
    }

    render() {
        const { university, subject, studyFrom, studyTill } = this.props
        return (
            <div className="mainInputs">
                <div className="inputs">
                    <label>University name</label>
                    <input type="text" name="university"
                        value={university} onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>Subject</label>
                    <input type="text" name="subject"
                        value={subject} onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>From</label>
                    <input type="email" name="studyFrom"
                        value={studyFrom} onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>Phone</label>
                    <input type="text" name="studyTill"
                        value={studyTill} onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <input type="button" value="Add" />
                </div>
            </div>
        );
    }
}

export default Education;