import { useState } from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form';
import "./styles/register.css"

const Register = () => {
    const [token, setToken] = useState<null>()
    const {register, handleSubmit, reset} = useForm()


    const submit = (data: any) => {
        const url = "http://localhost:3400/api/v1/users/signup"
    axios.post(url, data)
    .then(res => {
        setToken(res.data)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("name", `${res.data.user.name}`)
    })
    .catch(err => console.log(err))
    }

    const handleSalir = () => {
        localStorage.clear()
        setToken(null)
    }

    console.log(token);
    
    if(localStorage.getItem("name")){
        return <div>
            <h2>Hola {localStorage.getItem("name")}</h2>
            <button onClick={handleSalir}>Salir</button>
        </div>
    } else { 

  return (
    <form className='form__auth' onSubmit={handleSubmit(submit)}>
     
        <div className='items__form'>
            <label htmlFor="name">Nombre</label>
            <input {...register("name")} type="text" />
        </div>
        <div className='items__form'>
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" />
        </div>
        <div className='items__form'>
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" />
        </div>
        <button>Enviar</button>
    </form>
  )
    }
}

export default Register