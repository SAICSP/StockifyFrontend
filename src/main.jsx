import Homepage from './LandingPage/Home/Homepage'
import Navbar from './LandingPage/Navbar'
import {Routes,Route,BrowserRouter } from 'react-router-dom'
import Footer from './LandingPage/Footer'
import SupportPage from './LandingPage/Support/SupportPage'
import AboutPage from './LandingPage/About/AboutPage'
import PricingPage from './LandingPage/Pricing/PricingPage'
import ProductsPage from './LandingPage/Products/ProductsPage'
import SignupPage from './LandingPage/Signup/SignupPage'
import NotFound from './NotFound'
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './LandingPage/Login/LoginPage'

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
