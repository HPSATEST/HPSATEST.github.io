import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './CSS Files/Contact.css';

function Contact() {
    return (
        <div className='contact-wrap' id='Contact'>
            <section className='content'>
                <h1>Contact <span style={{ color: '#FF004F' }}>.</span> </h1>
                <p>Hey, send me an email if you want to connect! Additionally, you can find me on <a className='linked-in' href="https://www.linkedin.com/">LinkedIn</a>, shoot a message if you have to!</p>
                <a className="email" href="mailto:Akshay2334@hotmail.com">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "white", marginRight: "5px" }} />
                    Akshay2334@hotmail.com
                </a>
            </section>
        </div>
    );
}

export default Contact;
