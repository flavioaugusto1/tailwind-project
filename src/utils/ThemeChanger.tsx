import { useTheme } from 'next-themes'
import { Button } from '../components/Button'
import { Moon, SunMoon } from 'lucide-react'

export function ThemeChanger() {
  const { theme, setTheme } = useTheme()

  function handleChangeTheme(theme: string) {
    setTheme(theme)
  }

  return (
    <div>
      {theme === 'light' ? (
        <Button variant="ghost" onClick={() => handleChangeTheme('dark')}>
          <Moon />
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => handleChangeTheme('light')}>
          <SunMoon />
        </Button>
      )}
    </div>
  )
}
