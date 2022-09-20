import React, { Component } from "react";

class PersonalInformation extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        this.props.handleInputChange(event);
    }

    render() {
        const { firstName, lastName, email, phone } = this.props;
        return (
            <div className="mainInputs">
                <h2>Personal Information</h2>
                <div className="inputs">
                    <label>First name</label>
                    <input type="text" name="firstName"
                        value={firstName} onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>Last name</label>
                    <input type="text" name="lastName"
                        value={lastName} onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>Email</label>
                    <input type="email" name="email"
                        value={email} onChange={this.handleInputChange}
                    />
                </div>
                <div className="inputs">
                    <label>Phone</label>
                    <input type="tel" name="phone"
                        value={phone} onChange={this.handleInputChange}
                    />
                </div>
            </div>
        );
    }
}

export default PersonalInformation;