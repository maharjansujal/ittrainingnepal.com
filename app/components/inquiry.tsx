'use client';

import { useState } from 'react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'Rust Programming', // Fixed value for course
    message: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-[400px] mx-auto p-6 rounded-lg shadow-2xl mt-14">
      <h2 className="text-[16px] font-bold mb-3">Send Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-[14px]  text-gray-700">Full Name<span className="text-[#dc3545] text-opacity-[0.7]"> *</span></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full p-2 mt-2 border-2 border-solid border-[#eee] rounded-md focus:outline-none "
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-[14px]  text-gray-700">Email<span className="text-[#dc3545] text-opacity-[0.7]"> *</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full p-2 mt-2 border-2 border-solid border-[#eee] rounded-[0.438em] focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-[14px]  text-gray-700">Phone<span className="text-[#dc3545] text-opacity-[0.7]"> *</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone: +977"
            required
            className="w-full p-2 mt-2 border-2 border-solid border-[#eee] rounded-md focus:outline-none "
          />
        </div>

        <div className="mb-4">
          <label htmlFor="course" className="block text-[14px]  text-gray-700">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            readOnly
            className="w-full p-2 mt-2 bg-gray-200 text-gray-600 border-2 border-solid border-[#eee] rounded-md cursor-not-allowed"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-[14px]  text-gray-700">Message<span className="text-[#dc3545] text-opacity-[0.7]"> *</span></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 mt-2 border-2 border-solid border-[#eee] rounded-md focus:outline-none "
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-[#004e98] text-white text-sm rounded-md hover:bg-[#003e7a] transition duration-300"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
