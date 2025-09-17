import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 container mx-auto px-6 text-center"
    >
      <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
      <p className="mb-4">
        Have questions? Reach out to us and make your journey safe with Travora.
      </p>
      <button className="px-6 py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition">
        Contact Us
      </button>
    </section>
  );
}

export default Contact;
