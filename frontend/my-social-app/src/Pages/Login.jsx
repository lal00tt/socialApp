import axios from 'axios'
import { useLocation } from 'wouter'

const Login = () => {
    const [ location, setLocation ] = useLocation()

    const login = ( e ) => {
        e.preventDefault()

        const nickname = document.getElementById('nickname').value
        const password = document.getElementById('password').value

        const user = {
            nickname,
            password
        }

        axios.post('http://localhost:3001/usuarios/login', user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('user', JSON.stringify( res.data ))
                setLocation('/inicio')
            }).catch(error => {
                console.log(error)
                alert(error.response.data)
            })
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <form id="formRegister" className="w-1/2 flex flex-col gap-2" onSubmit={login}>
                <label htmlFor="nickname">Nombre de usuario:</label>
                <input id="nickname" type="text" placeholder="Nombre de usuario" />

                <label htmlFor="password">Contraseña:</label>
                <input id="password" type="password" placeholder="Contraseña" />

                <button id="btnSubmit" type="submit"> Login </button>
            </form>
        </div>
    )
}

export default Login