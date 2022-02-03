import React, { useState } from 'react';
import styled from 'styled-components';
// import emailjs from 'emailjs-com';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/newline-after-import
// eslint-disable-next-line import/no-unresolved

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // function sendEmail(e) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       'service_ct1fvme',
  //       'template_13pcg5h',
  //       e.target,
  //       'user_9f2iD2nF8y3PsbcbRCqNw'
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStyle>
      {/* <Helmet>
        <script src="https://smtpjs.com/v3/smtp.js"> </script>
        <script>
          function sendEmail(){' '}
          {
            // eslint-disable-next-line no-undef
            email
              .send({
                Host: 'smtp.gmail.com',
                Username: 'harshgargthapar@gmail.com',
                Password: '9501761082hgt',
                To: 'harshgargthapar@gmail.com',
                From: document.getElementById('email'),
                Subject: 'This is the subject',
                Body: 'And this is the body',
              })
              .then((err) => alert(err))
          }
        </script>
      </Helmet> */}
    </>
  );
}
