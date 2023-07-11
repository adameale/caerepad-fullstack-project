import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
// import Products from './components/Products'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Success from './pages/Success'
import { useSelector } from 'react-redux'
const App = () => {
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route path='/about us' element={<AboutUs />} />
        <Route path='/contact us' element={<ContactUs/>} />
        <Route path='/register' element={user ? <Navigate to='/' /> : <Register />}
        />
        <Route  path='/login' element={user ? <Navigate to='/' /> : <Login />}  />
      </Routes>
    </Router>
    </div>
  )
}

export default App