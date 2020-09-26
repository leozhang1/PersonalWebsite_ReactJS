import React from 'react';
import './collapsible.css';
import propTypes from 'prop-types';

// jshint ignore : start

export default function Collapsible(props)
{
    return (
        <div className="centerText collapsibleFont">

            <button type="button" className="btn btn-dark btn-block" data-toggle="collapse" data-target={"#"+props.stringId}>
                <div className="collapsibleFont">
                    {props.title}
                </div>
            </button>

            <article id={props.stringId} className="collapse">
                <p></p>
                {/* add image here */}
                <img className="resizeSelfie" src={props.imageURL} alt=""/>
                <p>{props.text}</p>
                <div>{props.moreText}</div>

                {/* show your projects */}
                {/* Senior design C# Backend API  */}
                {/* Vacation Website */}

                {/* React keeper App */}
                {/* Unity AR project (real-time and historical) */}
                {/* Desperate Escape */}
                {/* Showcase a native iOS application eventually */}

                {props.isWork && <a href="https://github.com/leozhang1" className="fab fa-github"> <span>GitHub</span> </a>}
                {props.isIntro && <a href="https://www.linkedin.com/in/leo-zhang-2532a219a/" className="fab fa-linkedin"> <span>LinkedIn</span> </a>}
            </article>
        </div>
    );
}


// typecheck component properties
Collapsible.propTypes = {
    imageURL: propTypes.string,
    text: propTypes.string,
    title: propTypes.string,
    moreText: propTypes.string
}

