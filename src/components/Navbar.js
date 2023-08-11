import React from 'react'
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/"> 
            <img src="data:image/jpeg;base64,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" alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='text-richblack-100 flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
