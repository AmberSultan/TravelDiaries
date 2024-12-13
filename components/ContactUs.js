"use client";

import React from 'react'

function ContactUs() {
  return (
    <div className="py-0 pb-12 bg-gray-100">
    <div className="max-w-4xl mx-auto px-4 text-center">

      <h1 className="text-xl sm:text-5xl md:text-4xl font-bold mb-4 text-gray-800">
        Get in Touch
      </h1>
      <div className='border p-4 rounded-lg shadow-md  mx-auto'>
  <form className='space-y-4'>
    {/* Name Input */}
    <div>
      <label
        htmlFor="name"
        className='block text-sm font-medium text-gray-700 text-left'
      >
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className='mt-1 bg-transparent block w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  focus:border-gray-500'
        placeholder="Enter your name"
      />
    </div>

    {/* Email Input */}
    <div>
      <label
        htmlFor="email"
        className='block text-sm font-medium text-gray-700 text-left'
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className='mt-1 bg-transparent block w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  focus:border-gray-500'
        placeholder="Enter your email"
      />
    </div>

    {/* Message Input */}
    <div>
      <label
        htmlFor="message"
        className='block text-sm font-medium text-gray-700 text-left'
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className='mt-1 bg-transparent block w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  focus:border-gray-500'
        placeholder="Write your message here"
        rows="4"
      />
    </div>

    {/* Submit Button */}

    <div>
      <button
        type="submit"
        className='w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none '
      >
        Submit
      </button>
    </div>
  </form>
</div>



    </div>
    </div>
  )
}

export default ContactUs
