import './Contact.css';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Contact() {
    
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6f3b29ad-ad8f-4442-ade9-2511bbdf0354");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
       
        if (res.success) {
            Swal.fire({
                title: "Thank you!",
                text: "Your message has been sent",
                icon: "success"
              });
            // console.log("Success", res);
          }
        };
    
    return (
        <div className="contact-page">
            <h2 className="contact-header">Contact Me</h2>
            <div className='contact-content'>
                <form onSubmit={onSubmit} className='form'>
                    <div className='field'>
                        <label className='label'>
                            <input type="text" className="name" name="name" placeholder="name" required/>
                        </label>
                    </div>
                    <div className='field'>
                        <label className='label'>
                            <input type="text" className="email" name="email" placeholder="email" required/>
                        </label>
                    </div>
                    <div className='field'>
                        <label className='label-message'>
                            <textarea className="message" name='message' placeholder="message" required></textarea>
                        </label>
                    </div>
                    <button type='submit'>Contact Me</button>
                </form>
            </div>
        </div>
    );
}