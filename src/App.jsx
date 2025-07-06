import { useState } from 'react'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='app-container'>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Hero />
        <Gallery />
        <Blog />
        <About/>
        <Contact />
      </div>
    </>
  )
}

export default App
