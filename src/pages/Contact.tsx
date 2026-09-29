import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { ContactHero } from '../sections/contact/ContactHero';
import { ContactInfo } from '../sections/contact/ContactInfo';
import { ContactForm } from '../sections/contact/ContactForm';

type MapLocation = 'both' | 'srilanka' | 'usa';

const MAP_URLS = {
  srilanka: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.528430635105!2d81.2291!3d8.5711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbce481da4a067%3A0xc3c51eaae0bc2085!2sInner%20Circular%20Rd%2C%20Trincomalee%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  usa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.748348821949!2d-118.2612984!3d34.0489721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b416954209%3A0x6b772c695a704739!2s700%20S%20Flower%20St%2C%20Los%20Angeles%2C%20CA%2090017!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
};

export const ContactPage: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<MapLocation>('both');

  return (
    <div className="w-full pb-8 sm:pb-10 lg:pb-12 overflow-x-hidden">
      {/* Hero Section (Unchanged) */}
      <ContactHero />

      {/* Main Contact Section */}
      <section id="contact-inquiry-section" className="pt-4 sm:pt-6 lg:pt-8">
        <Container>
          {/* Two-Column Layout: Left (Info & 4-Item Grid) | Right ("Get In Touch" Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
            {/* Left Column: Heading, Subtitle & 4-Item Contact Grid */}
            <div className="lg:col-span-6 xl:col-span-7">
              <ContactInfo />
            </div>

            {/* Right Column: "Get In Touch" Form Card */}
            <div className="lg:col-span-6 xl:col-span-5">
              <ContactForm />
            </div>
          </div>

          {/* Location Google Maps Section: Fully Responsive for SM & Mobile Devices */}
          <div className="mt-6 sm:mt-8 lg:mt-10 w-full">
            {/* Top Bar Controls for Switching Locations */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5 gap-3 w-full">
              <div className="flex items-center gap-2">
                <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE]">
                  Global Operations Desks
                </span>
              </div>

              {/* Location Switcher Tabs - Segmented grid on mobile, flex on sm+ */}
              <div className="w-full sm:w-auto grid grid-cols-3 sm:flex sm:items-center gap-1 p-1 rounded-xl sm:rounded-full bg-[#12131D] border border-[#26273B] text-xs font-heading">
                <button
                  type="button"
                  onClick={() => setActiveLocation('both')}
                  className={`px-2.5 sm:px-4 py-2 sm:py-1.5 rounded-lg sm:rounded-full font-semibold transition-all text-center cursor-pointer text-[11px] sm:text-xs whitespace-nowrap truncate ${
                    activeLocation === 'both'
                      ? 'bg-[#C0B4FE] text-[#080910] shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span className="sm:hidden">Both</span>
                  <span className="hidden sm:inline">Both Places</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLocation('srilanka')}
                  className={`px-2.5 sm:px-4 py-2 sm:py-1.5 rounded-lg sm:rounded-full font-semibold transition-all text-center cursor-pointer text-[11px] sm:text-xs whitespace-nowrap truncate ${
                    activeLocation === 'srilanka'
                      ? 'bg-[#C0B4FE] text-[#080910] shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span className="sm:hidden">Sri Lanka</span>
                  <span className="hidden sm:inline">Sri Lanka (Trincomalee)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLocation('usa')}
                  className={`px-2.5 sm:px-4 py-2 sm:py-1.5 rounded-lg sm:rounded-full font-semibold transition-all text-center cursor-pointer text-[11px] sm:text-xs whitespace-nowrap truncate ${
                    activeLocation === 'usa'
                      ? 'bg-[#C0B4FE] text-[#080910] shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span className="sm:hidden">USA</span>
                  <span className="hidden sm:inline">USA (Los Angeles)</span>
                </button>
              </div>
            </div>

            {/* Map Containers with Fully Responsive Aspect Ratio & Zero Bleed */}
            {activeLocation === 'both' ? (
              /* Side-by-side Dual Maps for Sri Lanka and USA */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
                {/* Sri Lanka Map */}
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between px-1 mb-2 text-xs font-mono">
                    <span className="text-white font-medium">Sri Lanka (HQ)</span>
                    <span className="text-[#C0B4FE]">Trincomalee</span>
                  </div>
                  <div className="w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-[#222332] h-[250px] sm:h-[320px] md:h-[360px] lg:h-[390px] bg-[#0A0B13] shadow-lg relative">
                    <iframe
                      title="Marveta Sri Lanka Trincomalee Headquarters Google Map"
                      src={MAP_URLS.srilanka}
                      className="w-full h-full border-0 block grayscale invert contrast-[1.12] brightness-[0.8] opacity-85 hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* USA Map */}
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between px-1 mb-2 text-xs font-mono">
                    <span className="text-white font-medium">USA (Office)</span>
                    <span className="text-[#C0B4FE]">Los Angeles</span>
                  </div>
                  <div className="w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-[#222332] h-[250px] sm:h-[320px] md:h-[360px] lg:h-[390px] bg-[#0A0B13] shadow-lg relative">
                    <iframe
                      title="Marveta USA Los Angeles Office Google Map"
                      src={MAP_URLS.usa}
                      className="w-full h-full border-0 block grayscale invert contrast-[1.12] brightness-[0.8] opacity-85 hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Single Full-Width Map for Selected Location */
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between px-1 mb-2 text-xs font-mono">
                  <span className="text-white font-medium">
                    {activeLocation === 'srilanka' ? 'Sri Lanka (HQ)' : 'USA (Office)'}
                  </span>
                  <span className="text-[#C0B4FE]">
                    {activeLocation === 'srilanka' ? 'Trincomalee Operations' : 'Los Angeles Desk'}
                  </span>
                </div>
                <div className="w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-[#222332] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-[#0A0B13] shadow-lg relative">
                  <iframe
                    title={`Marveta ${activeLocation === 'srilanka' ? 'Sri Lanka Trincomalee' : 'USA Los Angeles'} Google Map`}
                    src={MAP_URLS[activeLocation]}
                    className="w-full h-full border-0 block grayscale invert contrast-[1.12] brightness-[0.8] opacity-85 hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};
