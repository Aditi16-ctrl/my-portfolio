import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import emailjs from "@emailjs/browser";
// Recipient email address for mailto (users will compose an email to this address)
const CONTACT_EMAIL = "aditibabar9421@gmail.com";

// EmailJS configuration - replace these with the values from your EmailJS dashboard
const EMAILJS_SERVICE_ID = "service_xqo6xcn"; // service ID provided by user
const EMAILJS_TEMPLATE_ID = "template_9vl6am8"; // template ID provided by user
const EMAILJS_USER_ID = "9xb8EnRSzKPSK-ZZp"; // public key provided by user
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    width: 100%;
    align-items: center;
    margin-bottom: 50px;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 960px) {
        font-size: 16px;
    }
`;

const ContactForm = styled.form`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 32px;
    border-radius: 12px;
    box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
    margin-top: 28px;
    gap: 12px;
`;

const ContactTitle = styled.div`
    font-size: 28px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + '50'};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 10px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + '50'};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 10px 16px;
    resize: vertical; /* Allow resizing vertically */
    rows: 4;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactButton = styled.input`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: hsla(271, 100%, 50%, 1);
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
`;

const MailAnchor = styled.a`
    display: inline-block;
    text-align: center;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.primary || '#6b46c1'};
    color: ${({ theme }) => theme.primary || '#6b46c1'};
    padding: 10px 14px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    margin-bottom: 12px;
`;

const ContactInputName = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + '50'};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 10px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactInputSubject = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + '50'};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 10px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;


const Contact = () => {
    // Declare formData and handleChange state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const form = useRef();

    // Initialize EmailJS with your public key (optional if you pass userID to sendForm)
    useEffect(() => {
        if (EMAILJS_USER_ID && EMAILJS_USER_ID !== "your_public_key") {
            try {
                emailjs.init(EMAILJS_USER_ID);
            } catch (e) {
                // ignore if init isn't necessary
            }
        }
    }, []);

    // Handle form data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation: ensure EmailJS IDs are configured
        if (
            EMAILJS_SERVICE_ID === "your_service_id" ||
            EMAILJS_TEMPLATE_ID === "your_template_id"
        ) {
            alert(
                "EmailJS is not configured. The mailto link is available for users to send messages directly."
            );
            return;
        }

        emailjs
            .sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form.current,
                EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    alert("Message Sent");
                    if (form.current) form.current.reset(); // Reset form after submission
                },
                (error) => {
                    console.error(error);
                    alert("Failed to send message. Please try the mailto link or check EmailJS configuration.");
                }
            );
    };
    return (
        <Container id="Contact">
            <Wrapper>
                <Title>Contact</Title>
                <Desc style={{ marginBottom: "40px" }}>
                    Feel free to reach out to me for any questions
                </Desc>
                {/* Direct email link (opens user's mail client). Update CONTACT_EMAIL above. */}
                <MailAnchor
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Contact from portfolio")}&body=${encodeURIComponent("Hi Aditi,%0D%0A%0D%0AI found your portfolio and would like to get in touch regarding...")}`}
                >
                    Email me directly
                </MailAnchor>

                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput
                        placeholder="Your email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <ContactInputName
                        placeholder="Your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <ContactInputSubject
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <ContactInputMessage
                        placeholder="Your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}  // Set rows to 4 for the textarea
                        required
                    />
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
            </Wrapper>
        </Container>
    );
};

export default Contact;
