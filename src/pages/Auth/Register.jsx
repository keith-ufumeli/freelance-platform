import React, { useEffect, useState } from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import BlueButton from '../../components/Buttons/BlueButton';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register_user_Action } from '../../redux/actions/authActions';
import Error from '../../components/Alerts/Error';
import { useSelector } from 'react-redux';
import Success from '../../components/Alerts/Success';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwor2, setPassword2] = useState("");
    const [username, setUsername] = useState("")
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory()
    const [err, setErr] = useState('')
    const _register = useSelector(state => state.user_register)
    const { loading, message, error } = _register

    const register_user = () => {
        if (password !== passwor2) {
            setErr('Passwords do not match')
        } else {
            dispatch(register_user_Action(email, username, password, passwor2))
        }
    }

    useEffect(() => {
        if (message === 'Register Success!') {
            setTimeout(() => {
                history.push('/login')
            }, 1500);
        }
    }, [message])

    return (
        <GeneralLayout>
            <div className="flex flex-row items-center content-center w-full min-h-screen">
                <div className="flex flex-col items-center w-full">
                    <p className="text-gray-700 font-semibold text-lg mb-4">Create an account</p>
                    <div className="flex flex-col md:w-2/5 w-4/5 my-2">
                        <label
                            htmlFor="email"
                            className="text-gray-700 text-sm mb-1 dark:text-gray-200"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="border-2 dark:bg-gray-700 outline-none dark:border-gray-700 border-blue-800 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col md:w-2/5 w-4/5 my-2">
                        <label
                            htmlFor="username"
                            className="text-gray-700 text-sm mb-1 dark:text-gray-200"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Create a username"
                            className="border-2 dark:bg-gray-700 outline-none dark:border-gray-700 border-blue-800 rounded p-2"
                        />
                    </div>
                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-2">
                        <label
                            htmlFor="password"
                            className="text-gray-700 text-sm mb-1 dark:text-gray-200"
                        >
                            Password
                        </label>
                        <div className="flex border-2 justify-between px-2 dark:bg-gray-700 outline-none dark:border-gray-700 border-blue-800 rounded bg-white flex-row items-center">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="border-2 dark:bg-gray-700 w-full dark:text-gray-400 outline-none dark:border-gray-700 border-none rounded py-2"
                            />
                            {passwordVisible ? (
                                <span
                                    onClick={() => setPasswordVisible(false)}
                                    className="cursor-pointer text-gray-600"
                                >
                                    <EyeOffIcon width={20} height={20} />
                                </span>
                            ) : (
                                <span
                                    onClick={() => setPasswordVisible(true)}
                                    className="cursor-pointer text-gray-600"
                                >
                                    <EyeIcon width={20} height={20} />
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col md:w-2/5 w-4/5 my-2">
                        <label
                            htmlFor="password2"
                            className="text-gray-700 text-sm mb-1 dark:text-gray-200"
                        >
                            Confirm Password
                        </label>
                        <div className="flex border-2 justify-between px-2 dark:bg-gray-700 outline-none dark:border-gray-700 border-blue-800 rounded bg-white flex-row items-center">
                            <input
                                type={passwordVisible2 ? "text" : "password"}
                                id="password"
                                onChange={(e) => setPassword2(e.target.value)}
                                placeholder="Confirm password"
                                className="border-2 dark:bg-gray-700 w-full dark:text-gray-400 outline-none dark:border-gray-700 border-none rounded py-2"
                            />
                            {passwordVisible2 ? (
                                <span
                                    onClick={() => setPasswordVisible2(false)}
                                    className="cursor-pointer text-gray-600"
                                >
                                    <EyeOffIcon width={20} height={20} />
                                </span>
                            ) : (
                                <span
                                    onClick={() => setPasswordVisible2(true)}
                                    className="cursor-pointer text-gray-600"
                                >
                                    <EyeIcon width={20} height={20} />
                                </span>
                            )}
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                        By signing up you agree to our terms and conditions of use
                    </p>
                    <div className="flex flex-col md:w-2/5 w-4/5 my-2">
                        {err && <Error text={err} />}
                        {error && <Error text={error} />}
                        {message && <Success text={message} />}
                    </div>
                    <div className="flex flex-col md:w-2/5 w-4/5 my-2 items-center">
                        <BlueButton text={'Register'} onClick={register_user} loading={loading} />
                    </div>
                    <p className="text-gray-500 dark:text-gray-200 mt-2 text-sm">
                        Already registered? <Link to="/login">Sign In here</Link>
                    </p>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Register
