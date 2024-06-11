import ThemeProvider from "components/ThemeProvider"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import "styles/globals.scss"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return <ThemeProvider defaultLight="bumblebee">{getLayout(<Component {...pageProps} />)}</ThemeProvider>
}

export default MyApp
