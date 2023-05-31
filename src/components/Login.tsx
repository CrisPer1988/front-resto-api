import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"

const Login = () => {
    const [token, setToken] = useState<null>()
    const {handleSubmit, register, reset} = useForm()

    const submit = (data:any) => {
        const url = "http://localhost:3400/api/v1/users/login"

        axios.post(url, data)
        .then(res => {
            setToken(res.data)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("name", res.data.name)

        })
        .catch(err => console.log(err))

    }

    console.log(token);
    

  return (
    <form className='form__auth' onSubmit={handleSubmit(submit)}>
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

export default Login