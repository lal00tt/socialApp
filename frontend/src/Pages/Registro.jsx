import axios from 'axios'

const Registro = () => {

    const onSubmit = (e) => {
        e.preventDefault()

        const nombre = document.getElementById('nombre').value
        const ap = document.getElementById('ap').value
        const am = document.getElementById('am').value
        const nickname = document.getElementById('nickname').value
        const password = document.getElementById('password').value

        const user = {
            nombre,
            ap,
            am,
            nickname,
            password
        }

        axios.post('http://localhost:3001/usuarios/registro', user)
            .then(res => {
                console.log(res.data)
            }).catch(error => {
                console.log(error)
                alert(error.response.data)
            })
            
        
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <form id="formRegister" className="w-1/2 flex flex-col gap-2" onSubmit={onSubmit} >
                <label htmlFor="nombre">Nombre:</label>
                <input id="nombre" type="text" placeholder="Nombre" />

                <label htmlFor="ap">Apellido paterno:</label>
                <input id="ap" type="text" placeholder="Apellido paterno" />

                <label htmlFor="am">Apellido materno:</label>
                <input id="am" type="text" placeholder="Apellido materno" />

                <label htmlFor="nickname">Nombre de usuario:</label>
                <input id="nickname" type="text" placeholder="Nombre de usuario" />

                <label htmlFor="password">Contraseña:</label>
                <input id="password" type="password" placeholder="Contraseña" />

                <button id="btnSubmit" type="submit"> Registrar </button>
            </form>
        </div>
    )
}

export default Registro