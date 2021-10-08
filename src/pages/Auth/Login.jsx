import React, {useState} from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import BlueButton from '../../components/Buttons/BlueButton';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <GeneralLayout>
            <div className="flex flex-row items-center content-center w-full min-h-screen">
                <div className="flex flex-col items-center w-full">
                    <p className="text-gray-700 font-semibold text-lg mb-4">Sign in</p>
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

                    <div className="flex flex-col md:w-2/5 w-4/5 my-2 items-center">
                        <BlueButton text={'Register'} />
                    </div>
                    <p className="text-gray-500 dark:text-gray-200 mt-2 text-sm">
                        No registered yet? <Link to="/register">Regsiter here</Link>
                    </p>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Login
