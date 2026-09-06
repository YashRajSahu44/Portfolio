import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// Fill these in with your own EmailJS service, template, and public key.
// https://www.emailjs.com/docs/sdk/send/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'tJGcnrE2x6VvmO6T_'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus('error')
      })
  }

  return (
    <section className="contact-section" id="contact">
      <form className="contact-form" id="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Your Name" required />

        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Your Email" required />

        <label>Message</label>
        <textarea id="message" name="message" placeholder="Enter Your Message" required></textarea>

        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>

        {status === 'success' && <p style={{ marginTop: '12px', fontWeight: 600 }}>Message sent — thanks!</p>}
        {status === 'error' && <p style={{ marginTop: '12px', fontWeight: 600, color: '#ff6b6b' }}>Something went wrong. Please try again.</p>}
      </form>
    </section>
  )
}
