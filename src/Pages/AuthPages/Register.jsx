import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';


const Register = () => {
    const { user, createUser, setUser, updateUserProfile } = useContext(AuthContext)
    const [upazilas, setUpazilas] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState('');
    const [upazila, setUpazila] = useState('');
    const [show, setShow] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/upazila.json')
            .then(res => {
                setUpazilas(res.data.upazilas)
            })

        axios.get('/district.json')
            .then(res => {

                setDistricts(res.data.districts)
            })
    }, [])

    useEffect(() => {
        if (user) { navigate("/"); }
    }, [user, navigate])


    // Password Validation Function
    const validatePassword = (password) => {
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        const special = /[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/]/;

        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        if (!uppercase.test(password)) {
            return "Password must contain at least 1 uppercase letter.";
        }
        if (!lowercase.test(password)) {
            return "Password must contain at least 1 lowercase letter.";
        }
        if (!special.test(password)) {
            return "Password must contain at least 1 special character.";
        }

        return "";
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo
        const file = photo.files[0]
        const password = form.password.value;
        const bloodGroup = form.bloodGroup.value



        // Prevent submit if password invalid
        const errorMsg = validatePassword(password);
        if (errorMsg) {
            setPasswordError(errorMsg);
            return;
        }


        const res = await axios.post(`https://api.imgbb.com/1/upload?key=ab104d4189c11316e71d96daa601e854`, { image: file }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        const mainPhotoUrl = res.data.data.display_url;

        const formData = {
            name,
            email,
            mainPhotoUrl,
            bloodGroup,
            password,
            district,
            upazila,
        }

        if (res.data.success == true) {
            createUser(email, password)
                .then((result) => {
                    const user = result.user;
                    updateUserProfile({ displayName: name, photoURL: mainPhotoUrl })
                        .then(() => {
                            setUser({ ...user, displayName: name, photoURL: mainPhotoUrl });
                            axios.post('http://localhost:5000/users', formData)
                                .then(res => {
                                    console.log(res.data)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                            navigate("/");
                            console.log(user)
                        })
                        .catch((error) => {
                            console.log(error);
                            setUser(user);
                        })
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }

    };



    return (
        <div className='bg-gray-600'>

            <div className="hero text-white py-24 min-h-screen  shadow-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse gap-30">
                    <div className="text-center lg:text-left">

                        <h1 className="text-5xl font-bold text-center">Join EcoTrack</h1>
                        <p className="py-6 text-center">
                            Get started with our app, just create an account and enjoy the experience.
                        </p>
                    </div>
                    <div className="card w-full  border-2 max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body ">
                            <h1 className="text-4xl py-1 font-bold text-center">Register Now</h1>
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    {/* Name */}
                                    <label className="label font-semibold  ">Name</label>
                                    <input type="text"
                                        name='name'
                                        className="input bg-gray-400 "
                                        required
                                        placeholder="Name" />

                                    {/* Email */}
                                    <label className="label font-semibold ">Email</label>
                                    <input type="email"
                                        name='email'
                                        className="input bg-gray-400  "
                                        required
                                        placeholder="Email" />

                                    {/* Photo Url */}
                                    <label className="label font-semibold ">Photo URL</label>
                                    <input type="file"
                                        name='photo'
                                        className="input bg-gray-400   "
                                        required
                                        placeholder="Choose file" />


                                    {/* blood group */}
                                    <label className="label font-semibold "> Select Blood Group</label>
                                    <select name='bloodGroup' defaultValue="Select Blood Group" className="select bg-gray-400">
                                        <option value="">-- Select Blood Group --</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>


                                    {/* districts */}
                                    <label className="label font-semibold "> Select Your District</label>
                                    <select value={district} onChange={(e) => setDistrict(e.target.value)} className="select bg-gray-400">
                                        <option value="">Select Your District</option>
                                        {
                                            districts?.map(d => <option key={d.id} value={d?.name}>{d?.name}</option>)
                                        }
                                    </select>

                                    {/* upazila */}
                                    <label className="label font-semibold "> Select Your Upazila </label>
                                    <select value={upazila} onChange={(e) => setUpazila(e.target.value)} className="select bg-gray-400">
                                        <option value="">Select Your Upazila</option>
                                        {
                                            upazilas?.map(u => <option key={u.id} value={u?.name}>{u?.name}</option>)
                                        }
                                    </select>

                                    {/* Password */}
                                    <div className='relative'>
                                        <label className="label font-semibold pb-2">Password</label>
                                        <input type={show ? "text" : "password"}
                                            name='password'
                                            className="input bg-gray-400 "
                                            required
                                            placeholder="Password"
                                            onChange={(e) => {
                                                const error = validatePassword(e.target.value);
                                                setPasswordError(error);
                                            }}
                                        />
                                        <span onClick={() => setShow(!show)} className='absolute right-6 top-10 cursor-pointer z-50'>
                                            {show ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                        {/* Inline Password Error */}
                                        {passwordError && (
                                            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                                        )}
                                    </div>

                                    {/*register button */}

                                    <button
                                        type='submit'
                                        className="btn bg-gray-700 text-white text-lg font-bold mt-4">Register</button>



                                    <div className='text-sm font-semibold pt-1'>
                                        <p>Have an account? Please {' '}
                                            <Link to="/login" className=' text-sm font-bold text-blue-500 underline'>Login</Link>
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

export default Register;