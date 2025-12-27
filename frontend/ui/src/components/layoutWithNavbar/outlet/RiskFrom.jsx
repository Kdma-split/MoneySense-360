import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { Button } from "../../ui/button"
// import axios from "axios"

export default function RiskForm() {
  const formData = { age: "", income: "", emiBurden: "", dependants: "", jobType: "", growthPref: "", emergencyFundMonths: "", horizon: "", volatilityTolerance: "" }
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
    const {age, income, emiBurden, dependants, jobType, growthPref, emergencyFundMonths, horizon, volatilityTolerance} = inputs
    if (!email || !password) return 
    const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/
    // if (!emailRegex.test(email)) {
    //     setError({
    //         flag: true,
    //         message: "Please enter a proper email..."
    //     })
    //     console.log("wrong email format.")
    //     setInputs({...inputs, [name]: ""})
    //     return
    // }
    // else if (password.length < 8) {
    //     setError({
    //         flag: true,
    //         message: "Plassword must be of atleast 8 charecters..."
    //     })
    //     setInputs({...inputs, [name]: ""})
    //     console.log("wrong password format.")
    //     return 
    // }
    // else if (!(password == confirmPassword)) {
    //     setError({
    //         flag: true,
    //         message: "Plassword and confirm password must be the same..."
    //     })
    //     setInputs({...inputs, [name]: ""})
    //     console.log("passwords mismatch.")
    //     return 
    // }
    console.log("ALL TESTS PASSED...")
    // setSubmit(true)
    setLoading(true)
    console.log("QUERYING BACKEND ENDPOINT")
    await axios.post(`http://localhost:8000/api/v1/forms/risk-apetite`, 
        {
          "emi": emiBurden,
          "volatility": volatilityTolerance,
          "emergency_months": emergencyFundMonths,
          "growth": growthPref,
          "job_type": jobType,
          income,
          age,
          horizon,
          dependants
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
            Risk
          </CardTitle>
          <CardDescription className="text-emerald-700">
            Start planning your savings today
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            
            <div>
              <FieldLabel htmlFor="age">Age</FieldLabel>
              <Input
                id="age"
                name="age"
                onChange={handleInputs}
                value={inputs.age}
                placeholder="Enter your Age"
              />
            </div>

            <div>
              <FieldLabel htmlFor="income">Income</FieldLabel>
              <Input
                id="income"
                name="income"
                onChange={handleInputs}
                value={inputs.income}
                placeholder="Enter your Income"
              />
            </div>

            <div>
              <FieldLabel htmlFor="emiBurden">EMI Burden</FieldLabel>
              <Input
                id="emiBurden"
                name="emiBurden"
                onChange={handleInputs}
                value={inputs.emiBurden}
                placeholder="Enter your EMI Burden"
              />
            </div>

            <div>
              <FieldLabel htmlFor="dependants">Dependants</FieldLabel>
              <Input
                id="dependants"
                name="dependants"
                type="number"
                onChange={handleInputs}
                value={inputs.dependants}
              />
            </div>

            <div>
              <FieldLabel htmlFor="jobType">Employment Type</FieldLabel>
              <Input
                id="jobType"
                name="jobType"
                type="text"
                onChange={handleInputs}
                value={inputs.jobType}
              />
            </div>

            <div>
              <FieldLabel htmlFor="growthPreference">Growth Preference</FieldLabel>
              <Input
                id="growthPreference"
                name="growthPref"
                type="text"
                onChange={handleInputs}
                value={inputs.growthPref}
              />
            </div>   

            <div>
              <FieldLabel htmlFor="emergencyFundMonths">High Expenditure Months</FieldLabel>
              <Input
                id="emergencyFundMonths"
                name="emergencyFundMonths"
                type="text"
                onChange={handleInputs}
                value={inputs.emergencyFundMonths}
              />
            </div>         

            <div>
              <FieldLabel htmlFor="horizon">Horizon (in years)</FieldLabel>
              <Input
                id="horizon"
                name="horizon"
                type="number"
                onChange={handleInputs}
                value={inputs.horizon}
              />
            </div>

            <div>
              <FieldLabel htmlFor="volatilityTolerance">Volatility Tolerance</FieldLabel>
              <Input
                id="volatilityTolerance"
                name="volatilityTolerance"
                type="number"
                onChange={handleInputs}
                value={inputs.volatilityTolerance}
              />
            </div>

            <Button
              // type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-lg py-6 rounded-xl"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Loading..." : "Analyze"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
