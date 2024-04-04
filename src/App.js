import { Outlet } from 'react-router-dom'
import './App.css'
import Aside from './components/Aside'
import NavBar from './components/NavBar'

const App = () => {

  return (
    <>
    <Aside/>
    <div className='main-content'>
    <NavBar/>
    <div style={{
      width:'40%',
      marginTop: '10rem',
      padding: '10px',
      height:'80vh',
      position:'fixed',
      top: 50, right: 500, left: 700, 
      color:'white',
    }}>
    <Outlet />
    </div>
    <section style={{
      scrollBehavior: 'smooth'
    }}>
    
    </section>
    </div>    
    </>
  )
}

export default App
