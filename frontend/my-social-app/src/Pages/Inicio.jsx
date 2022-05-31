import  { Link, Route, useLocation } from 'wouter'

import NavBar from '../Components/NavBar'
import Header from '../Components/Header'
import Content from '../Components/Content'

const Inicio = ({ user }) => {
    const [ location, setLocation ] = useLocation()

    if (!user) {
        setLocation('/')
        return null
    }

    return(
        <section className='w-full h-full bg-white custom-grid'>
            <NavBar user={user}></NavBar>
            <Header user={user}/>
            <Content user={user}/>
        </section>
        
    )
}

export default Inicio