"use client"

import { Camera } from "@mui/icons-material"
import axios from "axios"
import { useState } from "react"
import { BiPencil } from "react-icons/bi"
import { TbTrash } from "react-icons/tb"

export const FileInput = ({name, watch, setValue}) => {

    const image = watch(name)

    const handleupload = async (e) => {
        const files = e.target.files

        if (files.length === 0) return;

        const file = files[0]

        const formData = new FormData()
        formData.append('file', file)

        const response = await axios.post('http://localhost:3000/api/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        setValue(name, response?.data?.detials?.publicPath)
    }


    return (
        <>
            {image ? image.split('.')[1] === "pdf" ? <div className="w-[200px] h-[150px] flex justify-center items-center font-semibold rounded-md hover:bg-gray-400 bg-gray-300">Uploaded successfully</div> : <div className="w-[200px] h-[150px] relative group rounded-md hover:opacity-80 overflow-hidden">
                <img className="h-full w-full object-center object-cover" src={image} alt="..." />
                <div className="absolute inset-0 hidden group-hover:flex justify-center items-center gap-5 z-10">
                    <label htmlFor={`image-${name}`}>
                        <BiPencil className="text-red-500 text-2xl" />
                    </label>
                    <TbTrash className="text-blue-700 text-2xl" />
                </div>
            </div>

                : <div>
                    <label htmlFor={`image-${name}`} className="w-[200px] h-[150px] cursor-pointer hover:bg-gray-400 rounded-md relative flex flex-col bg-gray-300 items-center justify-center gap-4"><Camera />  Upload Image</label>
                </div>}

            <input hidden type="file" id={`image-${name}`} onChange={handleupload} />
        </>
    )
}