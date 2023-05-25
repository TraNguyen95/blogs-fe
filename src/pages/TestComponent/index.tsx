import { useState } from 'react'
// import queryString from 'query-string'
import axios from 'axios'

export default function Test() {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  axios.defaults.withCredentials = true
  const handleSubmit = (e: React.FormEvent) => {
    const bodyFormData = new FormData()
    for (const [key, value] of Object.entries(input)) {
      bodyFormData.append(key, value)
    }
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: { 'content-type': 'multipart/form-data' },
      data: bodyFormData,
      url: 'http://localhost:5000/api/v1/auth/login'
    }
    axios(options)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error.response.data)
      })
  }
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value })
    // setInput((pre) => {
    //   return { ...pre, [e.currentTarget.name]: e.currentTarget.value }
    // })
  }
  // axios.defaults.withCredentials = true
  const handleGetList = (e: React.FormEvent) => {
    e.preventDefault()
    axios
      .get('http://localhost:5000/api/v1/users', { withCredentials: true })
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }
  console.log(input)
  return (
    <div>
      <div>email</div>
      <input name='email' onChange={handleChange} type='text' />
      <div>password</div>
      <input name='password' onChange={handleChange} type='password' />
      <button onClick={handleSubmit}>submit</button>
      <br />
      <button onClick={handleGetList}>get list</button>
    </div>
  )
}
