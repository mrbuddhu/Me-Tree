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
      className="link-card p-6 cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {link.icon && (
            <div className="text-2xl w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
              {link.icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white text-lg mb-1 truncate">
              {link.title}
            </h3>
            {link.description && (
              <p className="text-sm text-white/70 mb-1 line-clamp-2">
                {link.description}
              </p>
            )}
            <p className="text-xs text-white/50 font-mono">
              {getDomainFromUrl(link.url)}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
        </div>
      </div>
      
      {/* Gradient overlay for featured links */}
      {link.featured && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl pointer-events-none" />
      )}
    </motion.div>
  )
} 