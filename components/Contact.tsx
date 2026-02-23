'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Visit Our Clinic in Rohtak
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
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
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 flex flex-col gap-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-text-dark">Get in Touch</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark mb-1">Clinic Address</h4>
                    <p className="text-text-muted leading-relaxed">
                      {/* INSERT USER CONTENT: Full Address Here */}
                      123 Dental Street, Model Town,<br />
                      Rohtak, Haryana 124001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark mb-1">Phone Number</h4>
                    <p className="text-text-muted leading-relaxed">
                      {/* INSERT USER CONTENT: Phone Number Here */}
                      +91 98765 43210
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

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-auto w-full bg-slate-100 overflow-hidden"
          >
            {/* Replace this div with an actual Google Maps iframe */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <MapPin className="w-16 h-16 text-slate-300 mb-4" />
              <h3 className="text-xl font-bold text-slate-400 mb-2">Interactive Map Placeholder</h3>
              <p className="text-slate-500 max-w-sm">
                Embed your Google Maps iframe here to help patients find your Rohtak clinic easily.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-primary-hover transition-colors shadow-soft"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
