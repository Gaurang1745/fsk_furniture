import React, { useState } from "react";
import { IoLocationSharp, IoPhonePortrait, IoMail } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., call an API or send an email)
    console.log("Form submitted", formData);
  };

  return (
    <section className="section pt-[125px]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Right Section: Google Map and Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>

            <div className="relative h-80">
              {/* Embed Google Map here */}
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.533491032898!2d-83.04853399999999!3d42.3098187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2ddea0ef6323%3A0x78bfafa83f54d6d5!2sFSK%20Furniture!5e0!3m2!1sen!2sin!4v1731864160838!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="absolute top-0 left-0 rounded-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <IoLocationSharp className="text-primary-500 text-xl" />
                <p className="text-lg">
                  1039 Wyandotte St W, Windsor, ON, N9A 5Y6
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <IoPhonePortrait className="text-primary-500 text-xl" />
                <p className="text-lg">+1 519 992 8454</p>
              </div>
              <div className="flex items-center space-x-4">
                <IoMail className="text-primary-500 text-xl" />
                <p className="text-lg">fskhouseholdltd@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Left Section: Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-700 mb-6">
              We'd love to hear from you! Fill out the form below or reach us
              directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg  focus:outline-golden focus:border-golden"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-golden focus:border-golden"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-golden focus:border-golden"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-lg font-medium text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-golden hover:border-golden hover:text-white transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
