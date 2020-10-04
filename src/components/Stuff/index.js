import React from "react";
import Header from './../Header'
import Square from './../Square'
import Paragraph from './../Paragraph'
import People from './../People'

const Stuff = () => {
    return (
        <>
            <Header
                text={ "Hello Wrold!" }
            />
            <Paragraph />
            <Square />
            <People />
        </>
    )
}

export default Stuff;