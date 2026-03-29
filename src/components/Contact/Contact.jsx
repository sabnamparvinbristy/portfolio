import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const cg = { fontFamily: 'Poppins, sans-serif' };

const Contact = () => {
  const form    = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        'service_iid1n61',
        'template_0arbx44',
        form.current,
        'fhfUTiws1tHrvEUHT'
      )
      .then(() => {
        setSending(false);
        form.current.reset();
        toast.success('Message sent successfully! ✅', {
          position: 'top-center', autoClose: 3000,
          hideProgressBar: false, theme: 'dark',
        });
      })
      .catch((err) => {
        setSending(false);
        console.error('EmailJS error status:', err.status);
        console.error('EmailJS error text:', err.text);
        toast.error('Failed to send. Please try again.', {
          position: 'top-center', autoClose: 3000, theme: 'dark',
        });
      });
  };
  const inputBase = `w-full p-3 rounded-lg text-white
    border border-white/20 bg-[#131025]
    focus:outline-none focus:border-[#a855f7]
    hover:border-[#a855f7] transition-colors duration-300
    placeholder:text-gray-600`;

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center
        py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-16 reveal">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          <span className="relative inline-block group">
            <span
              className="relative z-10"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Contact
            </span>
            <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 h-[2px] w-0 bg-[#2EC4B6] transition-all duration-300 group-hover:w-full" />
          </span>
        </h2>
        <p className="text-gray-500 mt-6 text-base max-w-2xl mx-auto leading-relaxed">
          Actively looking for internship opportunities,
          freelance projects, or full-stack developer roles.
        </p>
      </div>

      {/* Two-column */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left info */}
        <div className="reveal-left flex flex-col justify-center gap-6">
          <div>
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Let's build something great.
            </h3>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Open to local and remote positions.
              Feel free to reach out for any opportunity or just to say hi!
            </p>

  
          </div>

          {/* Contact details */}
          {[
            { icon: '✉', text: 'sabnamparvinbristy@gmail.com',
              href: 'mailto:sabnamparvinbristy@gmail.com' },
            { icon: '📍', text: 'Narayanganj, Dhaka, Bangladesh', href: null },
            { icon: '🎓', text: 'R.P. Shaha University · CSE 2026', href: null },
          ].map(({ icon, text, href }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg border border-white/10
                flex items-center justify-center text-sm flex-shrink-0
                text-gray-300">
                {icon}
              </div>
              <span className="text-xs text-gray-300 tracking-wide">
                {href
                  ? <a href={href}
                      className="hover:text-[#2EC4B6] transition-colors duration-200">
                      {text}
                    </a>
                  : text
                }
              </span>
            </div>
          ))}

          {/* Socials */}
          <div className="flex gap-3 mt-1">
            {[
              { href: 'https://github.com/sabnamparvinbristy',    Icon: FaGithub   },
              { href: 'https://www.linkedin.com/in/sabnamparvin', Icon: FaLinkedin },
              { href: 'https://www.facebook.com/sabnamsp10',      Icon: FaFacebook },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10
                  flex items-center justify-center text-gray-400
                  hover:text-[#a78bfa] hover:border-[#c084fc]/50
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="glass-card p-7 hover:scale-[1.02] reveal-right">
          {/* Connect With Me */}
<h3 className="text-white text-center mb-6"
  style={{ 
    fontFamily: "'Raleway', sans-serif",
    fontSize: '20px', 
    fontWeight: 700,        // bump from 500 → 700
    letterSpacing: '0.20em', // wider spacing
    textTransform: 'uppercase', // makes Raleway shine
  }}>
  Connect With Me <span className="ml-1">🚀</span>
</h3>

          <form ref={form} onSubmit={sendEmail}
            className="flex flex-col gap-4">
            <input
              type="email" name="user_email"
              placeholder="Your Email" required
              className={inputBase}
            />
            <input
              type="text" name="user_name"
              placeholder="Your Name" required
              className={inputBase}
            />
            <input
              type="text" name="subject"
              placeholder="Subject" required
              className={inputBase}
            />
            <textarea
              name="message" rows="4"
              placeholder="Message" required
              className={inputBase}
              style={{ resize: 'none' }}
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 font-semibold text-white rounded-full
                hover:brightness-110 hover:scale-105
                transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-[#7C9FBF]/30
                disabled:opacity-60 disabled:cursor-not-allowed
                border-none cursor-pointer"
              style={{
  background: '#1B2A4A',
  boxShadow: '0 4px 18px rgba(27,42,74,0.40)',
  border: '1px solid rgba(168,85,247,0.35)',
  fontFamily: "'Raleway', sans-serif",
  fontSize: '13px',
  fontWeight: 700,
  letterSpacing: '0.20em',
  textTransform: 'uppercase',
  color: '#c084fc',
}}
            >
              {sending ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
