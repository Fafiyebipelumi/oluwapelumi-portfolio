'use client';

import React, { useState } from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
  
          const result = await response.json()
          console.log(result);
  
          if (result.success) {
            alert("Message sent successfully!");
          } else {
            alert("Failed to send message.");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
        }
        
        // if (response.ok) {
        //   alert("Message sent successfully!");
        //   setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        // } else {
        //   alert("Error sending message.");
        // }
      };

  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
        <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>
            Let's work together!
        </h1>
        <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>Kindly fill the form and let's get your dream project done!</p>
        {/* Input field */}
        <form className='mt-8 block w-full overflow-hidden' onSubmit={handleSubmit}>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <input type="text" placeholder='First Name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' name='firstName' value={formData.firstName} onChange={handleChange} />
                <input type="text" placeholder='Last Name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' name='lastName' value={formData.lastName} onChange={handleChange} />
            </div>
            <div className='flex mt-5 flex-col md:flex-row items-center justify-between gap-4'>
                <input type="email" placeholder='Email Address' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' name='email' value={formData.email} onChange={handleChange} />
                <input type="text" placeholder='Phone Number' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' name='phone' value={formData.phone} onChange={handleChange} />
            </div>
            <textarea rows={7} placeholder='Message' className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none' name='message' value={formData.message} onChange={handleChange}></textarea>
            <div className='mt-4'>
                <button type='submit' className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm;