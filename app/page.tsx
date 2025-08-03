'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Grid, List, Layout } from 'lucide-react'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-primary-500 mr-2" />
              <h1 className="text-4xl md:text-6xl font-bold text-gradient">
                MeTree
              </h1>
            </div>
                         <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
               Create beautiful link pages with multiple layouts
             </p>
            
            {/* Layout Selector */}
            <LayoutSelector
              currentLayout={currentLayout}
              onLayoutChange={setCurrentLayout}
            />
          </motion.div>
        </div>
      </header>

      {/* Demo Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
                     <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
             See MeTree in Action
           </h2>
           <p className="text-slate-600 dark:text-slate-400">
             Experience the layouts
           </p>
        </motion.div>

        {/* Demo Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-xl"
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
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
             Why Choose MeTree?
           </h2>
           <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
             Stand out with our customization options and beautiful layouts
           </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
                         {
               icon: <Grid className="w-8 h-8" />,
               title: 'Multiple Layouts',
               description: 'Choose from grid, row, or bento layouts',
             },
             {
               icon: <Sparkles className="w-8 h-8" />,
               title: 'Custom Themes',
               description: 'Personalize colors and backgrounds',
             },
             {
               icon: <Layout className="w-8 h-8" />,
               title: 'Responsive Design',
               description: 'Looks perfect on all devices',
             },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
             Ready to Create Your MeTree?
           </h2>
           <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
             Join creators using MeTree to showcase their links
           </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Get Started Free
            </button>
            <button className="btn-secondary">
              View Examples
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 