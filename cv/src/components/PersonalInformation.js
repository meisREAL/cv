import React, { Component } from "react";

class PersonalInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainInputs">
                <div className="inputs">
                    <label>First name</label>
                    <input type="text" name="firstName" />
                </div>
                <div className="inputs">
                    <label>Last name</label>
                    <input type="text" name="lastName" />
                </div>
                <div className="inputs">
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="inputs">
                    <label>Phone</label>
                    <input type="tel" name="phone" />
                </div>
            </div>
        );
    }
}

export default PersonalInformation;