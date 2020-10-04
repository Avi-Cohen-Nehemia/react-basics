import React from "react";
import propTypes from 'prop-types';
import Header from './../Header';
import Square from './../Square';
import Paragraph from './../Paragraph';
import People from './../People';
import Basket from './../Basket';

const Stuff = ({ square }) => {
    return (
        <>
            { /* any value we pass into a component that is not defined as a prop will be regarded as the 'children' prop */}
            <Header>Hello world!</Header>
            <Paragraph>I am the "children" prop!</Paragraph>
            { square ? <Square color={ "green" } /> : null }
            <People
                // props are variables we pass down to a component to use
                names={ ['Zoe', 'Hillary', 'Matt', 'Richard', 'Alice', 'Erica', 'Danielle', 'Avi'] }
            />
            <Basket
                items={ [
                    { name: "Coffee", price: 2.10 },
                    { name: "Bananas", price: 3.50 },
                    { name: "Milk", price: 250.65 },
                    { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
                ] }
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