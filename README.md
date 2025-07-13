# Terminal Portfolio Clone

A React-based terminal-style interactive portfolio website, inspired by [gateremark.me](https://gateremark.me). Features a realistic terminal interface with command-based navigation and animated ID cards.

## 🚀 Features

### Terminal Interface
- **Fake terminal UI** with black background and green/white text
- **Monospace font** (Fira Code) for authentic terminal feel
- **Blinking cursor** animation using CSS and Framer Motion
- **Command prompt** styled with `$` symbol
- **Scrollable command history** with proper output formatting

### Interactive Commands
- `about` - Displays developer information and skills
- `projects` - Shows portfolio projects with tech stacks
- `contact` - Displays contact information and social links
- `help` - Lists available commands
- `clear` - Clears terminal output
- **Error handling** for unknown commands

### Animated ID Cards
- **Glassmorphism styling** with backdrop blur effects
- **Framer Motion animations** with spring physics
- **Bouncy and stretchy** hover/drag interactions
- **Responsive design** - cards stack on mobile
- **Draggable** with elastic constraints

### Responsive Design
- **Mobile-first** approach
- **Collapsible ID cards** on smaller screens
- **Touch-friendly** interactions
- **Cross-browser** compatibility

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Heroicons** - Icon library
- **Fira Code** - Monospace font
- **EmailJS** - Contact form handling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clip
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🎨 Customization

### Colors
Edit `src/index.css` to change terminal colors:
```css
body {
  background-color: #000; /* Terminal background */
  color: #00ff00; /* Terminal text */
}
```

### Commands
Modify the `commands` object in `src/components/Terminal.js` to add new commands or change existing ones.

### ID Cards
Update the IDCard components in `src/components/Terminal.js` to change:
- Names and roles
- Avatar images
- Descriptions

### Animations
Adjust Framer Motion settings in `src/components/IDCard.js` for different animation behaviors.

## 📁 Project Structure

```
src/
├── components/
│   ├── Terminal.js          # Main terminal component
│   ├── CommandInput.js      # Command input with cursor
│   ├── OutputHistory.js     # Command history display
│   └── IDCard.js           # Animated ID cards
├── App.js                   # Main app component
├── App.css                  # App-specific styles
└── index.css               # Global styles & Tailwind
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration in `tailwind.config.js`:
- Custom font family (Fira Code)
- Custom animations (blink, bounce-in)
- Responsive breakpoints

### Framer Motion
Animation settings are optimized for smooth, spring-based interactions:
- Spring physics for natural feel
- Elastic drag constraints
- Hover state animations

## 🐛 Troubleshooting

### Common Issues

1. **Font not loading**
   - Check internet connection
   - Verify Google Fonts is accessible

2. **Animations not working**
   - Ensure Framer Motion is installed
   - Check browser console for errors

3. **Build errors**
   - Clear node_modules and reinstall
   - Update dependencies

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the maintainer.

---

**Happy coding! 🎉**
