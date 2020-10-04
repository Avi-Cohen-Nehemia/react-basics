import React from "react";
import propTypes from 'prop-types';
import Header from './../Header';
import Square from './../Square';
import Paragraph from './../Paragraph';
import People from './../People';

const Stuff = ({ square }) => {
    return (
        <>
            { /* any value we pass into a component that is not defined as a prop will be regarded as the 'children' prop */}
            <Header>Hello world!</Header>
            <Paragraph />
            { square ? <Square color={ "green" } /> : null }
            <People
                // props are variables we pass down to a component to use
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