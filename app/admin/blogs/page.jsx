"use client"

import { useFieldArray, useForm } from "react-hook-form";
import { FileInput } from "../_components/FileInput";
import { TbTrash } from "react-icons/tb";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Solutions() {
    const [editable, setEditable] = useState([])

    const fetchCaseStudies = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/blogs')
            const caseStudies = await response?.data?.caseStudy
            let newEditable = []
            caseStudies.forEach((item) => !newEditable.includes(item._id) && newEditable.push(item._id))
            setEditable(newEditable)
            reset({ caseStudy: caseStudies })
        } catch (error) {
            console.log(error.message)
        }
    }

    const methods = useForm({
        defaultValues: {
            caseStudy: [{
                case_title: '',
                case_coverImage: '',
                case_description: '',
                case_section: [
                    {
                        section_title: '',
                        section_image: '',
                        section_description: ''
                    }
                ]
            }]
        }
    })

    useEffect(() => {
        fetchCaseStudies()
    }, [])

    const { register, control, handleSubmit, setValue, watch, reset } = methods

    const { append: addStudy, remove: removeStudy, fields: caseStudy } = useFieldArray({
        control,
        name: "caseStudy"
    })

    const handleDelete = async (i) => {
        try {
            await axios.delete('http://localhost:3000/api/blogs/' + editable[i])
            fetchCaseStudies()
            toast.error('Data Deleted')
        } catch (error) {
            console.log(error.message)
        }
    }

    const onsubmit = async (data, i) => {
        try {
            const caseStudy = await data.caseStudy[i]
            if (editable[i]) {
                await axios.patch(`http://localhost:3000/api/blogs/${editable[i]}`, caseStudy)
            }
            else {
                const response = await axios.post('http://localhost:3000/api/blogs', caseStudy)
                editable[i] = await response?.data?.caseInfo._id
                setEditable([...editable])
            }
            toast.success("Data Saved")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="relative">
                <div className="flex gap-5 justify-end sticky top-[70px]">
                    <button className="bg-blue-800 text-white rounded-xl px-4 py-2" onClick={() => {addStudy({
                        case_title: '',
                        case_coverImage: '',
                        case_description: '',
                        case_section: [
                            {
                                section_title: '',
                                section_image: '',
                                section_description: ''
                            }
                        ]
                    })
                    toast.success("form added")
                    }}>
                        Add
                    </button>
                </div>
                {caseStudy.map((e, ind) => <form className="bg-white p-7 mt-7 md:w-[50%]" onSubmit={handleSubmit((data) => onsubmit(data, ind))}>
                    <div className="flex justify-end">
                        {editable[ind] ? <button type="button" onClick={() => handleDelete(ind)}>
                            <TbTrash className="text-2xl text-red-600" />
                        </button> :
                            <button type="button" onClick={() => removeStudy(ind)}>
                                <TbTrash className="text-2xl text-red-600" />
                            </button>}
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="case_title" className="text-md font-semibold">Title</label>
                        <input type="text" className="px-3 py-2 bg-green-50" {...register(`caseStudy[${ind}].case_title`)} />
                    </div>
                    <div className="my-3">
                        <FileInput
                            name={`caseStudy[${ind}].case_coverImage`}
                            setValue={setValue}
                            watch={watch} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="case_description" className="text-md font-semibold">Description</label>
                        <input type="text" className="px-3 py-2 bg-green-50" {...register(`caseStudy[${ind}].case_description`)} />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md mt-3">
                        <SectionFieldArray i={ind} control={control} register={register} setValue={setValue} watch={watch} />
                    </div>
                    <button className="bg-blue-700 text-white font-semibold rounded-md my-4 px-6 py-3">{editable[ind] ? "Update" : "Submit"}</button>
                </form>)}
            </div>
        </>
    )
}

const SectionFieldArray = ({ control, i, register, setValue, watch }) => {
    const { append: addSection, remove: removeSection, fields: caseSection } = useFieldArray({
        control,
        name: `caseStudy[${i}].case_section`
    })

    return (<>
        <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl font-semibold">Sections</h1>
            <button type="button" className="bg-blue-600 text-white font-semibold px-3 py-1 rounded-md" onClick={() => addSection({ section_title: '', section__description: '', section_image: '' })}>
                +
            </button>
        </div>
        {
            caseSection.map((e, index) => <div className="p-2 bg-gray-200 mt-2">
                <div className="justify-end flex">
                    <button type="button" onClick={() => removeSection(index)}>
                        <TbTrash className="text-2xl text-red-600" />
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="section_title" className="text-md font-semibold">Title</label>
                    <input type="text" className="px-3 py-2 bg-green-50" {...register(`caseStudy[${i}].case_section[${index}].section_title`)} />
                </div>
                <div className="my-5">
                    <FileInput
                        name={`caseStudy[${i}].case_section[${index}].section_image`}
                        setValue={setValue}
                        watch={watch} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="section_description" className="text-md font-semibold">Description</label>
                    <input type="text" className="px-3 py-2 bg-green-50" {...register(`caseStudy[${i}].case_section[${index}].section_description`)} />
                </div>
            </div>)
        }
    </>
    )
}