
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import propTypes from 'prop-types';
import Input from './Input/input';
import './form.css';
import axios from 'axios';


// jshint ignore : start
export default function Form(props)
{
    // for debugging
    let on = true;

    const MAX_MSG_LENGTH = 4000;

    // name input
    const [personName, SetPersonName] = useState("");

    // company
    const [companyName, SetCompanyName] = useState("");

    // email
    const [emailName, SetEmailName] = useState("");

    // phone
    const [phoneName, SetPhoneName] = useState("");



    // message input
    const [message, SetMessage] = useState("");

    // finds the difference between max length and current length
    const [msgLenDifference, SetMsgLenDifference] = useState(MAX_MSG_LENGTH);


    function HandleNaming(event)
    {
        SetPersonName(props.TitleCase(event.target.value));
    }

    function HandleCompany(event)
    {
        SetCompanyName(event.target.value);
    }

    function HandleEmail(event)
    {
        SetEmailName(event.target.value);
    }
    function HandlePhone(event)
    {
        SetPhoneName(event.target.value);
    }

    function HandleMessage(event)
    {
        // console.log(event.target.value.length);
        // updates the message variable
        SetMessage(event.target.value);
        // get length difference and show the user num characters remaining accordingly
        SetMsgLenDifference(MAX_MSG_LENGTH - event.target.value.length);
    }

    // TODO add a 'message sent' pop up html element

    async function HandleSubmit(event)
    {
        // prevents pressing the submit button from
        // refreshing the page
        event.preventDefault();

        // bundle up information to send to the back-end
        // in an object
        const sendToBackend =
        {
            // before es6:
            // name: personName,
            // company: companyName,
            // email: emailName,
            // phone: phoneName

            // es6 and after:
            personName,
            companyName,
            emailName,
            phoneName,
            message
        };

        // use axios to send the data to the back-end
       await axios.post(`/api/sendMail`, sendToBackend);

    }

    const inputNames =
    {
        name: `name`,
        company: `company`,
        email: `email`,
        phone: `phone`,
        message: `message`
    };

    return (
        <div className="centerForm" style={{ display: on ? "block" : "none" }}>
            {/* this form will currently be submitted to the home page */}
            <h2 className="major">Contact Me</h2>

            <form method="POST" action="/api/sendMail">

                <div className="card Card">
                    <div className="card-body card_body">

                        <Input type={"text"} name={inputNames.name} value={personName} functionHandler={HandleNaming} placeholder={"first and last name"} autofocus={true} />
                        <Input type={"text"} name={inputNames.company} value={companyName} functionHandler={HandleCompany} placeholder={inputNames.company} />
                        <Input type={"email"} name={inputNames.email} value={emailName} functionHandler={HandleEmail} placeholder={inputNames.email} />
                        <Input type={"tel"} name={inputNames.phone} value={phoneName} functionHandler={HandlePhone} placeholder={inputNames.phone} />

                        <div className="form-group">
                            <textarea
                                className="form-control"
                                onChange={HandleMessage}
                                name={inputNames.message}
                                value={message}
                                rows="10"
                                maxLength={MAX_MSG_LENGTH}
                                placeholder="message"
                                required>
                            </textarea>
                            <div style={{ color: msgLenDifference <= 0 ? "red" : null }}>{msgLenDifference} remaining characters</div>
                        </div>

                        <button type="submit" onClick={HandleSubmit} className="btn btn-light btn-block">Send Message</button>

                    </div>

                </div>

            </form>
        </div>
    )
}

Form.propTypes = {
    TitleCase: propTypes.func,
};
