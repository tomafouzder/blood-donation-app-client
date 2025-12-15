import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';



const Login = () => {
    const { setUser, userSignIn } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [error, setError] = useState("")
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            });
    }


    return (
        <div className='bg-gray-600' >

            <div className="hero text-white py-24 min-h-screen shadow-2xl ">
                <div className="hero-content  flex-col lg:flex-row gap-30">
                    <div className="text-center lg:text-left">
                       
                        <h1 className="text-5xl font-bold text-center">Join EcoTrack</h1>
                        <p className="py-6 text-center">
                            Get started with our app, just create an account and enjoy the experience.
                        </p>
                    </div>
                    <div className="card border-2 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-4xl py-1 font-bold text-center">Login Now</h1>

                            <form onSubmit={handleLogIn}>
                                <fieldset className="fieldset">
                                    {/* Email */}
                                    <label className="label  font-semibold text-white text-lg ">Email</label>
                                    <input type="email"
                                        name='email'
                                        className="input bg-gray-400   "
                                        required
                                        placeholder="Email" />

                                    {/* Password */}
                                    <div className='relative'>
                                        <label className="label  font-semibold text-lg text-white pb-2">Password</label>
                                        <input type={show ? "text" : "password"}
                                            name='password'
                                            className="input bg-gray-400  "
                                            required
                                            placeholder="Password" />
                                        <span onClick={() => setShow(!show)} className='absolute right-6 top-12 cursor-pointer z-50'>
                                            {show ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                    </div>

                                    {/* forgot password */}
                                    <div className='text-sm font-semibold pt-1 text-blue-400 '>
                                        <Link to="/forgot-password" className="link underline">Forgot password?</Link>
                                    </div>
                                    {error && <p className='text-red-500'>{error}</p>}

                                    {/*register button */}
                                    <button
                                        type='submit'
                                        className="btn bg-gray-700 text-white text-lg font-bold mt-4">Login</button>

                                    {/* -------------------- */}

                                    <div className='text-sm font-semibold pt-1'>
                                        <p>Don't have an account? Please {' '}
                                            <Link to="/register" className='  text-sm font-bold text-blue-400 underline'>Register</Link>
                                        </p>
                                    </div>

                                  
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;




