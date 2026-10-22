"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4">
      {sent && (
        <div className="alert alert-success">
          Thank you! We have received your message.
        </div>
      )}
      <input
        type="text"
        placeholder="Your Name"
        className="form-control mb-3"
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        className="form-control mb-3"
        required
      />
      <textarea
        rows={4}
        placeholder="Your Message"
        className="form-control mb-3"
        required
      />
      <button type="submit" className="btn btn-fill w-100">
        Send Message
      </button>
    </form>
  );
}
