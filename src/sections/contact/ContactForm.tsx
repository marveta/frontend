import React, { useState } from 'react';
import { apiService } from '../../services/api';
import { ContactFormData } from '../../types';
import { CheckCircle2, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationId, setConfirmationId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await apiService.submitContact(formData);
      if (res.status === 'success') {
        setStatus('success');
        setConfirmationId(res.data.confirmationId);
      } else {
        setStatus('error');
        setErrorMessage(res.message || 'An error occurred while submitting your message.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Unable to connect to the intelligence desk. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-[#11121C] border border-[#C0B4FE]/40 text-center shadow-2xl">
        <div className="w-14 h-14 rounded-full bg-[#181926] border border-[#C0B4FE] text-[#C0B4FE] flex items-center justify-center mx-auto mb-5 shadow-sm">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-white mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-sm text-white/70 max-w-md mx-auto mb-6 leading-relaxed font-sans">
          Your strategic inquiry has been recorded. An analyst from the intelligence desk will get in touch with you shortly.
        </p>
        <div className="p-3.5 rounded-xl bg-[#080910] border border-[#222332] inline-block mb-6 font-mono text-xs text-white/60">
          Tracking ID: <strong className="text-[#C0B4FE]">{confirmationId}</strong>
        </div>
        <div>
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#161724] border border-[#2B2C3E] hover:border-[#C0B4FE] text-xs font-heading font-semibold text-white hover:text-[#C0B4FE] transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-7 sm:p-9 lg:p-10 rounded-3xl bg-[#11121C] border border-[#222332] shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
      {/* Card Header */}
      <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2 tracking-tight">
        Get In Touch
      </h3>
      <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed mb-8">
        Define your goals and identify areas where AI can add value to your business.
      </p>

      {status === 'error' && (
        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2 mb-6">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="relative">
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full bg-transparent border-b border-[#2A2B3D] focus:border-[#C0B4FE] py-3 text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-transparent border-b border-[#2A2B3D] focus:border-[#C0B4FE] py-3 text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors"
          />
        </div>

        {/* Subject */}
        <div className="relative">
          <input
            id="contact-subject"
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full bg-transparent border-b border-[#2A2B3D] focus:border-[#C0B4FE] py-3 text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full bg-transparent border-b border-[#2A2B3D] focus:border-[#C0B4FE] py-3 text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors resize-none min-h-[90px]"
          />
        </div>

        {/* Send a Message Pill Button (Matching Hero section Learn More button design) */}
        <div className="pt-3 w-full">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full justify-center px-8 py-3.5 sm:py-4 rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all duration-200 transform active:scale-95 flex items-center gap-3 cursor-pointer shadow-md bg-[#C0B4FE] text-[#080910] hover:bg-[#D4CBFE] disabled:opacity-50 disabled:pointer-events-none group"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send a message</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
