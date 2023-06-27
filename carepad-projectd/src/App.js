import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Products from './components/Products'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/about us' element={<AboutUs />} />
        <Route path='/contact us' element={<ContactUs/>} />
        <Route
          path='/register'   element={user ? <Navigate to='/' /> : <Register />}
        />
          
        <Route
          path='/login'     element={user ? <Navigate to='/' /> : <Login />}  
        />
         
      </Routes>
    </Router>
  )
}

export default App