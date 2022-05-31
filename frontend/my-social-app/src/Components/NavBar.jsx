import  { Link, Route, useLocation } from 'wouter'

const NavBar = ({user}) => {
    const [ location, setLocation ] = useLocation()
    let arr = [1,2,3,4,5,6,]

    const logout = ( ) => {
        localStorage.removeItem('user')
        setLocation('/')
    }

    return (
        <nav className="max-w-xs h-full bg-slate-100 p-4 nav border-r-2 border-slate-50">
            <section className="w-full h-auto flex flex-col items-center justify-center">
                <img src={user.img} className='w-20 h-20 rounded-full object-cover'></img>
                <h1 className='text-5xl font-semibold mb-4'> {user.nombre} </h1>
                <div className="w-full flex justify-center">
                    <button onClick={logout}>Cerrar sesion</button>
                </div>
            </section>
            <section className='h-4/6 flex flex-col gap-4 my-6 overflow-auto'>
                {
                    arr.map(item => {
                        return (
                            <div key={item} className='flex items-center justify-start gap-2'>
                                <img src={user.img} className='w-14 h-14 rounded-full object-cover'></img>
                                <span>Nombre del usuario</span>
                                <span className='w-px h-px rounded-full bg-green-400 p-1'></span>
                            </div>
                        )
                    })
                }
            </section>
        </nav>
    )
}

export default NavBar