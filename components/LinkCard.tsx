'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Link } from '@/types'
import { getDomainFromUrl, formatUrl } from '@/lib/utils'

interface LinkCardProps {
  link: Link
}

export default function LinkCard({ link }: LinkCardProps) {
  const handleClick = () => {
    window.open(formatUrl(link.url), '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="link-card p-6 cursor-pointer group"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {link.icon && (
            <div className="text-2xl w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
              {link.icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-lg mb-1 truncate">
              {link.title}
            </h3>
            {link.description && (
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1 line-clamp-2">
                {link.description}
              </p>
            )}
            <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
              {getDomainFromUrl(link.url)}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary-500 transition-colors" />
        </div>
      </div>
      
      {/* Gradient overlay for featured links */}
      {link.featured && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl pointer-events-none" />
      )}
    </motion.div>
  )
} 