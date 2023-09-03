import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shopping from './pages/Shopping'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Nab from './component/nab'
import Loading from './component/Loading'
import { useSelector } from 'react-redux'

function App () {
  const isLoading = useSelector(state => state.isLoading)

  return (
    <>
      <HashRouter>
        {isLoading && <Loading />}
        <Nab />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shopping' element={<Shopping />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
