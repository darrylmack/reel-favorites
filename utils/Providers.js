import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <div>{children}</div>
    </ThemeProvider>
  )
}
