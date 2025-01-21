'use client'

import { useForm, ValidationError } from '@formspree/react'

function ContactForm() {
  const [state, handleSubmit] = useForm("xanqwbbo")

  if (state.succeeded) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-green-800 font-semibold text-lg mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your message has been sent successfully. We'll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>

      <ValidationError errors={state.errors} className="mt-2 text-sm text-red-600" />
    </form>
  )
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
            Contact Us
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
