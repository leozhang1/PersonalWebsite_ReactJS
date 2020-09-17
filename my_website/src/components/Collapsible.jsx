import React from 'react';
import '../css/collapsible.css';
import propTypes from 'prop-types';

// jshint ignore : start

export default function Collapsible(props)
{
    return (
        <div className="centerText collapsibleFont">
            <button type="button" className="btn btn-info btn-block" data-toggle="collapse" data-target={"#"+props.stringId}>
                <div className="collapsibleFont">
                    {props.title}
                </div>
            </button>

            <article id={props.stringId} className="collapse">
                <p></p>
                {/* add image here */}
                <img className="resizeSelfie" src={props.imageURL} alt=""/>
                <p>{props.text}</p>
                {/* {React.createElement('h1', null, 'hello')} */}
            </article>
        </div>
    );
}


// typecheck component properties
Collapsible.propTypes = {
    imageURL: propTypes.string,
    text: propTypes.string,
}

