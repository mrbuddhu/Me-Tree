# MeTree

A modern linktree clone with customizable layouts. Create beautiful link pages with multiple layout options including grids, rows, and bento layouts.

## ✨ Features

### Layout Options
- **Grid Layout**: Organized grid layout
- **Row Layout**: Simple list layout
- **Bento Layout**: Featured content layout

### Customization
- Custom themes with color schemes
- Personalized avatars and bios
- Social media integration
- Responsive design

### 🚀 Modern Tech Stack
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MeTree
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
MeTree/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── LinkCard.tsx      # Individual link card
│   ├── ProfileHeader.tsx # User profile header
│   └── LayoutSelector.tsx # Layout switcher
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
├── types/                # TypeScript types
│   └── index.ts          # Type definitions
└── public/               # Static assets
```

## 🎨 Layout Types

### Grid Layout
Perfect for showcasing multiple links in an organized grid format.

### Row Layout
A simple, clean list layout for minimal designs.

### Bento Layout
A modern layout with highlighted content for featured links.

## 🎯 Customization

### Themes
MeTree comes with several pre-built themes:
- **Ocean Blue**: Clean blue gradient theme
- **Sunset**: Warm orange and pink theme
- **Forest**: Natural green and purple theme
- **Midnight**: Dark theme with purple accents

### Adding Custom Themes
You can easily add custom themes by modifying the `defaultThemes` array in `types/index.ts`:

```typescript
{
  name: 'Custom Theme',
  primaryColor: '#your-color',
  secondaryColor: '#your-color',
  backgroundColor: '#your-color',
  textColor: '#your-color',
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
MeTree can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Linktree
- Built with Next.js and Tailwind CSS
- Icons by Lucide React
- Animations by Framer Motion

---

**Made for the creator community** 
# Me-Tree