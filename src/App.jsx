import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Join from './pages/Join.jsx'
import BusinessPage from './pages/BusinessPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ProgramPage from './pages/ProgramPage.jsx'
import NotFound from './pages/NotFound.jsx'


export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/business/:slug" element={<BusinessPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/program/:slug" element={<ProgramPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
