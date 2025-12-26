import React, { useState, useEffect, Children } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext, userContext } from '../contexts/user.context.js'

function UserAuth() {
    const { user } = UserContext()
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (user) setLoading(false)
        // if (!token || !user) {
        //     navigate('/login')
        // }
    }, [])

    if (loading) 
        return <div>Loading...</div>
    return (
        <> {Children} </>
  )
}

export default UserAuth