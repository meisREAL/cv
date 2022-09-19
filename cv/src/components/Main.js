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

        }
    }

    handleSubmit(event) {
        // place for code here xD
    }

    render() {
        return (
            <form>
                <PersonalInformation />
                <input type='button' value='Submit' />
            </form>
        );
    }
}

export default Main;