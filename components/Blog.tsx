'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    category: 'Dental Health',
    date: '5 min read',
    title: '5 Signs You Need to Visit a Dentist in Rohtak Immediately',
    excerpt: 'Ignoring dental problems can lead to serious complications. Here are five warning signs that mean you should visit a dental clinic in Rohtak right away.',
    link: '#',
    gradient: 'from-[#1A3C5E] to-[#0f5e5e]',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-20 text-white aria-hidden='true'">
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M12 2v6" />
        <path d="M12 17c-2.76 0-5-2.24-5-5V8h10v4c0 2.76-2.24 5-5 5z" />
        {/* Warning triangle */}
        <path d="M12 18l-3 4h6l-3-4z" fill="currentColor" />
      </svg>
    )
  },
  {
    category: 'Procedures',
    date: '6 min read',
    title: 'Root Canal Treatment in Rohtak: What to Expect at Apex Dental Care',
    excerpt: 'Root canal treatment does not have to be scary. Here is a complete guide to what happens during RCT at Apex Dental Care in Rohtak.',
    link: '#',
    gradient: 'from-[#134e3a] to-[#1A3C5E]',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-20 text-white aria-hidden='true'">
        {/* Crossed mirror and probe */}
        <circle cx="17" cy="7" r="3" />
        <path d="M15 9L3 21" />
        <path d="M21 21L9 9" />
        <path d="M8 8l2-2" />
      </svg>
    )
  },
  {
    category: 'Dental Tips',
    date: '5 min read',
    title: 'How to Choose the Best Dental Clinic in Model Town, Rohtak',
    excerpt: 'Choosing the right dental clinic is crucial for your oral health. Here are key factors to consider when selecting a dentist in Model Town, Rohtak.',
    link: '#',
    gradient: 'from-[#2c1a5e] to-[#1A3C5E]',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 opacity-20 text-white aria-hidden='true'">
        {/* Location pin with tooth */}
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <path d="M12 14c-1.5 0-3-1.5-3-3V7h6v4c0 1.5-1.5 3-3 3z" />
        <path d="M12 7v2" />
      </svg>
    )
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Blog() {
  const featuredPost = blogPosts[0];

  return (
    <>
      {/* MOBILE BLOG - single featured post + link */}
      <section className="md:hidden px-5 py-10 bg-[#F7F4EF]">
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#2DBD8F] mb-2">
            Dental Insights
          </p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1E] leading-tight">
            Latest from the Blog
          </h2>
        </div>

        <a href={featuredPost.link} className="block relative bg-[#1A3C5E] rounded-2xl overflow-hidden mb-5">
          <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${featuredPost.gradient} flex items-center justify-center`}>
            <span className="absolute z-10 top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
              {featuredPost.category}
            </span>
            {featuredPost.svg}
          </div>
          <div className="p-5">
            <span className="text-[#9CA3AF] text-xs mb-2 block">{featuredPost.date}</span>
            <h3 className="text-white font-semibold text-lg leading-snug mb-2">
              {featuredPost.title}
            </h3>
            <div className="flex items-center gap-1.5 text-[#2DBD8F] text-sm font-semibold">
              Read Article <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </div>
          </div>
        </a>

        <a href="/blog"
          className="flex items-center justify-center gap-2 w-full border-2 border-[#1A3C5E] 
                         text-[#1A3C5E] font-semibold text-sm py-3.5 rounded-xl
                         active:bg-[#1A3C5E] active:text-white transition-colors duration-150">
          Read All Articles
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </section>

      {/* DESKTOP BLOG - unchanged */}
      <section id="blog" className="hidden md:block py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                className="text-3xl md:text-4xl font-bold mb-4 will-change-transform will-change-opacity"
              >
                Latest from Our Blog
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                transition={{ delay: 0.1 }}
                className="text-lg text-text-muted will-change-transform will-change-opacity"
              >
                Stay updated with dental care tips, news, and insights from our experts in Rohtak.
              </motion.p>
            </div>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              href="#"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors will-change-transform will-change-opacity"
            >
              View All Posts <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory will-change-transform will-change-opacity"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-2 group snap-center border border-slate-50 flex flex-col h-full will-change-transform will-change-opacity"
              >
                <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <div className="group-hover:scale-105 transition-transform duration-500">
                    {post.svg}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-secondary font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-sm text-text-muted">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-text-dark group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.link}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors mt-auto"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
