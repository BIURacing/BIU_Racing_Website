import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaLink } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Intro */}
          <div>
            <img src="/BIURacingBlackColor.png" alt="BIU Racing Logo" className="h-16 w-auto object-contain mb-6 bg-white/5 p-2 rounded" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Bar-Ilan University's Formula Student team. Engineering the future of automotive technology on and off the track.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Email: <a href="mailto:racing.biu@biu.ac.il" className="hover:text-biu-gold transition-colors">racing.biu@biu.ac.il</a></li>
              <li>Phone: <a href="tel:+972-3-5317633" className="hover:text-biu-gold transition-colors">+972 3-5317633</a></li>
              <li>Address: Max and Anna Webb St., Ramat Gan, Israel</li>
            </ul>
          </div>

          {/* Stay Tuned (Newsletter) & Socials */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Stay Tuned</h4>
            <div className="flex mb-8">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 w-full text-sm focus:outline-none focus:border-biu-gold text-white"
              />
              <button className="bg-biu-gold hover:bg-yellow-400 text-biu-dark font-bold px-4 py-2 rounded-r-md transition-colors text-sm">
                Subscribe
              </button>
            </div>

            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-biu-gold transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877f2] transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="https://linktr.ee/BIU_Racing" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-biu-dark hover:bg-[#43E660] transition-all">
                <FaLink size={18} />
              </a>
            </div>
          </div>

          {/* Visit Us (Map) */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Visit Us</h4>
            <div className="w-full h-32 bg-white/5 rounded-md border border-white/10 overflow-hidden relative group">
              {/* Maps Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm group-hover:text-biu-gold transition-colors">
                Map Loading... (BIU Campus)
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.1896791986427!2d34.84157741544605!3d32.06734102723145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b0050dfbffd%3A0xe6bf44bc4ad7845!2sBar-Ilan%20University!5e0!3m2!1sen!2sil!4v1677610000000!5m2!1sen!2sil" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity"
                title="BIU Campus Map"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-2">
            © {new Date().getFullYear()} Bar-Ilan University Formula Student Team. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-medium tracking-wide">
            Website built by shahar admoni
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
