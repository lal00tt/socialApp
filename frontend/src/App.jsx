//Depencias y exportacion de otros modulos
import { useEffect, useState } from 'react'
import  { Link, Route, useLocation } from 'wouter'
import RegistroPage from './Pages/Registro.jsx'
import LoginPage from './Pages/Login.jsx'

import InicioPage from './Pages/Inicio.jsx'

const App = () => {
  const [ location, setLocation ] = useLocation()
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const isLoggin = localStorage.getItem('user')

    if (isLoggin && !user) {
      setUser(JSON.parse(isLoggin))
      setLocation('/inicio')
    }
  })
  
  return(
    <main className='w-full h-screen bg-slate-800'>
      <Route path='/'> 
        <div className="bg-slate-800 w-full h-screen flex flex-col gap-4 items-center justify-center">

          <h1 className='text-5xl font-semibold mb-4 text-white'> Social app </h1>
          <Link href='/registro'>
            <a href='#' className='bg-slate-200 p-2 rounded text-2xl'> Registrase </a>
          </Link>
          <Link href='/login'>
            <a href='#' className='bg-slate-200 p-2 rounded text-2xl'> Inicio de secion </a>
          </Link>
        </div>
      </Route>
      <Route path='/registro' >
        <RegistroPage />
      </Route>
      <Route path='/login' >
        <LoginPage />
      </Route>      
      <Route path='/inicio' >
        <InicioPage user={user} setUser={setUser}/>
      </Route>      
    </main>
  )

}

export default App
