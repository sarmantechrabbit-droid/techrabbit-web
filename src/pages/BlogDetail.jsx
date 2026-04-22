import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'

const blogPostsData = {
  'building-mvp-30-days': {
    title: 'Building an MVP in 30 Days: Our Process',
    author: 'Sarah Chen',
    date: 'Mar 15, 2024',
    readTime: 8,
    category: 'Product Development',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    content: `
      <h2>Introduction</h2>
      <p>Building a Minimum Viable Product (MVP) in just 30 days might sound impossible, but with the right process and team, it's not only possible—it's the best way to validate your idea quickly.</p>

      <h2>Our 30-Day MVP Process</h2>
      <p>We've refined our process over years of building products for startups. Here's how we do it:</p>

      <h3>Week 1: Discovery & Design</h3>
      <p>The first week is all about understanding your vision. We conduct discovery sessions, create wireframes, and design the core user flows. By the end of week one, you have a complete design system and UI kit ready for development.</p>

      <h3>Week 2-3: Development</h3>
      <p>Our full-stack developers build the backend and frontend simultaneously. We use modern tech stacks and follow best practices to ensure scalability from day one.</p>

      <h3>Week 4: QA & Launch</h3>
      <p>The final week is dedicated to testing, bug fixes, and deployment. We ensure everything works perfectly before launch.</p>

      <h2>Key Success Factors</h2>
      <ul>
        <li>Clear scope definition</li>
        <li>Dedicated team</li>
        <li>Daily standups</li>
        <li>Agile methodology</li>
        <li>Continuous testing</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Building an MVP in 30 days requires focus, discipline, and the right team. But the benefits are worth it: you get to market faster, validate your idea, and start gathering real user feedback.</p>
    `,
    tags: ['MVP', 'Startup', 'Development', 'Agile'],
  },
  'ai-features-product': {
    title: 'Integrating AI Features Into Your Product',
    author: 'Alex Kumar',
    date: 'Mar 12, 2024',
    readTime: 12,
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8d5c2d0f6f0f0f0f0?w=1200&h=600&fit=crop',
    content: `
      <h2>The AI Revolution</h2>
      <p>Artificial Intelligence is no longer a luxury feature—it's becoming a necessity. Users expect AI-powered features in modern applications.</p>

      <h2>Getting Started with AI</h2>
      <p>Before diving into AI, understand your use case. What problem are you solving? What data do you have?</p>

      <h2>Popular AI Use Cases</h2>
      <ul>
        <li>Chatbots and virtual assistants</li>
        <li>Recommendation engines</li>
        <li>Predictive analytics</li>
        <li>Image recognition</li>
        <li>Natural language processing</li>
      </ul>

      <h2>Implementation Strategies</h2>
      <p>You have several options: build from scratch, use APIs, or leverage pre-built models. Each has pros and cons.</p>

      <h2>Conclusion</h2>
      <p>AI integration doesn't have to be complex. Start small, measure results, and scale what works.</p>
    `,
    tags: ['AI', 'Technology', 'Innovation', 'Machine Learning'],
  },
}

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogPostsData[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--color-bg-page)] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[var(--color-text-primary)] mb-4">Post not found</h1>
          <Link to="/blog" className="text-[var(--color-brand-blue)] font-semibold hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-page)]">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-[var(--color-border-light)]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[var(--color-brand-blue)] font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-96 md:h-[500px] overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border"
                style={{
                  color: 'var(--color-brand-blue)',
                  borderColor: 'rgba(42, 171, 215, 0.3)',
                  background: 'rgba(42, 171, 215, 0.05)',
                }}
              >
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] mb-6 leading-tight font-heading">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-[var(--color-text-muted)] pb-6 border-b border-[var(--color-border-light)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              '--tw-prose-body': 'var(--color-text-body)',
              '--tw-prose-headings': 'var(--color-text-primary)',
              '--tw-prose-links': 'var(--color-brand-blue)',
              '--tw-prose-bold': 'var(--color-text-primary)',
              '--tw-prose-code': 'var(--color-brand-blue)',
            }}
          />

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 py-8 border-t border-b border-[var(--color-border-light)]"
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:shadow-md"
                style={{
                  background: 'var(--color-bg-card)',
                  color: 'var(--color-text-primary)',
                  borderColor: 'var(--color-border-light)',
                }}
              >
                #{tag}
              </span>
            ))}
          </motion.div>

          {/* Share & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[var(--color-text-muted)]">Share:</span>
              <button className="p-2 rounded-full hover:bg-[var(--color-bg-card)] transition-colors">
                <Share2 className="w-5 h-5 text-[var(--color-text-muted)]" />
              </button>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-black text-base uppercase tracking-widest transition-all duration-300 hover:shadow-xl"
              style={{
                background: 'var(--gradient-brand)',
                boxShadow: '0 12px 40px var(--color-brand-glow)',
              }}
            >
              Start Your Project
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
