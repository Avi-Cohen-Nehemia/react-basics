import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = ({ links }) => {
    return (
        <ul className='d-flex justify-content-around'>
            {links.map((link, index) => (
                <li key={index}><Link to={`/${link}`}>{link}</Link></li>
            ))}
        </ul>
    )
}

Footer.propTypes = {
    links: PropTypes.array,
}

export default Footer;