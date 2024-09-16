"use client"

import axios from "axios";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const formhandle = async(data) => {
        try {
            console.log(data)
            const contactInfo = await axios.post('http://localhost:3000/api/contact', data)
            console.log(contactInfo.data)
            reset()
        } catch (error) {
            console.log({error: error.message})
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(formhandle)} className="grid sm:grid-cols-2 grid-cols-1 gap-3 text-black">
                <div className="flex flex-col">
                    <label className="font-semibold mb-3 text-gray-600" htmlFor="first_name">First name</label>
                    <input type="text" className="py-2 px-3 rounded-lg bg-slate-100 outline-none" {...register("first_name", {required: "name is required*"})}/>
                    <div className="text-red-500 my-1">
                    {errors.first_name && errors.first_name.message}
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold mb-3 text-gray-600" htmlFor="last_name">Last name</label>
                    <input type="text" className="py-2 px-3 rounded-lg bg-slate-100 outline-none" {...register("last_name")}/>
                </div>
                <div className="sm:col-span-2 flex flex-col">
                    <label htmlFor="company" className="font-semibold mb-3 text-gray-600">Company name</label>
                    <input className="py-2 w-[100%] px-3 rounded-lg bg-slate-100 outline-none" type="text" {...register("company", {required: "company name is required*"})}/>
                    <div className="text-red-500 my-1">
                    {errors.company && errors.company.message}
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold mb-3 text-gray-600" htmlFor="email">Email</label>
                    <input type="email" className="py-2 px-3 rounded-lg bg-slate-100 outline-none" {...register("email", {required: "email is required*"})}/>
                    <div className="text-red-500 my-1">
                    {errors.email && errors.email.message}
                    </div>
                </div>                
                <div className="flex flex-col">
                    <label className="font-semibold mb-3 text-gray-600" htmlFor="phone_number">Phone number</label>
                    <input type="number" className="py-2 px-3 rounded-lg bg-slate-100 outline-none" {...register("phone_number", {required: "phone number is required*"})}/>
                    <div className="text-red-500 my-1">
                    {errors.phone_number && errors.phone_number.message}
                    </div>
                </div>
                <div className="sm:col-span-2 flex flex-col">
                    <label className="font-semibold mb-3 text-gray-600" htmlFor="source">Message</label>
                    <textarea type="text" className="py-2 px-3 rounded-lg h-[100px] bg-slate-100 outline-none" {...register("message")}/>
                </div>
                <div>
                    <button type="submit" className="bg-blue-950 px-7 py-2 my-3 text-white">Submit</button>
                </div>
            </form>
        </>
    )
}