import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        main: "url('/bg.png')",
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      boxShadow: {
        shape:
          '0px 0px 0px 1px rgba(255, 255, 255, 0.03) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.03) inset, 0px 8px 8px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 2px 2px 0px rgba(0, 0, 0, 0.10), 0px 0px 0px 1px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
