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
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src={profile.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.displayName)}&size=96&background=0ea5e9&color=fff`}
              alt={profile.displayName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-sm font-bold">✓</span>
          </div>
        </div>
      </div>

      {/* Name and Bio */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {profile.displayName}
        </h1>
        {profile.bio && (
          <p className="text-white/70 text-lg max-w-md mx-auto leading-relaxed">
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
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 backdrop-blur-sm"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            )
          })}
        </div>
      )}

      {/* Divider */}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6" />
    </motion.div>
  )
} 