import { MotionConfig } from 'framer-motion'
import useTheme from './hooks/useTheme'
import CustomCursor from './components/animation/CustomCursor'
import ScrollProgress from './components/animation/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingEnquiry from './components/layout/FloatingEnquiry'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Sports from './components/sections/Sports'
import Rankings from './components/sections/Rankings'
import Voices from './components/sections/Voices'
import Visitors from './components/sections/Visitors'
import Awards from './components/sections/Awards'
import Parents from './components/sections/Parents'
import Enquiry from './components/sections/Enquiry'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <MotionConfig reducedMotion="never">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[80] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black">
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <Stats />
        <Sports />
        <Rankings />
        <Voices />
        <Visitors />
        <Awards />
        <Parents />
        <Enquiry />
      </main>
      <Footer />
      <FloatingEnquiry />
    </MotionConfig>
  )
}
