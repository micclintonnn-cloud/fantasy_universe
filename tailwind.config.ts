import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sorvia: {
          // Premium Maritime & Sky Blue Design System
          abyssBlack: '#071a2e',   // Deep Ocean/Sky Base
          deepOcean: '#0a2948',    // Twilight Sky Navy
          midnightNavy: '#0d365e', // Luminous Sky Surface
          oceanBlue: '#134a78',    // Midtone Maritime Sky Blue
          sky: {
            DEFAULT: '#38bdf8',    // Vibrant Sky Blue
            light: '#7dd3fc',     // Pale Sky Cyan
            deep: '#0e3860',      // Deep Sky
            vibrant: '#0284c7',   // Celestial Azure
            glow: 'rgba(56, 189, 248, 0.35)',
          },
          cyan: {
            DEFAULT: '#32E6E0',    // Bioluminescent Cyan
            light: '#6df2ed',
            dark: '#1cb8b3',
            glow: 'rgba(50, 230, 224, 0.4)',
          },
          teal: {
            DEFAULT: '#13B8A6',    // Mystic Teal
            light: '#2dd4bf',
            dark: '#0f766e',
          },
          blue: {
            DEFAULT: '#38bdf8',    // Celestial Sky Blue
            light: '#7dd3fc',
            dark: '#0284c7',
          },
          pearl: '#F0F9FF',        // Sky Mist Pearl White
          silver: '#BAE6FD',       // Sky Mist Silver
          gold: '#D4AF37',         // Ancient Relic Gold
        },
      },
      fontFamily: {
        sans: ["'Bricolage Grotesque'", 'sans-serif'],
        cinzel: ["'Bricolage Grotesque'", 'sans-serif'],
        editorial: ["'Bricolage Grotesque'", 'sans-serif'],
        serif: ["'Bricolage Grotesque'", 'sans-serif'],
        bricolage: ["'Bricolage Grotesque'", 'sans-serif'],
      },
      backgroundImage: {
        'abyss-gradient': 'linear-gradient(180deg, #071a2e 0%, #0a2948 50%, #0d365e 100%)',
        'ocean-radial': 'radial-gradient(ellipse 90% 70% at 50% 0%, rgba(56, 189, 248, 0.25) 0%, #0a2948 55%, #071a2e 100%)',
        'sky-ambient': 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.22) 0%, transparent 60%)',
        'hero-vignette': 'radial-gradient(ellipse at center, transparent 40%, rgba(7, 26, 46, 0.85) 100%)',
        'card-glass': 'linear-gradient(145deg, rgba(14, 56, 96, 0.4) 0%, rgba(10, 41, 72, 0.6) 100%)',
      },
      boxShadow: {
        'sky-glow': '0 0 25px rgba(56, 189, 248, 0.25)',
        'sky-glow-lg': '0 0 50px rgba(56, 189, 248, 0.35)',
        'cyan-glow': '0 0 25px rgba(50, 230, 224, 0.25)',
        'cyan-glow-lg': '0 0 50px rgba(50, 230, 224, 0.35)',
        'teal-glow': '0 0 30px rgba(19, 184, 166, 0.25)',
        'abyss-depth': '0 30px 60px -15px rgba(4, 17, 31, 0.95)',
      },
      letterSpacing: {
        widest: '0.25em',
        epic: '0.35em',
      },
      keyframes: {
        subtleZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        driftParticle: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.3' },
          '50%': { transform: 'translate(10px, -20px)', opacity: '0.7' },
        },
      },
      animation: {
        subtleZoom: 'subtleZoom 20s ease-in-out infinite alternate',
        driftParticle: 'driftParticle 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
