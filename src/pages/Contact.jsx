import './Contact.css';
import { useState, useEffect } from 'react';

export default function Contact() {
    return (
        <div className="contact-page">
            <h2 className="contact-header">Contact</h2>
            <div className='contact-content'>
                <form className='form'>
                    <div className='field'>
                        <label className='label'>Name:
                            <input type="text" className="name" name="name" placeholder="what's your name?" />
                        </label>
                    </div>
                    <div className='field'>
                        <label className='label'>Email:
                            <input type="text" className="email" name="email" placeholder="what's your email address?" />
                        </label>
                    </div>
                    <div className='field'>
                        <label className='label-message'>Message:
                            <textarea className="message" rows="8" cols="50" placeholder="type your message here"></textarea>

                        </label>
                    </div>
                    <button>Contact Me</button>
                </form>
            </div>
        </div>
    );
}