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
import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container=styled.div`
margin:50px;
`
const App = () => {
  const [file,setFile]=useState()
  const user = useSelector((state)=>state.user.currentUser)
  const handleUpload=async  (e)=>{
    const formdata= new FormData()
    formdata.append('file',file)
   await axios.post("http://localhost:5000/upload",formdata)
    .then(res=>{console.log(res)})
    .catch(res=>{console.log(res)})

    console.log(file)
  }


  
  return (
    <>
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
    <Container>
        <input type="file" onChange={e=>setFile(e.target.files[0])}>
        </input>
          <button onClick={handleUpload}>upload</button>
        
      </Container>
    </div>
    </>
  )
}

export default App