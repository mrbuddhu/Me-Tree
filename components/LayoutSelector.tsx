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
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
        Choose Your Layout
      </h3>
      
      <div className="flex space-x-2">
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
                relative px-4 py-3 rounded-lg border-2 transition-all duration-200
                ${isActive 
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300' 
                  : 'border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:border-primary-300 dark:hover:border-primary-700'
                }
              `}
            >
              <div className="flex items-center space-x-2">
                <Icon className="w-5 h-5" />
                <span className="font-medium">{option.name}</span>
              </div>
              
              {isActive && (
                <motion.div
                  layoutId="activeLayout"
                  className="absolute inset-0 border-2 border-primary-500 rounded-lg"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
      
      <div className="text-center">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          {layoutOptions.find(opt => opt.type === currentLayout)?.description}
        </p>
      </div>
    </div>
  )
} 