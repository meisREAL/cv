import React, { Component } from "react";
import PersonalInformation from "./PersonalInformation";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',

        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        // place for code here xD
    }

    render() {
        const { firstName, lastName, email, phone } = this.state
        return (
            <form>
                <PersonalInformation firstName={firstName}
                    lastName={lastName} email={email} phone={phone}
                    handleInputChange={this.handleChange}
                />
                <input type='button' value='Submit' />
            </form>
        );
    }
}

export default Main;