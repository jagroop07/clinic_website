"use client"

import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const DemoForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const formhandle = async(data) => {
        try {
            await axios.post('http://localhost:3000/api/demo', data)
            toast.success("Demo Scheduled")
            reset()
        } catch (error) {
            toast.error("something went wrong")
            console.log({error: error.message})
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(formhandle)} className="grid sm:grid-cols-2 grid-cols-1 gap-6 text-black">
                <div className="flex flex-col">
                    <label htmlFor="company" className="font-semibold mb-3 text-gray-600">Company name</label>
                    <input className="py-2 w-[100%] px-3 rounded-lg bg-slate-100 outline-none" type="text" {...register("company", {required: "company name is required*"})}/>
                    <div className="text-red-500 my-1">
                    {errors.company && errors.company.message}
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="specialty" className="font-semibold mb-3 text-gray-600">Specialty</label>
                    <select className="py-2 px-3 rounded-lg bg-slate-100 outline-none" {...register("specialty", {required: "specialty is required*"})}>
                        <option value="">Please Select...</option>
                        <option value="ASC">Ambulatory Surgery Center</option>
                        <option value="Cardio">Cardiology</option>
                        <option value="DME">Durable Medical Equipment Provider</option>
                        <option value="ED">Emergency Medicine</option>
                        <option value="EC">Eye Care Provider</option>
                        <option value="HSP">Hospital System</option>
                        <option value="MSP">Multi Specialty Practice</option>
                        <option value="Neuro">Neurology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="text-red-500 my-1">
                    {errors.specialty && errors.specialty.message}
                    </div>
                </div>
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
                <div className="flex flex-col">
                    <label className="font-semibold mb-3 text-gray-600" htmlFor="phone_number">Phone number</label>
                    <input type="number" className="py-2 px-3 rounded-lg bg-slate-100 outline-none" {...register("phone_number", {required: "phone number is required*"})}/>
                    <div className="text-red-500 my-1">
                    {errors.phone_number && errors.phone_number.message}
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
                    <label className="font-semibold mb-3 text-gray-600" htmlFor="providers_number">Number of Providers in Practice</label>
                    <select className="py-2 px-3 rounded-lg bg-slate-100 outline-none" {...register("providers_number", {required: "number of providers is required*"})}>
                        <option value="">Please Select...</option>
                        <option value="1-10">1-10</option>
                        <option value="10-25">10-25</option>
                        <option value="25-50">25-50</option>
                        <option value="50 or more">50 or more</option>
                    </select>
                    <div className="text-red-500 my-1">
                    {errors.providers_number && errors.providers_number.message}
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold mb-3 text-gray-600" htmlFor="locations_number">Number of Locations in Practice</label>
                    <select className="py-2 px-3 rounded-lg bg-slate-100 outline-none" {...register("locations_number", {required: "number of locations is required*"})}>
                        <option value="">Please Select...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                    </select>
                    <div className="text-red-500 my-1">
                    {errors.locations_number && errors.locations_number.message}
                    </div>
                </div>
                <div className="sm:col-span-2 flex flex-col">
                    <label className="font-semibold mb-3 text-gray-600" htmlFor="source">Where did you hear about us?</label>
                    <input type="text" className="py-2 px-3 rounded-lg bg-slate-100 outline-none" {...register("source")}/>
                </div>
                <div>
                    <button type="submit" className="bg-blue-950 px-7 py-2 text-white">Submit</button>
                </div>
            </form>
        </>
    )
}