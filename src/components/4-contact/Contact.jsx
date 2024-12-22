import React, { useState } from 'react'
import './contact.css'
import { useForm, ValidationError } from '@formspree/react'
import Lottie from 'lottie-react'
import doneAnimation from '../../animation/done.json'
import contactAnimation from '../../animation/contact-us.json'
function Contact() {
  const [state, handleSubmit] = useForm('mvgogaww')
  const [email, setEmail] = useState('')
  const [message, setMassage] = useState('')

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div className="flex">
        <form action="" onSubmit={handleSubmit} id="formContact">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex">
            <label htmlFor="massage">Your Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMassage(e.target.value)}
              required
              name="message"
              id="massage"
              placeholder="Massage"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? 'Submitting ...' : 'Submit'}
          </button>
          {state.succeeded && (
            <p className="flex message">
              <Lottie
                loop={false}
                className="done"
                animationData={doneAnimation}
              />
              Your Message sent successfully 👌!
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contact-animation"
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  )
}
export default Contact
