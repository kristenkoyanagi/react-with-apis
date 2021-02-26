import React from 'react';
import './Footer.css';

function Footer(props) { 
    return(
        <div className="footer">
            {props.title}
        </div>
    )
}

export default Footer;