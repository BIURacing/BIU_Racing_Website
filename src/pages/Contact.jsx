import React, { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle, Send, ChevronRight } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const REASONS = [
  { value: 'Sponsorship', label: '🤝 Sponsorship', desc: 'Partner with our team' },
  { value: 'Join the Team', label: '🏎️ Join the Team', desc: 'Become a member' },
  { value: 'Information', label: '💡 Information', desc: 'Learn more about us' },
  { value: 'Other', label: '✉️ Other', desc: 'Something else' },
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const selectSubject = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }));
    if (errors.subject) setErrors((prev) => ({ ...prev, subject: '' }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.subject) newErrors.subject = 'Please select a reason';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Please write a message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    setServerError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/racingbiu@biu.co.il', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: `BIU Racing — ${formData.subject}`,
          message: formData.message,
          _subject: `BIU Racing Contact: ${formData.subject}`,
          _template: 'table',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success === 'true') {
        setIsSuccess(true);
      } else {
        setServerError('Something went wrong. Please email us directly at racingbiu@biu.co.il');
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    setErrors({});
    setIsSuccess(false);
    setServerError('');
    setStep(1);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-biu-gold text-sm uppercase tracking-widest font-bold">We'd love to hear from you</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-3 mb-6">Get in Touch</h1>
          <div className="w-24 h-1 bg-biu-gold mx-auto rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white mb-6">Reach Us Directly</h3>
              <div className="space-y-6">
                <a href="mailto:racingbiu@biu.co.il" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-biu-gold/10 border border-biu-gold/20 flex items-center justify-center shrink-0 group-hover:bg-biu-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-biu-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-white font-medium group-hover:text-biu-gold transition-colors text-sm">racingbiu@biu.co.il</p>
                  </div>
                </a>

                <a href="tel:+972-3-5317633" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-biu-green/10 border border-biu-green/20 flex items-center justify-center shrink-0 group-hover:bg-biu-green/20 transition-colors">
                    <Phone className="w-5 h-5 text-biu-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-white font-medium group-hover:text-biu-green transition-colors text-sm">+972 3-5317633</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-white text-sm">Max and Anna Webb St.,<br />Ramat Gan, Israel</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white mb-5">Follow Us</h3>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/biu_racing/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-500/20 border border-white/10 hover:border-pink-500/30 transition-all group"
                >
                  <FaInstagram className="w-5 h-5 text-pink-400" />
                  <span className="text-white text-sm font-medium">@biu_racing</span>
                  <ChevronRight className="w-4 h-4 text-gray-500 ml-auto group-hover:text-pink-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/company/bar-ilan-racing/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-[#0077b5]/20 border border-white/10 hover:border-[#0077b5]/40 transition-all group"
                >
                  <FaLinkedin className="w-5 h-5 text-[#0077b5]" />
                  <span className="text-white text-sm font-medium">Bar-Ilan Racing</span>
                  <ChevronRight className="w-4 h-4 text-gray-500 ml-auto group-hover:text-[#0077b5] transition-colors" />
                </a>
              </div>
            </div>

            {/* Sponsorship hint */}
            <div className="bg-biu-gold/10 border border-biu-gold/20 rounded-3xl p-6">
              <p className="text-biu-gold font-bold text-sm mb-1">Interested in sponsoring?</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your brand on our car, kit, and digital channels — reaching audiences across Israel and Europe.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">

              {isSuccess ? (
                /* Success State */
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 mb-8 max-w-sm">
                    Thanks for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={reset}
                    className="bg-biu-gold hover:bg-yellow-400 text-biu-dark font-bold py-3 px-8 rounded-full transition-all hover:-translate-y-1"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  {/* Step indicator */}
                  <div className="flex items-center gap-3 mb-8">
                    {[1, 2].map((s) => (
                      <React.Fragment key={s}>
                        <div className={`flex items-center gap-2 ${step >= s ? 'text-white' : 'text-gray-500'}`}>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${step > s ? 'bg-biu-gold border-biu-gold text-biu-dark' : step === s ? 'border-biu-gold text-biu-gold' : 'border-white/20 text-gray-500'}`}>
                            {step > s ? '✓' : s}
                          </div>
                          <span className="text-sm font-medium hidden sm:block">
                            {s === 1 ? 'Reason' : 'Details'}
                          </span>
                        </div>
                        {s < 2 && <div className={`flex-1 h-px transition-colors ${step > 1 ? 'bg-biu-gold/50' : 'bg-white/10'}`} />}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Step 1: Pick reason */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">What brings you here?</h3>
                      <p className="text-gray-400 text-sm mb-6">Select the option that fits best — we'll make sure the right person gets back to you.</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {REASONS.map((r) => (
                          <button
                            key={r.value}
                            type="button"
                            onClick={() => selectSubject(r.value)}
                            className={`flex flex-col items-start gap-1 p-5 rounded-2xl border text-left transition-all ${
                              formData.subject === r.value
                                ? 'border-biu-gold bg-biu-gold/10 shadow-[0_0_20px_rgba(234,179,8,0.1)]'
                                : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                            }`}
                          >
                            <span className="text-base font-semibold text-white">{r.label}</span>
                            <span className="text-xs text-gray-400">{r.desc}</span>
                          </button>
                        ))}
                      </div>

                      {errors.subject && (
                        <p className="text-red-400 text-sm mb-4">{errors.subject}</p>
                      )}

                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-biu-gold hover:bg-yellow-400 text-biu-dark font-bold py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-[0_0_15px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2 group"
                      >
                        Continue
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}

                  {/* Step 2: Details */}
                  {step === 2 && (
                    <div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-gray-400 hover:text-white text-sm mb-6 flex items-center gap-1 transition-colors"
                      >
                        ← Back
                      </button>

                      <h3 className="text-xl font-bold text-white mb-2">Your details</h3>
                      <p className="text-gray-400 text-sm mb-6">
                        Contacting us about: <span className="text-biu-gold font-semibold">{formData.subject}</span>
                      </p>

                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">
                              Full Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-biu-gold focus:ring-biu-gold'}`}
                            />
                            {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">
                              Phone <span className="text-gray-500 font-normal">(optional)</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+972 50 000 0000"
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-biu-gold focus:ring-1 focus:ring-biu-gold transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-biu-gold focus:ring-biu-gold'}`}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Message <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us what's on your mind..."
                            className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-biu-gold focus:ring-biu-gold'}`}
                          />
                          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                        </div>

                        {serverError && (
                          <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm">
                            {serverError}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                            isSubmitting
                              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                              : 'bg-biu-gold hover:bg-yellow-400 text-biu-dark shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] hover:-translate-y-0.5'
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
