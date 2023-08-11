import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import zxcvbn from 'zxcvbn';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData)
        navigate("/dashboard");
    }

        const [password, setPassword] = useState('');
        
        const handleChange = (event) => {
          setPassword(event.target.value);
        };
        
        const passwordStrength = zxcvbn(password);
        
        let strengthIndicator = '';
        switch (passwordStrength.score) {
          case 0:
            strengthIndicator = 'Very Weak';
            break;
          case 1:
            strengthIndicator = 'Weak';
            break;
          case 2:
            strengthIndicator = 'Moderate';
            break;
          case 3:
            strengthIndicator = 'Strong';
            break;
          case 4:
            strengthIndicator = 'Very Strong';
            break;
          default:
            strengthIndicator = 'Password Strength';
        }

    

  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">

        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <div className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handleChange}
      />
        {password.length > 0 && (
        <p>Password strength: {strengthIndicator}</p>
         )}
      {password.length <= 8 && (
        <p>Password must be greater than 8 characters.</p>
         )}
        </div>

        <label className='w-full relative'>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm






