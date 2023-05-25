import { useState } from 'react'
import authApi from '../../apis/auth.api'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { Button, Input } from 'antd'

interface IRegister {
  email: string
  password: string
  mobile: string
  lastname: string
  firstname: string
}

export default function Register() {
  const [input, setInput] = useState<IRegister>({
    email: '',
    password: '',
    mobile: '12312313',
    lastname: 'tra',
    firstname: 'nguyen'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const registerAccountMutation = useMutation({
    mutationFn: (body: IRegister) => authApi.registerAccount(body)
  })
  const handleSubmit = async () => {
    registerAccountMutation.mutate(input, {
      onSuccess: (data) => {
        console.log(data)
        toast.success('success', {
          position: 'top-center',
          autoClose: 1000
        })
      },
      onError: (error) => {
        console.log(error)
        toast.error('error', {
          position: 'top-center',
          autoClose: 1000
        })
      }
    })
    // const mes = await authApi.registerAccount(input)
    // if (mes.statusText == 'OK') {
    //   toast.success('success', {
    //     position: 'top-center',
    //     autoClose: 1000
    //   })
    // }
    // console.log(mes)
  }
  console.log(input)
  return (
    <div>
      <label htmlFor='email'>email</label>
      <Input name='email' onChange={handleChange} id='email' type='text' />
      <label htmlFor='password'>password</label>
      <Input name='password' onChange={handleChange} id='password' type='text' />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}
