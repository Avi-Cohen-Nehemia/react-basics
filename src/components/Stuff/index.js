import React from "react";
import Header from './../Header'
import Square from './../Square'
import Paragraph from './../Paragraph'
import People from './../People'

const Stuff = () => {
    return (
        <>
            <Header
                // props are variables we pass down to a component to use
                text={ "Hello Wrold!" }
            />
            <Paragraph />
            <Square
                color={ "green" }
            />
            <People
                names={ ['Zoe', 'Hillary', 'Matt', 'Richard', 'Alice', 'Erica', 'Danielle', 'Avi'] }
            />
        </>
    )
}

export default Stuff;