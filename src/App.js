import { Outlet } from 'react-router-dom'
import './App.css'
import Aside from './components/Aside'
import NavBar from './components/NavBar'



const App = () => {

  return (
    <>
    <Aside/>
    <div style={{
      scrollBehavior:'smooth'
    }}>
    <NavBar/>
    <section style={{
      width:'40%',
      marginTop: '10rem',
      padding: '10px',
      height:'80vh',
      position:'fixed',
      top: 50, right: 500, left: 700, 
      color:'white',
      // scrollBehavior: 'smooth',
      // marginTop:'4rem'
    }}>

    <Outlet />
    {/* <div style={{    }}> */}
    

    {/* </div> */}


    </section>
    {/* <section style={{
      scrollBehavior: 'smooth',
      marginTop:'4rem'
    }}>
  
    </section> */}
    </div>    
    </>
  )
}

export default App
