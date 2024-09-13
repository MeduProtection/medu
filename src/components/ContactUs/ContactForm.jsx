import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    companyPhone: '',
    companyEmail: '',
    industry: 'Medical',
    subject: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert('Please agree to the privacy policy.');
      return;
    }

    const templateParamsDatos = {
      cliente_correo: formData.companyEmail,
      cliente_nombre: formData.firstName,
      cliente_apellido: formData.lastName,
      cliente_empresa: formData.companyName,
      cliente_telefono: formData.companyPhone,
      cliente_industria: formData.industry,
      cliente_asunto: formData.subject,
      cliente_mensaje: formData.message
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParamsDatos,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        // Reemplaza con tu user ID de emailjs
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent!');
          setFormData({
            firstName: '',
            lastName: '',
            companyName: '',
            companyPhone: '',
            companyEmail: '',
            industry: 'Medical',
            subject: '',
            message: '',
            agree: false,
          });
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto lg:mt-10  p-6 rounded-md shadow-lg ">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Name"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Company Phone</label>
            <input
              type="text"
              name="companyPhone"
              value={formData.companyPhone}
              onChange={handleChange}
              placeholder="Company Phone"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company E-mail</label>
          <input
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            placeholder="Company E-mail"
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Industry</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
          >
            <option value="Medical">Medical</option>
            <option value="Technology">Technology</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option value="Finance">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Subject</label>
          <textarea
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Text here"
            className="mt-1 block w-full p-2 border rounded-md h-24"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Text here"
            className="mt-1 block w-full p-2 border rounded-md h-24"
          ></textarea>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="h-4 w-4 text-[#95BC67] border-gray-300 rounded"
            required
          />
          <label className="ml-2 block text-gray-700">
            I agree to our friendly <a href="/privacy-policy" className="text-[#95BC67] underline">privacy policy</a>.
          </label>
        </div>
        <button
          type="submit"
          className="w-[151px] py-3 bg-[#95BC67] text-white rounded-[34px] text-lg font-semibold hover:bg-green-700"
        >
          Get Started
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
