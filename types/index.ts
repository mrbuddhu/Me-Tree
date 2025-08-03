export type LayoutType = 'grid' | 'row' | 'bento'

export interface Link {
  id: string
  title: string
  url: string
  icon?: string
  featured?: boolean
  color?: string
  description?: string
}

export interface UserProfile {
  id: string
  username: string
  displayName: string
  bio?: string
  avatar?: string
  theme: {
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
  }
  layout: LayoutType
  links: Link[]
  socialLinks?: {
    twitter?: string
    instagram?: string
    linkedin?: string
    github?: string
    youtube?: string
  }
}

export interface Theme {
  name: string
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  textColor: string
}

export const defaultThemes: Theme[] = [
  {
    name: 'Ocean Blue',
    primaryColor: '#0ea5e9',
    secondaryColor: '#d946ef',
    backgroundColor: '#f8fafc',
    textColor: '#0f172a',
  },
  {
    name: 'Sunset',
    primaryColor: '#f59e0b',
    secondaryColor: '#ec4899',
    backgroundColor: '#fef3c7',
    textColor: '#451a03',
  },
  {
    name: 'Forest',
    primaryColor: '#10b981',
    secondaryColor: '#8b5cf6',
    backgroundColor: '#f0fdf4',
    textColor: '#064e3b',
  },
  {
    name: 'Midnight',
    primaryColor: '#6366f1',
    secondaryColor: '#ec4899',
    backgroundColor: '#0f172a',
    textColor: '#f1f5f9',
  },
] 