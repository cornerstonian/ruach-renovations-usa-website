import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1c1917',
        stone: '#44403c',
        cream: '#f5f0eb',
        warmwhite: '#fafaf9',
        gold: '#d97706',
        warmgray: '#78716c',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
