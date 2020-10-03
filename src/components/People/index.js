import React from "react";

const People = () => {

    let names = ['Zoe', 'Hillary', 'Matt', 'Richard', 'Alice', 'Erica', 'Danielle', 'Avi'];

    return (
        <ul>
            { names.map((name, index) => (
                <li key={ index }>{ name }</li>
            ))}
        </ul>
    )
}

export default People;