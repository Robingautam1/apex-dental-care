'use client';

import { motion } from 'motion/react';
import { CheckCircle2, MapPin } from 'lucide-react';
import Image from 'next/image';

const features = [
  'Over 15 Years of Experience',
  'State-of-the-Art Technology',
  'Painless Treatment Methods',
  'Strict Sterilization Protocols',
  'Affordable Payment Plans',
  'Friendly & Caring Staff',
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Asymmetrical Layout */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="relative will-change-transform will-change-opacity"
          >
            {/* Background Blob */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-soft">
              <Image
                src="https://picsum.photos/800/1000?random=2"
                alt="Apex Dental Clinic Team in Rohtak"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative mt-4 md:mt-0 md:absolute md:-bottom-8 md:-right-12 bg-white p-6 rounded-2xl shadow-soft border border-slate-50 md:max-w-[240px] will-change-transform will-change-opacity"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-text-dark">Proudly Serving</h4>
              </div>
              <p className="text-sm text-text-muted font-medium">
                The Rohtak community with premium dental care.
              </p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="flex flex-col gap-8 will-change-transform will-change-opacity"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Why Choose <span className="text-primary">Apex Dental</span> in Rohtak?
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                {/* INSERT USER CONTENT: Features Subheadline Here */}
                We combine advanced dental technology with a compassionate approach to provide you with the best possible care. Your comfort and smile are our top priorities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 will-change-transform will-change-opacity"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-text-dark font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary-hover hover:scale-105 transition-all duration-300 shadow-soft"
              >
                Schedule Your Visit
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
