import React from 'react';
import { Phone, Mail, MapPin, Share2 } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        {/* Section Eyebrow */}
        <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-2.5">
          Get In Touch
        </span>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-normal font-heading text-white tracking-tight leading-snug sm:leading-[1.22] mb-3 sm:mb-4">
          We are always ready to help you and answer your questions
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/65 font-sans leading-relaxed mb-6 sm:mb-8 max-w-lg">
          Reach out to our strategic intelligence desk to explore private tenant deployment, custom peer group monitoring, or seamless platform integration.
        </p>

        {/* Simple & Compact 2x2 Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {/* Card 1: Call Center */}
          <div className="p-4 sm:p-4.5 rounded-2xl bg-[#11121C] border border-[#222332] hover:border-[#C0B4FE]/40 transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#181926] border border-[#28293D] text-[#C0B4FE] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-medium text-sm sm:text-[15px] text-white tracking-tight">
                Call Center
              </h4>
            </div>
            <div className="space-y-2 text-xs font-sans">
              <div>
                <span className="text-[#C0B4FE] font-mono text-[10.5px] uppercase font-semibold block tracking-wide">
                  SL Phone
                </span>
                <a 
                  href="tel:+94262224176" 
                  className="text-white/85 hover:text-[#C0B4FE] transition-colors block font-medium mt-0.5"
                >
                  +94 26 222 4176
                </a>
              </div>
              <div className="pt-0.5">
                <span className="text-[#C0B4FE] font-mono text-[10.5px] uppercase font-semibold block tracking-wide">
                  US Phone
                </span>
                <a 
                  href="tel:+12135816249" 
                  className="text-white/85 hover:text-[#C0B4FE] transition-colors block font-medium mt-0.5"
                >
                  +1 213 581 6249
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="p-4 sm:p-4.5 rounded-2xl bg-[#11121C] border border-[#222332] hover:border-[#C0B4FE]/40 transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#181926] border border-[#28293D] text-[#C0B4FE] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-medium text-sm sm:text-[15px] text-white tracking-tight">
                Email
              </h4>
            </div>
            <div className="space-y-1 text-xs sm:text-[13px] font-sans">
              <a 
                href="mailto:intelligence@marveta.lk" 
                className="text-[#C0B4FE] hover:text-white transition-colors block font-medium truncate"
              >
                intelligence@marveta.lk
              </a>
              <span className="text-white/40 text-[11px] block">
                Online Intelligence Desk
              </span>
            </div>
          </div>

          {/* Card 3: Our Locations */}
          <div className="p-4 sm:p-4.5 rounded-2xl bg-[#11121C] border border-[#222332] hover:border-[#C0B4FE]/40 transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#181926] border border-[#28293D] text-[#C0B4FE] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-medium text-sm sm:text-[15px] text-white tracking-tight">
                Our Locations
              </h4>
            </div>
            <div className="space-y-2 text-xs font-sans">
              <div>
                <span className="text-[#C0B4FE] font-mono text-[10.5px] uppercase font-semibold block tracking-wide">
                  SL Address
                </span>
                <span className="text-white/80 block leading-relaxed mt-0.5">
                  15 Inner Circular Road, Trincomalee, Sri Lanka
                </span>
              </div>
              <div className="pt-0.5">
                <span className="text-[#C0B4FE] font-mono text-[10.5px] uppercase font-semibold block tracking-wide">
                  US Address
                </span>
                <span className="text-white/80 block leading-relaxed mt-0.5">
                  700 South Flower Street, Los Angeles, CA 90017, USA
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Social Network */}
          <div className="p-4 sm:p-4.5 rounded-2xl bg-[#11121C] border border-[#222332] hover:border-[#C0B4FE]/40 transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#181926] border border-[#28293D] text-[#C0B4FE] flex items-center justify-center shrink-0">
                <Share2 className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-medium text-sm sm:text-[15px] text-white tracking-tight">
                Social network
              </h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 pt-0.5">
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-lg bg-[#181926] border border-[#28293D] hover:border-[#C0B4FE] hover:bg-[#C0B4FE]/10 text-white/70 hover:text-[#C0B4FE] flex items-center justify-center transition-all hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-lg bg-[#181926] border border-[#28293D] hover:border-[#C0B4FE] hover:bg-[#C0B4FE]/10 text-white/70 hover:text-[#C0B4FE] flex items-center justify-center transition-all hover:scale-105"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-lg bg-[#181926] border border-[#28293D] hover:border-[#C0B4FE] hover:bg-[#C0B4FE]/10 text-white/70 hover:text-[#C0B4FE] flex items-center justify-center transition-all hover:scale-105"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-lg bg-[#181926] border border-[#28293D] hover:border-[#C0B4FE] hover:bg-[#C0B4FE]/10 text-white/70 hover:text-[#C0B4FE] flex items-center justify-center transition-all hover:scale-105"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <span className="text-white/40 text-[11px] block">
                Official Updates & Media
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
