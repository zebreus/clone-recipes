import { useLocalStorage } from "hooks/useLocalStorage"
import { usePrefersDarkness } from "hooks/usePrefersDarkness"
import { useEffect, useState } from "react"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultLight?: string
  defaultDark?: string
}

// You can generate a new theme at https://daisyui.com/theme-generator/
const ThemeProvider = ({ children, defaultLight = "light", defaultDark = "dark" }: ThemeProviderProps) => {
  // Always start with light theme for SSR hydration to work
  const [theme, setTheme] = useState<string>(defaultLight)

  const prefersDarkness = usePrefersDarkness()
  const [localStorageTheme] = useLocalStorage("theme", "")
  console.log("lst", localStorageTheme)

  const userTheme = localStorageTheme || (prefersDarkness ? defaultDark : defaultLight)

  useEffect(() => {
    console.log("cmptheme", theme, userTheme)
    if (theme !== userTheme) {
      setTheme(userTheme)
    }
  }, [userTheme])

  console.log("theme", theme)

  return (
    <div className="theme-provider" data-theme={theme}>
      {children}
    </div>
  )
}

export default ThemeProvider
