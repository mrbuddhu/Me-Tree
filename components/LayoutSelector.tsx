'use client'

import { motion } from 'framer-motion'
import { Grid, List, Layout } from 'lucide-react'
import { LayoutType } from '@/types'

interface LayoutSelectorProps {
  currentLayout: LayoutType
  onLayoutChange: (layout: LayoutType) => void
}

const layoutOptions = [
  {
    type: 'grid' as LayoutType,
    name: 'Grid',
    icon: Grid,
    description: 'Grid layout',
  },
  {
    type: 'row' as LayoutType,
    name: 'Row',
    icon: List,
    description: 'List layout',
  },
  {
    type: 'bento' as LayoutType,
    name: 'Bento',
    icon: Layout,
    description: 'Featured layout',
  },
]

export default function LayoutSelector({ currentLayout, onLayoutChange }: LayoutSelectorProps) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex space-x-3">
        {layoutOptions.map((option) => {
          const Icon = option.icon
          const isActive = currentLayout === option.type
          
          return (
            <motion.button
              key={option.type}
              onClick={() => onLayoutChange(option.type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative px-6 py-4 rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm
                ${isActive 
                  ? 'border-white/30 bg-white/10 text-white shadow-2xl shadow-white/10' 
                  : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : 'bg-white/10 text-white/70'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">{option.name}</div>
                  <div className="text-sm opacity-70">{option.description}</div>
                </div>
              </div>
              
              {isActive && (
                <motion.div
                  layoutId="activeLayout"
                  className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
} 