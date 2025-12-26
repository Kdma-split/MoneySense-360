import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
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
import { Button } from "./ui/button"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { UserContext } from '../contexts/user.context' 

// function Register() {
//     const formData = {firstname: "", lastname: "", email: "", password: "", confirmPassword: ""}
//     const [inputs, setInputs] = useState(formData)
//     const [errors, setError] = useState({flag: false, message: ""})
//     const [loading, setLoading] = useState(false)
//     // const [submit, setSubmit] = useState(false)

//     const handleInputs = (e) => {
//         console.log(inputs)
//         setInputs({...inputs, [e.target.name]: e.target.value})
//     }
    
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const {firstname, lastname, email, password, confirmPassword} = inputs
//         console.log(firstname, lastname, email, password)
//         if (!firstname || !lastname || !email || !password || !confirmPassword) return
//         const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/
//         const nameRegex = /^[^0-9\s\W_]+$/
//         if (!nameRegex.test(firstname)) {
//             setError({
//                 flag: true,
//                 message: "Firstname must not contain any special charecters..."
//             })
//             setInputs({...inputs, [firstname]: ""})
//             return          
//         }
//         else if (!nameRegex.test(lastname)) {
//             setError({
//                 flag: true,
//                 message: "Lastname must not contain any special charecters..."
//             })
//             setInputs({...inputs, [lastname]: ""})
//             return          
//         }
//         else if (!emailRegex.test(email)) {
//             setError({
//                 flag: true,
//                 message: "Please enter a proper email..."
//             })
//             setInputs({...inputs, [email]: ""})
//             return
//         }
//         else if (password.length < 8) {
//             setError({
//                 flag: true,
//                 message: "Plassword must be of atleast 8 charecters..."
//             })
//             setInputs({...inputs, [password]: ""})
//             return 
//         }
//         else if(password != confirmPassword) {
//             setError({
//                 flag: true,
//                 message: "Plassword and Confirm Password must match..."
//             })
//             setInputs({...inputs, [confirmPassword]: ""})
//             return       
//         }
//         // setSubmit(true)
//         setLoading(true)
//         // try {
//             // const req = await axios.post(`${import.meta.env.ENDPOINT}/register`)
//         //     setUser(data.name)
//         // } catch(err) {

//         // }
//     }
//     return (
//       <div className='flex justify-center align-center w-screen'>
//           <Card className="pt-4 shadow-green-500 shadow-2xl pb-5">
//               <CardHeader className='pp-4 flex-col justify-cente'>
//                   <CardTitle className='flex justify-center'>
//                       <span className='text-3xl text-slate-900'> Register </span>
//                   </CardTitle>
//                   <CardDescription className='flex justify-center'>
//                       <div> Start planning your savings today </div>
//                   </CardDescription>
//               </CardHeader>
  
//               <CardContent>
//                   <form>
//                       <div className="p-2">
//                       <FieldLabel htmlFor="firstname"> First name </FieldLabel>
//                       <Input 
//                           id = "firstname"
//                           name = "firstname"
//                           className = "p-1 active:border-green-700 "
//                           type = "text"
//                           onChange = {(e) => handleInputs(e)}
//                           value = {inputs.firstname}
//                           placeholder="Enter your firstname"
//                         />
//                       </div>
  
//                       <div className="p-2">
//                       <FieldLabel htmlFor="lastname"> Lastname </FieldLabel>
//                       <Input 
//                           id = "lastname"
//                           name = "lastname"
//                           className = "p-1 active:border-green-700"
//                           type = "text"
//                           onChange = {(e) => handleInputs(e)}
//                           value = {inputs.lastname}
//                           placeholder="Enter your surname"
//                         />
//                       </div>

//                     <div className="p-2">
//                       <FieldLabel htmlFor="email"> Email </FieldLabel>
//                       <Input 
//                           id = "email"
//                           name = "email"
//                           className = "p-1 active:border-green-700"
//                           type = "text"
//                           onChange = {(e) => handleInputs(e)}
//                           value = {inputs.lemail}
//                           placeholder="Enter your email"
//                         />
//                       </div>

//                       <div className="p-2">
//                       <FieldLabel htmlFor="password"> Password </FieldLabel>
//                       <Input 
//                           id = "password"
//                           name = "password"
//                           className = "p-1 active:border-green-700"
//                           type = "password"
//                           onChange = {(e) => handleInputs(e)}
//                           value = {inputs.password}
//                           placeholder="Enter your surname"
//                         />
//                       </div>

//                       <div className="p-2">
//                       <FieldLabel htmlFor="cnf_password"> Confirm Password </FieldLabel>
//                       <Input 
//                           id = "cnf_password"
//                           name = "confirmPassword"
//                           className = "p-1 active:border-green-700"
//                           type = "password"
//                           onChange = {(e) => handleInputs(e)}
//                           value = {inputs.confirmPassword}
//                           placeholder="Enter your surname"
//                         />
//                       </div>
  
//                       <Button
//                           className = {`p-2 w-full flex justify-center items-center  bg-green-700 active:bg-green-900 hover:bg-green-800 ${loading && "bg-green-900"}`}
//                           onClick = {(e) => handleSubmit(e)}
//                       >
//                           {
//                               loading
//                                   ? <span className="text-amber-100"> Loading... </span> 
//                                   : <span> Register </span>
//                           }
//                       </Button>
//                   </form>
//               </CardContent>
                      
//               {/* <CardFooter className="pt-1 pb-3 flex justify-center items-center ">
//                   <div className='my-auto'>
//                     <Link to="/login"> Already a member? Please Login! </Link>
//                   </div>
//               </CardFooter> */}
//           </Card>
//       </div>
//     )
// }

// export default Register











export default function Register() {
  const formData = { firstname: "", lastname: "", email: "", password: "", confirmPassword: "" }
  const [inputs, setInputs] = useState(formData)
  const [errors, setError] = useState({ flag: false, message: "" })
  const [loading, setLoading] = useState(false)
  const {setUser} = UserContext()
  const navigate = useNavigate()

  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log("SUBMISSION INVOKED...")
    console.log(inputs)
    const {firstname, lastname, email, password, confirmPassword} = inputs
    if (!email || !password) return 
    const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
        setError({
            flag: true,
            message: "Please enter a proper email..."
        })
        console.log("wrong email format.")
        setInputs({...inputs, [name]: ""})
        return
    }
    else if (password.length < 8) {
        setError({
            flag: true,
            message: "Plassword must be of atleast 8 charecters..."
        })
        setInputs({...inputs, [name]: ""})
        console.log("wrong password format.")
        return 
    }
    else if (!(password == confirmPassword)) {
        setError({
            flag: true,
            message: "Plassword and confirm password must be the same..."
        })
        setInputs({...inputs, [name]: ""})
        console.log("passwords mismatch.")
        return 
    }
    console.log("ALL TESTS PASSED...")
    // setSubmit(true)
    setLoading(true)
    console.log("QUERYING BACKEND ENDPOINT")
    await axios.post(`http://localhost:8000/api/v1/auth/signup`, 
        {
          "username": `${firstname + lastname}`,
          "first_name": firstname,
          "last_name": lastname,
          email,
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
    )
    .then(res => console.log(res))
    .then(res => {
      setUser({
        "first_name": res.data.first_name,
        "last_name": res.data.last_name,
        "eamil": res.data.email,
      })
      navigate('/')
    })
    .catch(err => {
      console.log("SIGN UP ATTEMPT FAILED...")
      // console.log("res.message")
      setError()
    })
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-green-200 px-4">
      <Card className="w-full max-w-lg md:max-w-xl lg:max-w-2xl p-6 md:p-10 shadow-green-500 shadow-2xl rounded-3xl">
        
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-slate-900">
            Register
          </CardTitle>
          <CardDescription className="text-emerald-700">
            Start planning your savings today
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            
            <div>
              <FieldLabel htmlFor="firstname">First name</FieldLabel>
              <Input
                id="firstname"
                name="firstname"
                onChange={handleInputs}
                value={inputs.firstname}
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <FieldLabel htmlFor="lastname">Last name</FieldLabel>
              <Input
                id="lastname"
                name="lastname"
                onChange={handleInputs}
                value={inputs.lastname}
                placeholder="Enter your surname"
              />
            </div>

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

            <div>
              <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={handleInputs}
                value={inputs.confirmPassword}
              />
            </div>

            <Button
              // type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-lg py-6 rounded-xl"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Loading..." : "Register"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
