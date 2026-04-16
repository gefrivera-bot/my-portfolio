import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section-block contact-block" id="contact">
      <div className="section-header">
        <p className="section-label">Let's build</p>
        <h2>Ready to work together?</h2>
      </div>
      <div className="contact-content">
        <div className="contact-panel">
          <p>
            I work with ambitious teams who want to create thoughtful, performance-first digital experiences.
            Reach out for front-end architecture, motion-driven interfaces, and strategic product tooling.
          </p>
          <a className="contact-button" href="mailto:hello@gefrivera.dev">
            hello@gefrivera.dev
          </a>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={5}
            />
          </div>
          
          <button type="submit" className="form-submit">
            Send Message
          </button>
          
          {submitted && <div className="form-success">Thanks for reaching out!</div>}
        </form>
      </div>
    </section>
  );
}
