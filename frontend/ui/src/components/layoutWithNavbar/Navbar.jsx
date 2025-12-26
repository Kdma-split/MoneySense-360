import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context.jsx'
 
function Navbar() {
    const {user} = UserContext()

  return (
    <div className='bg-green-500 w-screen p-3'>
        <div className="p-3 flex justify-between">
            <div className="w-1/2">
                <span>
                    Logo
                </span>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <div className="p-1 w-1/2"></div>
                <div className='w-1/2 flex justify-center items-center'>
                {
                    user 
                    ? (
                    <div className="p-1">
                        <Button className='bg-green-600'>
                            <Link to="/dashboard"> Dashboard </Link>
                        </Button>
                    </div>
                    ) : (
                    <div className='flex justify-center items-center ml-10'>
                    <div className="p-1 mr-5 h-full">
                        <Button>
                            <Link to="/register"> Sign up </Link>
                        </Button>
                    </div>
                    <div className="p-1">
                        <Button className='bg-green-600'>
                            <Link to='/login'> Login </Link>
                        </Button>
                    </div>
                    </div>
                    )
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar