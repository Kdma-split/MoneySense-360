import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
    Card,
    // CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserContext } from '../contexts/user.context'
import axios from "axios"
// import axios from '../config/axios.js'

function Login({setLoginReq}) {
    const formData = {email: "", password: ""}
    const [inputs, setInputs] = useState(formData)
    const [errors, setError] = useState({flag: false, message: ""})
    const [loading, setLoading] = useState(false)
    const {setUser} = UserContext() 
    const navigate = useNavigate()
    // const [submit, setSubmit] = useState(false)

    const handleInputs = (e) => {
        console.log(inputs)
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("SUBMISSION INVOKED...")
        console.log(inputs)
        const {email, password} = inputs
        if (!email || !password) return 
        const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(email)) {
            setError({
                flag: true,
                message: "Please enter a proper email..."
            })
            console.log("wrong email format.")
            setInputs({...inputs, email: ""})
            return
        }
        else if (password.length < 8) {
            setError({
                flag: true,
                message: "Plassword must be of atleast 8 charecters..."
            })
            setInputs({...inputs, password: ""})
            console.log("wrong password format.")
            return 
        }
        console.log("ALL TESTS PASSED...")
        // setSubmit(true)
        setLoading(true)
        console.log("QUERYING BAACKEND ENDPOINT")
        // await axios.post(`/auth/login`)
        await axios.post(`http://localhost:8000/api/v1/auth/login`, 
            {
              email,
              password
            },
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
        )
        // .then(
        //     res => JSON.parse(res)
        //   )
          .then(res => {
            setUser({
              "first_name": res.data.first_name,
              "last_name": res.data.last_name,
              "email": res.data.email,
            })
            // navigate('/')    // not needed, as login is not occuring on a particular route...
            setLoginReq(false)
            // localStorage.setItem('token', res.token)
            console.log("LOGIN COMPLETED SUCCESSFULLY!!!")
          })
          .catch(err => {
            console.log("FAILED LOGIN ATTEMPT...")
            console.error(err)
            setError()
          })
        }
    return (
    //   <div className='flex justify-center items-center w-screen'>
    //       <Card className="relative py-8 shadow-green-700">
    //           <div className='absolute top-0 right-0 p-3 pb-5 pr-4 z-10'>
    //             <button
    //                 className="h-full w-full"
    //                 onClick={() => setLoginReq(false)}
    //             >
    //                 C
    //             </button>
    //           </div>

    //           <CardHeader className="p-4 flex-col justify-center">
    //               <CardTitle className="flex justify-center">
    //                   <span className='text-3xl text-slate-900'> Login </span>
    //               </CardTitle>
    //               <CardDescription>
    //                   <div> Let's get ready for your savings plan... </div>
    //               </CardDescription>
    //           </CardHeader>
  
    //           <CardContent>
    //               <form>
    //                   <div className="p-2">
    //                   <FieldLabel htmlFor="email"> Email </FieldLabel>
    //                   <Input 
    //                       id = "email"
    //                       name = "email" 
    //                       className = "p-1 active:border-green-700"
    //                       type = "text"
    //                       onChange = {(e) => handleInputs(e)}
    //                       value = {inputs.email}
    //                       placeholder="Enter your surname"
    //                     />
    //                   </div>

    //                   <div className="p-1 py-3 pb-5">
    //                   <FieldLabel htmlFor="password"> Password </FieldLabel>
    //                   <Input 
    //                       id = "password"
    //                       naem = "password"
    //                       className = "p-2 active:border-green-700"
    //                       type = "password"
    //                       onChange = {(e) => handleInputs(e)}
    //                       value = {inputs.password}
    //                       placeholder="Enter your password"
    //                     />
    //                   </div>
  
    //                   <Button
    //                       className = {`py-1 p-2 w-full flex justify-center items-center  bg-green-700 active:bg-green-900 hover:bg-green-800 ${loading && "bg-green-900"}`}
    //                       onClick = {(e) => handleSubmit(e)}
    //                   >
    //                       {
    //                           loading
    //                             ? <span> Loading... </span>
    //                             : <span className="text-amber-100"> Login </span> 
    //                       }
    //                   </Button>
    //               </form>
    //           </CardContent>
                      
    //           <CardFooter className="flex justify-center items-center ">
    //               <div className='my-auto'>
    //                   <Link to="/register"> Haven't yet joined our community? Please Register! </Link>
    //               </div>
    //           </CardFooter>
    //       </Card>
    //   </div>

        <div className="min-h-screen w-full flex items-center justify-center bg-green-200 px-4">
      <Card className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl p-6 md:p-10 shadow-green-500 shadow-2xl rounded-3xl">
        <div className='absolute top-0 right-0 p-3 pb-8 pr-4 z-10'>
            <button
                className="h-full w-full"
                onClick={() => setLoginReq(false)}
            >
                C
            </button>
        </div>
        
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-slate-900">
            Login
          </CardTitle>
          <CardDescription className="text-emerald-700">
            Start planning your savings today
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                onChange={handleInputs}
                value={inputs.email}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={handleInputs}
                value={inputs.password}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-lg py-6 rounded-xl"
              // onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
      </div>
    )
}

export default Login