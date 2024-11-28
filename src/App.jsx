import Navbar from './components/navbar/Navbar'
import HomePage from './routes/homePage/homePage'
import './layout.scss'
import { Routes, Route } from 'react-router-dom';
import ListPage from './routes/listPage/ListPage';
import { SinglePage } from './routes/singlePage/SinglePage';
import Login from './routes/login/Login';

function App() {
  return (
    <div className="layout">

      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/list' element={<ListPage />} />
          <Route path='/:id' element={<SinglePage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

    </div>
  )
}

export default App