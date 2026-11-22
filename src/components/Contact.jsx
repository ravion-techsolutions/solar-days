import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { buildEnquiryMessage, buildWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const requirementOptions = [
  'Residential Solar',
  'Commercial Solar',
  'Rooftop Solar',
  'General Enquiry',
  'Other',
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  location: '',
  requirement: '',
  message: '',
};

const validate = (form) => {
  const errors = {};
  const phoneDigits = form.phone.replace(/\D/g, '');
  const localPhone = phoneDigits.startsWith('91') && phoneDigits.length === 12 ? phoneDigits.slice(2) : phoneDigits;

  if (form.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[6-9]\d{9}$/.test(localPhone)) errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address or leave this blank.';
  }
  if (form.location.trim().length < 2) errors.location = 'Please enter your location.';
  if (!form.requirement) errors.requirement = 'Please choose a solar requirement.';
  if (form.message.trim().length < 10) errors.message = 'Please share a little more detail (at least 10 characters).';

  return errors;
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0];
      document.getElementById(`field-${firstInvalidField}`)?.focus();
      return;
    }

    openWhatsApp(buildEnquiryMessage(form));
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Contact Solar Days"
          title="Let's talk about your solar plans"
          copy="Share a few details and we will help you take the next step. You can also call, email or chat with our team directly."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal>
            <div className="h-full rounded-[1.6rem] bg-navy-900 p-7 text-white sm:p-9">
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{businessInfo.name}</h3>
              <p className="mt-5 flex gap-3 text-sm leading-7 text-white/70">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                <span>{businessInfo.address}</span>
              </p>

              <div className="mt-7 space-y-5 border-t border-white/10 pt-7">
                {businessInfo.contactPersons.map((person) => (
                  <div key={person.phone}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{person.name}</p>
                    <a
                      href={`tel:+91${person.phone}`}
                      className="mt-1.5 inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-orange"
                    >
                      <Phone className="h-4 w-4 text-orange" aria-hidden="true" />
                      {person.displayPhone}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Email</p>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="mt-1.5 inline-flex items-center gap-2 break-all text-sm font-semibold text-white transition-colors hover:text-orange"
                >
                  <Mail className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  {businessInfo.email}
                </a>
              </div>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
              <div className="mb-7">
                <h3 className="text-lg font-semibold text-navy-900">Send an enquiry</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">
                  This form opens WhatsApp with your message ready to send. Nothing is stored on this website.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="field-name" className="field-label">
                    Name <span className="text-royal">*</span>
                  </label>
                  <input
                    id="field-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={updateField('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="field-input"
                  />
                  {errors.name ? (
                    <p id="name-error" className="field-error" role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="field-phone" className="field-label">
                    Phone Number <span className="text-royal">*</span>
                  </label>
                  <input
                    id="field-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={updateField('phone')}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className="field-input"
                  />
                  {errors.phone ? (
                    <p id="phone-error" className="field-error" role="alert">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="field-email" className="field-label">
                    Email <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    id="field-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={updateField('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="field-input"
                  />
                  {errors.email ? (
                    <p id="email-error" className="field-error" role="alert">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="field-location" className="field-label">
                    Location <span className="text-royal">*</span>
                  </label>
                  <input
                    id="field-location"
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Town or area"
                    value={form.location}
                    onChange={updateField('location')}
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={errors.location ? 'location-error' : undefined}
                    className="field-input"
                  />
                  {errors.location ? (
                    <p id="location-error" className="field-error" role="alert">
                      {errors.location}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="field-requirement" className="field-label">
                    Solar Requirement <span className="text-royal">*</span>
                  </label>
                  <select
                    id="field-requirement"
                    name="requirement"
                    value={form.requirement}
                    onChange={updateField('requirement')}
                    aria-invalid={Boolean(errors.requirement)}
                    aria-describedby={errors.requirement ? 'requirement-error' : undefined}
                    className="field-input"
                  >
                    <option value="">Select a requirement</option>
                    {requirementOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.requirement ? (
                    <p id="requirement-error" className="field-error" role="alert">
                      {errors.requirement}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="field-message" className="field-label">
                    Message <span className="text-royal">*</span>
                  </label>
                  <textarea
                    id="field-message"
                    name="message"
                    rows="4"
                    placeholder="Tell us a little about your property or energy requirement"
                    value={form.message}
                    onChange={updateField('message')}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="field-input resize-y"
                  />
                  {errors.message ? (
                    <p id="message-error" className="field-error" role="alert">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <button type="submit" className="btn-primary mt-7 w-full">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Enquiry on WhatsApp
              </button>

              {submitted ? (
                <p className="mt-4 rounded-xl bg-royal/10 px-4 py-3 text-sm leading-6 text-navy-900" role="status">
                  Your enquiry is ready in WhatsApp. Please press send there to share it with our team.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
