import React, { useContext, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AppContext } from '@/Context/AppContext';

function ContactForm() {

  const { traduccion } = useContext(AppContext);

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
      alert(traduccion.home.contactForm.fields.messages.agreeRequired);
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
          alert(traduccion.home.contactForm.fields.messages.success);
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
          alert(traduccion.home.contactForm.fields.messages.failure);
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto lg:mt-10  p-6 rounded-md shadow-lg ">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">{traduccion.home.contactForm.fields.firstName.label}</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={traduccion.home.contactForm.fields.firstName.placeholder}
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">{traduccion.home.contactForm.fields.lastName.label}</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={traduccion.home.contactForm.fields.lastName.placeholder}
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">{traduccion.home.contactForm.fields.companyName.label}</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder={traduccion.home.contactForm.fields.companyName.placeholder}
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">{traduccion.home.contactForm.fields.companyPhone.label}</label>
            <input
              type="text"
              name="companyPhone"
              value={formData.companyPhone}
              onChange={handleChange}
              placeholder={traduccion.home.contactForm.fields.companyPhone.placeholder}
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">{traduccion.home.contactForm.fields.companyName.placeholder}</label>
          <input
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            placeholder={traduccion.home.contactForm.fields.companyEmail.placeholder}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">{traduccion.home.contactForm.fields.industry.label}</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
          >
            <option value="Medical">{traduccion.home.contactForm.fields.industry.options[0]}</option>
            <option value="Technology">{traduccion.home.contactForm.fields.industry.options[1]}</option>
            <option value="Education">{traduccion.home.contactForm.fields.industry.options[2]}</option>
            <option value="Finance">{traduccion.home.contactForm.fields.industry.options[3]}</option>
            <option value="Finance">{traduccion.home.contactForm.fields.industry.options[4]}</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">{traduccion.home.contactForm.fields.subject.label}</label>
          <textarea
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={traduccion.home.contactForm.fields.subject.placeholder}
            className="mt-1 block w-full p-2 border rounded-md h-24"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">{traduccion.home.contactForm.fields.message.label}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={traduccion.home.contactForm.fields.message.placeholder}
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
          {traduccion.home.contactForm.fields.agree.label[0]} <a href="/privacy-policy" className="text-[#95BC67] underline">{traduccion.home.contactForm.fields.agree.label[1]} </a>.
          </label>
        </div>
        <button
          type="submit"
          className="w-[151px] py-3 bg-[#95BC67] text-white rounded-[34px] text-lg font-semibold hover:bg-green-700"
        >
           {traduccion.home.contactForm.button}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
