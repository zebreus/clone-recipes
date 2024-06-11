import { useEffect, useMemo, useState } from "react"

export const usePrefersDarkness = () => {
  const darkModeQuery = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia?.("(prefers-color-scheme: dark)") : undefined),
    [typeof window !== "undefined"]
  )

  const [dark, setDark] = useState(() => !!darkModeQuery?.matches)

  useEffect(() => {
    const listener = (event: MediaQueryListEvent) => {
      setDark(event.matches)
    }

    darkModeQuery?.addEventListener("change", listener)

    return () => darkModeQuery?.removeEventListener("change", listener)
  }, [!!darkModeQuery])

  console.log(dark)
  return dark
}
