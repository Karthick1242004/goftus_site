import React, { useState } from 'react';
import axios from 'axios';

function Mail() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phno: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('https://goftus-backend.onrender.com/send-email', formData); // Ensure the URL matches your backend
      if (response.status === 200) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', phno: '', message: '' });
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <>
      <h1 className='text-white text-4xl  text-center pb-10 pt-10'>Contact Us</h1>
      <div className='flex justify-center items-center pb-10 px-5 sm:px-0'>
        <div className='w-full max-w-md bg-[#181321] p-8 rounded-lg shadow-lg'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='flex flex-col'>
              <label className='text-gray-300'>Name</label>
              <input
                className='mt-1 p-2 bg-gray-700 border border-gray-600 rounded text-white'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-300'>Email</label>
              <input
                className='mt-1 p-2 bg-gray-700 border border-gray-600 rounded text-white'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-300'>Phone No</label>
              <input
                className='mt-1 p-2 bg-gray-700 border border-gray-600 rounded text-white'
                name='phno'
                value={formData.phno}
                onChange={handleChange}
                placeholder='Enter your phone number'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-300'>Message</label>
              <textarea
                className='mt-1 p-2 bg-gray-700 border border-gray-600 rounded text-white h-32 resize-none'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Enter your message'
                required
              />
            </div>
            <button className='w-full py-2 px-4 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Mail;
