/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'oklch(0.05 0 0)',
                foreground: 'oklch(0.985 0 0)',
                card: 'oklch(0.1 0 0)',
                'card-foreground': 'oklch(0.985 0 0)',
                popover: 'oklch(0.1 0 0)',
                'popover-foreground': 'oklch(0.985 0 0)',
                primary: 'oklch(0.6 0.15 142)',
                'primary-foreground': 'oklch(0.05 0 0)',
                secondary: 'oklch(0.2 0 0)',
                'secondary-foreground': 'oklch(0.985 0 0)',
                muted: 'oklch(0.15 0 0)',
                'muted-foreground': 'oklch(0.7 0 0)',
                accent: 'oklch(0.6 0.15 142)',
                'accent-foreground': 'oklch(0.05 0 0)',
                destructive: 'oklch(0.577 0.245 27.325)',
                border: 'oklch(0.3 0 0)',
                input: 'oklch(0.2 0 0)',
                ring: 'oklch(0.6 0.15 142)',
                'gate-green': '#00A650',
                'fire-orange': '#FF4500',
                'electric-blue': '#0080FF',
            }
        },
    },
    plugins: [],
}