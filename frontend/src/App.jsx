import bgImage from './assets/images/bg.jpeg'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureStrip from './components/FeatureStrip'
import BestSellers from './components/BestSellers'
import CustomiseSection from './components/CustomiseSection'
import ValuesStrip from './components/ValuesStrip'
import InstagramFeed from './components/InstagramFeed'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: '100%',
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '400px',
      backgroundAttachment: 'fixed'
    }}>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <FeatureStrip />
        <BestSellers />
        <CustomiseSection />
        <ValuesStrip />
        <InstagramFeed />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App