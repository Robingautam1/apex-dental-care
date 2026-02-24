'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const [activeLocation, setActiveLocation] = useState<'model-town' | 'mdu-gate'>('model-town');

  return (
    <section id="contact" className="py-24 bg-background-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            className="text-3xl md:text-4xl font-bold mb-4 will-change-transform will-change-opacity"
          >
            Visit Our Clinic in Rohtak
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted will-change-transform will-change-opacity"
          >
            {/* INSERT USER CONTENT: Contact Subheadline Here */}
            Ready for a healthier smile? Book your appointment today or drop by our clinic.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 bg-white rounded-3xl shadow-soft overflow-hidden border border-slate-50">
          {/* Contact Details & Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-12 flex flex-col gap-8 md:gap-10 will-change-transform will-change-opacity"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-text-dark">Get in Touch</h3>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  {/* Location toggle */}
                  <div className="flex gap-2 mb-6 bg-[#F7F4EF] p-1 rounded-xl w-fit">
                    <button
                      onClick={(e) => { e.preventDefault(); setActiveLocation('model-town'); }}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                                  ${activeLocation === 'model-town'
                          ? 'bg-white text-[#1A3C5E] shadow-sm'
                          : 'text-[#6B7280]'}`}>
                      Model Town
                    </button>
                    <button
                      onClick={(e) => { e.preventDefault(); setActiveLocation('mdu-gate'); }}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                                  ${activeLocation === 'mdu-gate'
                          ? 'bg-white text-[#1A3C5E] shadow-sm'
                          : 'text-[#6B7280]'}`}>
                      MDU Gate No. 2
                    </button>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-dark mb-1">Clinic Address</h4>
                      <p className="text-text-muted leading-relaxed">
                        {activeLocation === 'model-town' ? (
                          <>Apex Dental Care, near life care hospital,<br />Model Town, Rohtak, Haryana 124001</>
                        ) : (
                          <>Apex Dental Care, Opp. Agro Mall, Near MDU Gate No. 2,<br />Rohtak, Haryana</>
                        )}
                      </p>
                    </div>
                  </div>
                  {/* MOBILE MAP CTA */}
                  <a href={activeLocation === 'model-town' ? "https://share.google/3z1exJby1De0Ailde" : "https://www.google.com/maps/search/Apex+Dental+Care+MDU+Gate+Rohtak"}
                    target="_blank" rel="noopener noreferrer"
                    className="md:hidden flex items-center justify-center gap-2 bg-[#F7F4EF] text-[#1A3C5E] py-3.5 mt-2 rounded-xl font-semibold w-full">
                    <MapPin className="w-5 h-5" />
                    Open in Google Maps
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark mb-1">Phone Number</h4>
                    <p className="text-text-muted leading-relaxed">
                      {/* INSERT USER CONTENT: Phone Number Here */}
                      +91 98021 55667
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark mb-1">Email Address</h4>
                    <p className="text-text-muted leading-relaxed">
                      {/* INSERT USER CONTENT: Email Here */}
                      info@apexdentalrohtak.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-2xl font-bold mb-6 text-text-dark">Operating Hours</h3>
              <div className="bg-background-alt rounded-2xl p-6">
                <table className="w-full text-left text-text-muted">
                  <tbody>
                    <tr className="border-b border-slate-200/50">
                      <td className="py-3 font-medium text-text-dark">Mon - Fri</td>
                      <td className="py-3 text-right">9:00 AM - 7:00 PM</td>
                    </tr>
                    <tr className="border-b border-slate-200/50">
                      <td className="py-3 font-medium text-text-dark">Saturday</td>
                      <td className="py-3 text-right">9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-text-dark">Sunday</td>
                      <td className="py-3 text-right text-secondary font-medium">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Accessible Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-12 bg-background-alt border-t md:border-t-0 md:border-l border-slate-100 flex flex-col justify-center will-change-transform will-change-opacity"
          >
            <h3 className="text-2xl font-bold mb-6 text-text-dark">Request an Appointment</h3>

            {/* Trust Building Aside Card */}
            <div className="flex items-center gap-4 p-4 mb-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-primary/10">
                <Image
                  src="/images/dr-aashish-scrubs.jpg"
                  alt="Dr. Aashish Malik"
                  fill
                  className="object-cover object-top scale-110"
                />
              </div>
              <div>
                <p className="text-sm text-text-dark font-medium leading-snug">
                  &quot;Dr. Aashish Malik will personally follow up on your enquiry.&quot;
                </p>
                <p className="text-xs text-secondary font-bold mt-1 uppercase tracking-wider">Fast Response Guaranteed</p>
              </div>
            </div>

            <form className="flex flex-col gap-5" noValidate>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-text-dark">Full Name <span className="text-red-500" aria-hidden="true">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-required="true"
                  placeholder="e.g. Rahul Sharma"
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-shadow w-full text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-bold text-text-dark">Phone Number <span className="text-red-500" aria-hidden="true">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  aria-required="true"
                  placeholder="+91 90000 00000"
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-shadow w-full text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-bold text-text-dark">Service Required</label>
                <select
                  id="service"
                  name="service"
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-shadow w-full appearance-none text-base"
                >
                  <option value="">Select a service (Optional)</option>
                  <option value="general">General Checkup</option>
                  <option value="implants">Dental Implants</option>
                  <option value="braces">Braces / Invisalign</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="rct">Root Canal Therapy</option>
                  <option value="other">Other / Not sure</option>
                </select>
              </div>

              <div role="alert" aria-live="polite" className="text-sm text-red-500 min-h-[20px]">
                {/* Error messages would appear here */}
              </div>

              <button
                type="submit"
                className="mt-2 bg-primary text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-primary-hover transition-colors shadow-soft w-full flex justify-center items-center gap-2"
              >
                Submit Request
              </button>
              <p className="text-xs text-text-muted text-center mt-2">
                We will call you back within 2 hours during clinic timings to confirm your slot.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
