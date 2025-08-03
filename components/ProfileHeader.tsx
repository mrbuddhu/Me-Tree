'use client'

import { motion } from 'framer-motion'
import { Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react'
import { UserProfile } from '@/types'

interface ProfileHeaderProps {
  profile: UserProfile
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const socialIcons = {
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
    github: Github,
    youtube: Youtube,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      {/* Avatar */}
      <div className="mb-6">
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
            <img
              src={profile.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.displayName)}&size=96&background=0ea5e9&color=fff`}
              alt={profile.displayName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">✓</span>
          </div>
        </div>
      </div>

      {/* Name and Bio */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
          {profile.displayName}
        </h1>
        {profile.bio && (
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
            {profile.bio}
          </p>
        )}
      </div>

      {/* Social Links */}
      {profile.socialLinks && (
        <div className="flex justify-center space-x-4 mb-6">
          {Object.entries(profile.socialLinks).map(([platform, url]) => {
            if (!url) return null
            const Icon = socialIcons[platform as keyof typeof socialIcons]
            if (!Icon) return null

            return (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-500 hover:border-primary-500 transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            )
          })}
        </div>
      )}

      {/* Divider */}
      <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6" />
    </motion.div>
  )
} 