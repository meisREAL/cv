import React, { Component } from "react";
import PersonalInformation from "./PersonalInformation";
import Education from "./Education";
import Work from "./Work";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',

            university: '',
            subject: '',
            studyFrom: '',
            studyTill: '',

            position: '',
            company: '',
            workedFrom: '',
            workedTill: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        // place for code here xD
    }

    render() {
        const { firstName, lastName, email, phone, university,
            subject, studyFrom, studyTill, position, company, workedFrom, workedTill } = this.state
        return (
            <form>
                <PersonalInformation
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phone={phone}
                    handleInputChange={this.handleChange}
                />
                <Education
                    university={university}
                    subject={subject}
                    studyFrom={studyFrom}
                    studyTill={studyTill}
                    handleInputChange={this.handleChange}
                />
                <Work
                    position={position}
                    company={company}
                    workedFrom={workedFrom}
                    workedTill={workedTill}
                    handleInputChange={this.handleChange}
                />
                <input type='button' value='Submit' />
            </form>
        );
    }
}

export default Main;