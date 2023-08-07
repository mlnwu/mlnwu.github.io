import Head from 'next/head'
import { home } from '../data/portfolio'
import { ThemeProvider } from '../contexts/theme'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/Home.css'
import '../styles/Contact.css'
import '../styles/Footer.css'
import '../styles/Navbar.css'
import '../styles/ProjectCard.css'
import '../styles/Projects.css'
import '../styles/ScrollToTop.css'
import '../styles/About.css'
import 'animate.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ga_measurement_id, pageview } from '../lib/google-analytics'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (!ga_measurement_id) return
    const handleRouteChange = (url) => pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{home.name || 'Portfolio'}</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
