import  { Link, Route, useLocation } from 'wouter'

const NavBar = ({user, setUser}) => {
    const [ location, setLocation ] = useLocation()

    const logout = ( ) => {
        localStorage.removeItem('user')
        setUser(null)
        setLocation('/')
    }

    return (
        <nav className="max-w-xs h-full bg-slate-100 p-4 nav border-r-2 border-slate-50">
            <section className="w-full h-full flex flex-col items-center justify-between">
                <div className='flex flex-col items-center'>
                    <img src={user.img} className='w-20 h-20 rounded-full object-cover'></img>
                    <h1 className='text-5xl font-semibold mb-4'> {user.nombre} </h1>
                    <span className='text-slate-400 font-semibold mb-4'>@{user.nickname} </span>
                </div>
                <div className="w-full flex justify-center">
                    <button onClick={logout}>Cerrar sesion</button>
                </div>
            </section>
        </nav>
    )
}

export default NavBar