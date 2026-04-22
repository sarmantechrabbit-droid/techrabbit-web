import { useState } from 'react'
import { motion } from 'framer-motion'
import BlogCard from './BlogCard'
import { Search, Filter } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    slug: 'building-mvp-30-days',
    title: 'Building an MVP in 30 Days: Our Process',
    description: 'Learn how we help startups launch their products in just 30 days without compromising quality.',
    category: 'Product Development',
    author: 'Sarah Chen',
    date: 'Mar 15, 2024',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    tags: ['MVP', 'Startup', 'Development'],
  },
  {
    id: 2,
    slug: 'ai-features-product',
    title: 'Integrating AI Features Into Your Product',
    description: 'A comprehensive guide on how to add AI capabilities to your application effectively.',
    category: 'AI & Technology',
    author: 'Alex Kumar',
    date: 'Mar 12, 2024',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1677442d019cecf8d5c2d0f6f0f0f0f0?w=800&h=600&fit=crop',
    tags: ['AI', 'Technology', 'Innovation'],
  },
  {
    id: 3,
    slug: 'design-thinking-startups',
    title: 'Design Thinking for Startups',
    description: 'How design thinking methodology can help you solve complex problems and create better products.',
    category: 'Design',
    author: 'Emma Wilson',
    date: 'Mar 10, 2024',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tags: ['Design', 'UX', 'Strategy'],
  },
  {
    id: 4,
    slug: 'scaling-product-team',
    title: 'Scaling Your Product Team: Best Practices',
    description: 'Tips and strategies for growing your product team while maintaining quality and culture.',
    category: 'Team Building',
    author: 'Michael Brown',
    date: 'Mar 8, 2024',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    tags: ['Team', 'Scaling', 'Management'],
  },
  {
    id: 5,
    slug: 'full-stack-development',
    title: 'Full-Stack Development: What You Need to Know',
    description: 'Everything you need to know about full-stack development and why it matters for your startup.',
    category: 'Development',
    author: 'David Lee',
    date: 'Mar 5, 2024',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    tags: ['Development', 'Backend', 'Frontend'],
  },
  {
    id: 6,
    slug: 'product-launch-strategy',
    title: 'Product Launch Strategy That Works',
    description: 'A step-by-step guide to launching your product successfully and getting early traction.',
    category: 'Strategy',
    author: 'Lisa Anderson',
    date: 'Mar 1, 2024',
    readTime: 13,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    tags: ['Launch', 'Strategy', 'Growth'],
  },
]

const categories = ['All', 'Product Development', 'AI & Technology', 'Design', 'Team Building', 'Development', 'Strategy']

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="relative py-4 px-6 md:px-12 bg-[var(--color-bg-page)]">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[var(--color-border-light)] bg-white text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300"
                style={{
                  background: selectedCategory === category ? 'var(--gradient-brand)' : 'white',
                  color: selectedCategory === category ? 'white' : 'var(--color-text-primary)',
                  borderColor: selectedCategory === category ? 'transparent' : 'var(--color-border-light)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-[var(--color-text-muted)] text-lg">
              No articles found. Try adjusting your search or filters.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
