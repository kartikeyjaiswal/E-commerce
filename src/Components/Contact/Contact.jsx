// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',  
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }

        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs.send(
            'service_d7qx6ci',
            'template_4s0i78h',
            templateParams,
            'mT4k_tNtGIeBKN2_y'
        ).then((response) => {
            console.log('Email successfully sent:', response.status, response.text);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }).catch((error) => {
            console.error('Email sending failed:', error);
            alert('Failed to send message, please try again later.');
        });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Contact Us</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </label>
                <label className={styles.label}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </label>
                <label className={styles.label}>
                    Contact Number:
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>
                <label className={styles.label}>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={styles.textarea}
                    />
                </label>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" className={styles.button}>Submit</button>
                </div>
                {submitted && <p className={styles.successMessage}>Thank you for contacting us!</p>}
            </form>
        </div>
    );
}

export default ContactForm;
