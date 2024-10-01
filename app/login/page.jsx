"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

const page = () => {
    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            email: "admin@gmail.com",
            password: "1234"
        }
    })

    const router = useRouter();


    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/login', data)
            console.log({ response })
            if (response.data.status == "success") {
                toast.success('Login Successfull', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                window.localStorage.setItem("admin_token", response.data.data.token)
                router.push('/admin')
            }
        } catch (error) {
            console.log({ error });

            toast.error('Please verify your credentials', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
    }


    return (
        <>
            <section className="bg-gray-50 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
                    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input {...register("email")} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      " placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input {...register("password")} type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      " required />
                                </div>
                                {/* <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300    " required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                                </div> */}
                                <button type="submit" className="w-full bg-primary text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   ">Sign in</button>
                                {/* <p className="text-sm font-light text-gray-500 ">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline ">Sign up</a>
                                </p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page