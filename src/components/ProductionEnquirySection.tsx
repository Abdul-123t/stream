import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EnquiryFormData } from '../types';
import { Send, CheckCircle2, ArrowRight, ShieldCheck, Copy, Check, Mail, Phone, MessageSquare } from 'lucide-react';

interface ProductionEnquirySectionProps {
  initialTier?: string;
}

export const ProductionEnquirySection: React.FC<ProductionEnquirySectionProps> = ({ initialTier }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const [formData, setFormData] = useState<EnquiryFormData>({
    eventName: '',
    eventType: 'Conference / Summit',
    eventDate: '',
    eventTime: '10:00 AM',
    venue: '',
    cityCountry: '',
    estimatedAttendance: '250 - 500',
    eventDuration: '1 Full Day',
    camerasRequired: initialTier ? initialTier : '3-4 Cameras',
    streamingPlatforms: ['YouTube Live', 'Custom RTMP'],
    productionRequirements: '',
    budgetRange: '£2,500 - £5,000',
    specialRequests: '',
    name: '',
    companyOrganisation: '',
    email: '',
    phoneWhatsapp: '',
  });

  const handlePlatformToggle = (platform: string) => {
    if (formData.streamingPlatforms.includes(platform)) {
      setFormData({
        ...formData,
        streamingPlatforms: formData.streamingPlatforms.filter((p) => p !== platform),
      });
    } else {
      setFormData({
        ...formData,
        streamingPlatforms: [...formData.streamingPlatforms, platform],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyBriefToClipboard = () => {
    const text = `
D1 STREAMS - PRODUCTION BRIEF
-----------------------------------------
Event: ${formData.eventName || 'Not specified'}
Type: ${formData.eventType}
Date/Time: ${formData.eventDate || 'TBD'} @ ${formData.eventTime}
Location: ${formData.venue}, ${formData.cityCountry}
Attendance: ${formData.estimatedAttendance}
Duration: ${formData.eventDuration}
Cameras: ${formData.camerasRequired}
Platforms: ${formData.streamingPlatforms.join(', ')}
Budget Range: ${formData.budgetRange}
Requirements: ${formData.productionRequirements}

Contact: ${formData.name} (${formData.companyOrganisation})
Email: ${formData.email}
Phone/WhatsApp: ${formData.phoneWhatsapp}
-----------------------------------------
    `;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="enquiry" className="py-24 lg:py-32 bg-[#0D0D0E] relative border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs font-mono tracking-[0.2em] text-[#0066FF] uppercase font-bold">
            PRODUCTION BRIEFING
          </p>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
            LET'S PLAN YOUR PRODUCTION.
          </h2>
          <p className="text-xs font-mono text-zinc-400 max-w-lg mx-auto">
            Provide key parameters for your upcoming event. Our technical team will review and respond with a tailored broadcast specification within 24 hours.
          </p>

          {/* Instant Contact Direct Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="mailto:dammyondnet@gmail.com?subject=Production%20Enquiry%20%E2%80%94%20D1%20Streams"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-200 hover:text-white hover:border-[#0066FF] transition-all shadow-sm group"
            >
              <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="font-bold underline underline-offset-2">dammyondnet@gmail.com</span>
            </a>

            <a
              href="tel:+447918916398"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-200 hover:text-white hover:border-[#0066FF] transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="font-bold">+44 7918 916398</span>
            </a>

            <a
              href="https://wa.me/447918916398"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950/80 border border-emerald-800/80 rounded text-xs font-mono text-emerald-300 hover:text-white hover:bg-emerald-900 transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-bold">WhatsApp Direct</span>
            </a>

            <a
              href="https://youtube.com/@oluwadamilolaolayinka-fk2ry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/80 border border-red-800/80 rounded text-xs font-mono text-red-300 hover:text-white hover:bg-red-900 transition-all shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current text-red-400" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="font-bold">Watch on YouTube</span>
            </a>
          </div>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-950 border border-[#0066FF] p-8 sm:p-12 rounded-lg text-center space-y-6 shadow-2xl"
          >
            <div className="w-16 h-16 bg-[#0066FF]/20 text-[#0066FF] rounded-full flex items-center justify-center mx-auto border border-[#0066FF]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0066FF] font-bold uppercase tracking-widest">
                PRODUCTION BRIEF SUBMITTED
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display uppercase text-white">
                BRIEF RECEIVED.
              </h3>
            </div>

            <p className="text-sm text-zinc-300 font-normal max-w-lg mx-auto leading-relaxed">
              Thank you. We've received your production brief and will be in touch with the next steps.
            </p>

            {/* Generated Brief Summary Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded text-left space-y-3 text-xs font-mono text-zinc-300">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-white font-bold uppercase">BRIEF SUMMARY REFERENCE</span>
                <button
                  onClick={copyBriefToClipboard}
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED' : 'COPY BRIEF'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div><span className="text-zinc-500">EVENT:</span> {formData.eventName || 'Untitled Event'}</div>
                <div><span className="text-zinc-500">TYPE:</span> {formData.eventType}</div>
                <div><span className="text-zinc-500">DATE:</span> {formData.eventDate || 'TBD'}</div>
                <div><span className="text-zinc-500">LOCATION:</span> {formData.cityCountry || 'Global'}</div>
                <div><span className="text-zinc-500">CAMERAS:</span> {formData.camerasRequired}</div>
                <div><span className="text-zinc-500">CONTACT:</span> {formData.name}</div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono uppercase tracking-wider cursor-pointer"
              >
                SUBMIT ANOTHER BRIEF
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-zinc-950 border border-zinc-800 p-6 sm:p-10 rounded-lg shadow-2xl space-y-8">
            
            {/* Section 1: Event Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
                <span className="text-xs font-mono font-bold text-[#0066FF]">PART 01</span>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  EVENT LOGISTICS & TIMELINE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">EVENT NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Global Tech Summit 2026"
                    value={formData.eventName}
                    onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">EVENT TYPE</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  >
                    <option value="Conferences & Summits">Conferences & Summits</option>
                    <option value="Concerts & Festivals">Concerts & Festivals</option>
                    <option value="Churches & Ministries">Churches & Ministries</option>
                    <option value="Corporate Events">Corporate Events</option>
                    <option value="Brand Activations">Brand Activations</option>
                    <option value="Weddings & Private Events">Weddings & Private Events</option>
                    <option value="Sports & Tournaments">Sports & Tournaments</option>
                    <option value="Product Launches">Product Launches</option>
                    <option value="Graduations">Graduations</option>
                    <option value="Charity & Fundraising">Charity & Fundraising</option>
                    <option value="Virtual & Hybrid Events">Virtual & Hybrid Events</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">EVENT DATE *</label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">START TIME</label>
                  <input
                    type="text"
                    placeholder="e.g. 09:00 AM BST"
                    value={formData.eventTime}
                    onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">VENUE NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Excel London / Arena Stage"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">CITY / COUNTRY *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. London, United Kingdom"
                    value={formData.cityCountry}
                    onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">ESTIMATED ATTENDANCE</label>
                  <select
                    value={formData.estimatedAttendance}
                    onChange={(e) => setFormData({ ...formData, estimatedAttendance: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  >
                    <option value="Under 100">Under 100</option>
                    <option value="100 - 250">100 - 250</option>
                    <option value="250 - 500">250 - 500</option>
                    <option value="500 - 2,000">500 - 2,000</option>
                    <option value="2,000+ Major Festival">2,000+ Major Festival</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">EVENT DURATION</label>
                  <select
                    value={formData.eventDuration}
                    onChange={(e) => setFormData({ ...formData, eventDuration: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  >
                    <option value="Half Day (Up to 4 Hours)">Half Day (Up to 4 Hours)</option>
                    <option value="1 Full Day">1 Full Day</option>
                    <option value="2-3 Days">2-3 Days</option>
                    <option value="Multi-Day / Festival">Multi-Day / Festival</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Technical Parameters */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
                <span className="text-xs font-mono font-bold text-[#0066FF]">PART 02</span>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  TECHNICAL SPECIFICATIONS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">CAMERAS REQUIRED</label>
                  <select
                    value={formData.camerasRequired}
                    onChange={(e) => setFormData({ ...formData, camerasRequired: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  >
                    <option value="1 Camera (Keynote)">1 Camera (Keynote)</option>
                    <option value="2 Cameras (Starter)">2 Cameras (Starter)</option>
                    <option value="3-4 Cameras (Standard)">3-4 Cameras (Standard)</option>
                    <option value="4-6 Cameras (Premium)">4-6 Cameras (Premium)</option>
                    <option value="6+ Cameras (Global Elite)">6+ Cameras (Global Elite / Festival)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">ESTIMATED BUDGET RANGE</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  >
                    <option value="£1,200 - £2,500">£1,200 - £2,500</option>
                    <option value="£2,500 - £5,000">£2,500 - £5,000</option>
                    <option value="£5,000 - £10,000">£5,000 - £10,000</option>
                    <option value="£10,000+ Custom International">£10,000+ Custom International</option>
                  </select>
                </div>
              </div>

              {/* Streaming Platforms Multi-Check */}
              <div className="space-y-2 text-xs font-mono">
                <label className="block text-zinc-400 font-bold uppercase">DESTINATION PLATFORMS</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['YouTube Live', 'Facebook Live', 'LinkedIn Live', 'Twitch', 'Custom RTMP', 'Private Portal', 'Zoom/Teams', 'Instagram'].map((plat) => {
                    const isChecked = formData.streamingPlatforms.includes(plat);
                    return (
                      <button
                        type="button"
                        key={plat}
                        onClick={() => handlePlatformToggle(plat)}
                        className={`p-2.5 rounded border text-left flex items-center justify-between cursor-pointer ${
                          isChecked
                            ? 'bg-[#0066FF]/20 border-[#0066FF] text-white font-bold'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <span className="text-[11px] uppercase">{plat}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 text-[#0066FF]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="text-xs font-mono">
                <label className="block text-zinc-400 font-bold mb-1 uppercase">SPECIAL PRODUCTION REQUIREMENTS / NOTES</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Require stage LED integration, wireless gimbal camera for stage entrance, Dante audio feed from FOH console..."
                  value={formData.productionRequirements}
                  onChange={(e) => setFormData({ ...formData, productionRequirements: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>
            </div>

            {/* Section 3: Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
                <span className="text-xs font-mono font-bold text-[#0066FF]">PART 03</span>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  CONTACT & ORGANISATION DETAILS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">COMPANY / ORGANISATION</label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.companyOrganisation}
                    onChange={(e) => setFormData({ ...formData, companyOrganisation: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold mb-1 uppercase">PHONE / WHATSAPP *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7000 000000"
                    value={formData.phoneWhatsapp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Strict confidentiality guaranteed. Direct response within 24h.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0066FF] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-blue-600 transition-colors shadow-xl cursor-pointer"
              >
                <span>SUBMIT PRODUCTION BRIEF</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
