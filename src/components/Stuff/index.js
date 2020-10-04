import React from "react";
import propTypes from 'prop-types';
import Header from './../Header';
import Square from './../Square';
import Paragraph from './../Paragraph';
import People from './../People';

const Stuff = ({ square }) => {
    return (
        <>
            <Header
                // props are variables we pass down to a component to use
                text={ "Hello Wrold!" }
            />
            <Paragraph />
            { square ?
                <Square
                    color={ "green" }
                />
            : null }
            
            <People
                names={ ['Zoe', 'Hillary', 'Matt', 'Richard', 'Alice', 'Erica', 'Danielle', 'Avi'] }
            />
        </>
    )
}

Stuff.defaultProps = {
    square: true,
}

Stuff.propTypes = {
    square: propTypes.bool,
}

export default Stuff;