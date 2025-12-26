import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
// import axios from "axios"

function RiskApetite() {
    const formData = {firstname: "", lastname: "", email: "", password: "", confirmPassword: ""}
    const [inputs, setInputs] = useState(formData)
    const [errors, setError] = useState({flag: false, message: ""})
    const [loading, setLoading] = useState(false)
    // const [submit, setSubmit] = useState(false)

    const handleInputs = (e) => {
        console.log(inputs)
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {firstname, lastname, email, password, confirmPassword} = inputs
        console.log(firstname, lastname, email, password)
        if (!firstname || !lastname || !email || !password || !confirmPassword) return
        
        // setSubmit(true)
        setLoading(true)
        // try {
            // const req = await axios.post(`${import.meta.env.ENDPOINT}/register`)
        //     setUser(data.name)
        // } catch(err) {

        // }
    }
    return (
      <div className='h-screen w-screen'>
        <div className="absolute top-50 left-50 translate--0.5 translate-y-0.5">
          <Card className="h-1/2 w-1/2 border-green-500 shadow-xl">
              <CardHeader>
                  <CardTitle>
                      <span className='text-3xl text-slate-900'> Register </span>
                  </CardTitle>
                  <CardDescription>
                      <div> Start planning your savings today... </div>
                  </CardDescription>
              </CardHeader>
  
              <CardContent>
                  <form>
                      <div className="py-1">
                      <FieldLabel htmlFor="firstname"> First name </FieldLabel>
                      <Input 
                          id = "age"
                          name = "age"
                          className = "p-1 active:border-green-700 "
                          type = "number"
                          onChange = {(e) => handleInputs(e)}
                          value = {inputs.age}
                          placeholder="Enter your firstname"
                        />
                      </div>
  
                      <div className="py-1">
                      <FieldLabel htmlFor="lastname"> Lastname </FieldLabel>
                      <Input 
                          id = "income"
                          name = "income"
                          className = "p-1 active:border-green-700"
                          type = "text"
                          onChange = {(e) => handleInputs(e)}
                          value = {inputs.income}
                          placeholder="Enter your monthly income"
                        />
                      </div>

                    <div className="py-1">
                      <FieldLabel htmlFor="email"> emi </FieldLabel>
                      <Input 
                          id = "emi"
                          name = "emi"
                          className = "p-1 active:border-green-700"
                          type = "text"
                          onChange = {(e) => handleInputs(e)}
                          value = {inputs.emi}
                          placeholder="Enter your emi"
                        />
                      </div>

                      <div className="py-1">
                      <FieldLabel htmlFor="password"> Password </FieldLabel>
                      <Input 
                          id = "dependents"
                          name = "dependents"
                          className = "p-1 active:border-green-700"
                          type = "number"
                          onChange = {(e) => handleInputs(e)}
                          value = {inputs.dependents}
                          placeholder="Enter your dependents"
                        />
                      </div>

                      <div className="py-1">
                      <FieldLabel htmlFor="emp_type"> Confirm Password </FieldLabel>
                      <Input 
                          id = "emp_type"
                          name = "employmentType"
                          className = "p-1 active:border-green-700"
                          type = "text"
                          onChange = {(e) => handleInputs(e)}
                          value = {inputs.employmentType}
                          placeholder="Enter your type pf employment"
                        />
                      </div>

                      <div className="py-1.5">
                      <FieldLabel htmlFor="growth"> Confirm Password </FieldLabel>
                      <Input 
                          id = "growth"
                          name = "growth"
                          className = "p-1 active:border-green-700"
                          type = "text"
                          onChange = {(e) => handleInputs(e)}
                          value = {inputs.growth}
                          placeholder="Enter your type of growth"
                        />
                      </div>

                      <div className="py-1.5">
                      <FieldLabel htmlFor="em_months"> Confirm Password </FieldLabel>
                      <Input 
                          id = "em_months"
                          name = "emeergencyMonths"
                          className = "p-1 active:border-green-700"
                          type = "text"
                          onChange = {(e) => handleInputs(e)}
                          value = {inputs.emergencyMonths}
                          placeholder="Enter your emergency funding months"
                        />
                      </div>

                      <div className="py-1.5">
                      <FieldLabel htmlFor="horizon"> Confirm Password </FieldLabel>
                      <Input 
                          id = "horizon"
                          name = "horizon"
                          className = "p-1 active:border-green-700"
                          type = "text"
                          onChange = {(e) => handleInputs(e)}
                          value = {inputs.horizon}
                          placeholder="Enter your  time to hold before withdrawal"
                        />
                      </div>

                      <div className="py-1.5">
                      <FieldLabel htmlFor="volatile_tol"> Confirm Password </FieldLabel>
                      <Input 
                          id = "volatile_tol"
                          name = "horizon"
                          className = "p-1 active:border-green-700"
                          type = "text"
                          onChange = {(e) => handleInputs(e)}
                          value = {inputs.vlatility}
                          placeholder="Enter your time to hold before withdrawal"
                        />
                      </div>
  
                      <Button
                          className = {`p-2 flex justify-center items-center  bg-green-700 active:bg-green-900 hover:bg-green-800 ${loading && "bg-green-900"}`}
                          onClick = {(e) => handleSubmit(e)}
                      >
                          {
                              loading
                              ? <span className="text-amber-100"> Loading... </span> 
                              : <span> Register </span>
                          }
                      </Button>
                  </form>
              </CardContent>
          </Card>
          </div>
      </div>
    )
}

export default Register