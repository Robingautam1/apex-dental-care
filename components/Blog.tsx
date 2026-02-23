'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    category: 'Dental Health',
    date: 'Oct 12, 2023',
    title: '5 Tips for Maintaining Healthy Gums',
    excerpt: 'Learn the best practices to keep your gums healthy and prevent periodontal disease.',
    image: 'https://picsum.photos/600/400?random=3',
    link: '#',
  },
  {
    category: 'Cosmetic',
    date: 'Nov 05, 2023',
    title: 'Teeth Whitening: What You Need to Know',
    excerpt: 'A comprehensive guide to professional teeth whitening options available at our clinic.',
    image: 'https://picsum.photos/600/400?random=4',
    link: '#',
  },
  {
    category: 'Orthodontics',
    date: 'Dec 20, 2023',
    title: 'Invisalign vs. Traditional Braces',
    excerpt: 'Which orthodontic treatment is right for you? We compare the pros and cons of each.',
    image: 'https://picsum.photos/600/400?random=5',
    link: '#',
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
  return (
    <section id="blog" className="py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Latest from Our Blog
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-muted"
            >
              {/* INSERT USER CONTENT: Blog Subheadline Here */}
              Stay updated with the latest dental care tips, news, and insights from our experts in Rohtak.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors"
          >
            View All Posts <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-2 group snap-center border border-slate-50 flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
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
  );
}
