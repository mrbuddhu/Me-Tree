'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Grid, List, Layout, ArrowRight, Play, Star, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LayoutType, defaultThemes } from '@/types'
import LinkCard from '@/components/LinkCard'
import ProfileHeader from '@/components/ProfileHeader'
import LayoutSelector from '@/components/LayoutSelector'

// Demo data
const demoProfile = {
  id: 'demo',
  username: 'demo',
  displayName: 'John Doe',
  bio: 'Digital creator & tech enthusiast.',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  theme: defaultThemes[0],
  layout: 'grid' as LayoutType,
  links: [
    {
      id: '1',
      title: 'Portfolio',
      url: 'https://portfolio.example.com',
      icon: '✨',
      description: 'My latest work',
    },
    {
      id: '2',
      title: 'Blog',
      url: 'https://blog.example.com',
      icon: '📝',
      description: 'Tech thoughts',
    },
    {
      id: '3',
      title: 'YouTube',
      url: 'https://youtube.com/@example',
      icon: '🎥',
      description: 'Tutorials',
      featured: true,
    },
    {
      id: '4',
      title: 'Twitter',
      url: 'https://twitter.com/example',
      icon: '📱',
      description: 'Daily updates',
    },
    {
      id: '5',
      title: 'GitHub',
      url: 'https://github.com/example',
      icon: '⚡',
      description: 'Open source',
    },
    {
      id: '6',
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/example',
      icon: '💡',
      description: 'Professional',
    },
  ],
  socialLinks: {
    twitter: 'https://twitter.com/example',
    instagram: 'https://instagram.com/example',
    linkedin: 'https://linkedin.com/in/example',
    github: 'https://github.com/example',
    youtube: 'https://youtube.com/@example',
  },
}

export default function HomePage() {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>('grid')
  const [currentTheme, setCurrentTheme] = useState(defaultThemes[0])

  const getLayoutClass = (layout: LayoutType) => {
    switch (layout) {
      case 'grid':
        return 'link-card-grid'
      case 'row':
        return 'link-card-row'
      case 'bento':
        return 'link-card-bento'
      default:
        return 'link-card-grid'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Cool Title Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MeTree</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white/70 hover:text-white transition-colors">Features</button>
              <button className="text-white/70 hover:text-white transition-colors">Pricing</button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 mb-8"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">The Future of Link Pages</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Create Stunning
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Link Pages
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Build beautiful, customizable link pages with multiple layouts. 
              Stand out from the crowd with our modern design system.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-8 text-white/70"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm">Links Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Layout Showcase */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Style
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Three unique layouts to match your personality and brand
            </p>
          </motion.div>

          {/* Layout Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <LayoutSelector
              currentLayout={currentLayout}
              onLayoutChange={setCurrentLayout}
            />
          </motion.div>

          {/* Demo Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
          >
            <ProfileHeader profile={demoProfile} />
            
            <div className={cn('mt-8', getLayoutClass(currentLayout))}>
              {demoProfile.links.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={cn(
                    'link-card',
                    currentLayout === 'bento' && link.featured && 'featured'
                  )}
                >
                  <LinkCard link={link} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose MeTree?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Built for creators who want to stand out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Grid className="w-8 h-8" />,
                title: 'Multiple Layouts',
                description: 'Choose from grid, row, or bento layouts',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Custom Themes',
                description: 'Personalize colors and backgrounds',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lightning Fast',
                description: 'Optimized for speed and performance',
                gradient: 'from-yellow-500 to-orange-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your MeTree?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already using MeTree to showcase their links beautifully
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center">
                <span>Start Building Now</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm">
                View Examples
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 