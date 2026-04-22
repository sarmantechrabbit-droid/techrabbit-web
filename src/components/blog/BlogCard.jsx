import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Calendar, User, Clock } from 'lucide-react'
import { useState } from 'react'

export default function BlogCard({ post, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-3xl border bg-white overflow-hidden group cursor-pointer h-full"
      style={{
        borderColor: hovered ? 'var(--color-brand-blue)' : 'var(--color-border-card)',
        boxShadow: hovered
          ? '0 24px 60px -12px rgba(42, 171, 215, 0.25)'
          : '0 2px 20px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Top accent line */}
      <div
        className="h-1 w-full shrink-0 transition-all duration-400"
        style={{
          background: hovered ? 'var(--color-brand-blue)' : 'var(--color-border-light)',
        }}
      />

      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100" style={{ height: 240 }}>
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Category Badge */}
        <motion.div
          className="absolute top-4 left-4 z-10"
          animate={{ y: hovered ? -2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border bg-white/95 backdrop-blur-sm"
            style={{
              color: 'var(--color-brand-blue)',
              borderColor: 'rgba(42, 171, 215, 0.3)',
            }}
          >
            {post.category}
          </span>
        </motion.div>

        {/* Arrow Button */}
        <motion.div
          className="absolute top-4 right-4 z-10"
          animate={{
            rotate: hovered ? 45 : 0,
            scale: hovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="w-10 h-10 rounded-full border flex items-center justify-center backdrop-blur-sm transition-all duration-300"
            style={{
              background: hovered ? 'var(--color-brand-blue)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: hovered ? 'var(--color-brand-blue)' : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <ArrowUpRight
              className="w-4 h-4 transition-colors duration-300"
              style={{
                color: hovered ? 'white' : 'var(--color-text-muted)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 pt-6 pb-6 gap-4">
        {/* Title */}
        <motion.h3
          className="text-xl font-black font-heading text-[var(--color-text-primary)] tracking-tight line-clamp-2"
          animate={{ color: hovered ? 'var(--color-brand-blue)' : 'var(--color-text-primary)' }}
          transition={{ duration: 0.3 }}
        >
          {post.title}
        </motion.h3>

        {/* Description */}
        <p className="text-sm text-[var(--color-text-body)] leading-relaxed line-clamp-2">
          {post.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-xs text-[var(--color-text-muted)] mt-auto pt-4 border-t border-[var(--color-border-light)]">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <motion.span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider border transition-all duration-300"
              style={{
                background: hovered ? 'rgba(42, 171, 215, 0.1)' : 'var(--color-bg-card)',
                color: hovered ? 'var(--color-brand-blue)' : 'var(--color-text-muted)',
                borderColor: hovered ? 'rgba(42, 171, 215, 0.3)' : 'var(--color-border-card)',
              }}
              animate={{ y: hovered ? -1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Read More Link */}
      <Link
        to={`/blog/${post.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`Read ${post.title}`}
      />
    </motion.div>
  )
}
