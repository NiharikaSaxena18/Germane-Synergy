"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
  <section className="pt-36 px-6 bg-gray-100 min-h-screen">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
      
      {/* Left Side - Office Details */}
      <div>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Head Office
        </h1>

        <div className="text-gray-600 space-y-2 leading-relaxed">
          <p>Suite 6, Block C, Eko Court Complex,</p>
          <p>Kofo Abayomi Street, Victoria Island,</p>
          <p>Lagos, Nigeria.</p>
        </div>

        <div className="mt-6 text-gray-700">
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> +234-80-86050191
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@germanesynergy.com"
              className="text-blue-600 hover:underline"
            >
              info@germanesynergy.com
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);
}