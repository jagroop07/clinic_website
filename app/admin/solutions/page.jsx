"use client"

import { useFieldArray, useForm } from "react-hook-form";
import { FileInput } from "../_components/FileInput";
import { TbTrash } from "react-icons/tb";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Solutions() {
    const [editable, setEditable] = useState([])

    const fetchSolutions = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/solutions')
            const solutions = await response?.data?.solutions
            let newEditable = [...editable]
            newEditable = []
            solutions.map((item) => !newEditable.includes(item._id) && newEditable.push(item._id))
            setEditable(newEditable)
            reset({ solution: solutions })
        } catch (error) {
            console.log(error.message)
        }
    }

    const methods = useForm({
        defaultValues: {
            solution: [{
                solution_title: '',
                solution_description: '',
                button_text: '',
                button_link: '',
                solution_first: {
                    solution_title: '',
                    solution_image: '',
                    solution_points: [''],
                    button_text: '',
                    button_link: ''
                },
                solution_section: [
                    {
                        section_title: '',
                        section_description: '',
                    }
                ]
            }]
        }
    })

    useEffect(() => {
        fetchSolutions()
    }, [])

    const { register, control, handleSubmit, setValue, watch, reset } = methods

    const { append: addSolution, remove: removeSolution, fields: solution } = useFieldArray({
        control,
        name: "solution"
    })

    const handleDelete = async (i) => {
        try {
            await axios.delete('http://localhost:3000/api/solutions/' + editable[i])
            fetchSolutions()
            toast.error('Data Deleted')
        } catch (error) {
            console.log(error.message)
        }
    }

    const onsubmit = async (data, i) => {
        try {
            const solutions = await data.solution[i]
            if (editable[i]) {
                await axios.patch(`http://localhost:3000/api/solutions/${editable[i]}`, solutions)
            }
            else {
                const response = await axios.post('http://localhost:3000/api/solutions', solutions)
                console.log(response)
                editable[i] = await response?.data?.solutionInfo._id
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
                    <button className="bg-blue-800 text-white rounded-xl px-4 py-2" onClick={() => addSolution({
                        solution_title: '',
                        solution_description: '',
                        button_text: '',
                        button_link: '',
                        solution_first: {
                            solution_title: '',
                            solution_image: '',
                            solution_points: [''],
                            button_text: '',
                            button_link: ''
                        },
                        solution_section: [
                            {
                                section_title: '',
                                section_description: '',
                            }
                        ]
                    })}>
                        Add
                    </button>
                </div>
                {solution.map((e, ind) => <form className="bg-white p-7 mt-7 md:w-[50%]" onSubmit={handleSubmit((data) => onsubmit(data, ind))}>
                    <div className="flex justify-end">
                        {editable[ind] ? <button type="button" onClick={() => handleDelete(ind)}>
                            <TbTrash className="text-2xl text-red-600" />
                        </button> :
                            <button type="button" onClick={() => removeSolution(ind)}>
                                <TbTrash className="text-2xl text-red-600" />
                            </button>}
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="solution_title" className="text-md font-semibold">Title</label>
                        <input type="text" className="px-3 py-2 bg-green-50" {...register(`solution[${ind}].solution_title`)} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="solution_description" className="text-md font-semibold">Description</label>
                        <input type="text" className="px-3 py-2 bg-green-50" {...register(`solution[${ind}].solution_description`)} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="button_text" className="text-md font-semibold">Button Text</label>
                        <input type="text" className="px-3 py-2 bg-green-50" {...register(`solution[${ind}].button_text`)} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="button_link" className="text-md font-semibold">Button Link</label>
                        <input type="text" className="px-3 py-2 bg-green-50" {...register(`solution[${ind}].button_link`)} />
                    </div>
                    <div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="solution_first.solution_title" className="text-md font-semibold">Title</label>
                            <input type="text" className="px-3 py-2 bg-green-50" {...register(`solution[${ind}].solution_first.solution_title`)} />
                        </div>
                        <div className="my-3">
                            <FileInput
                                name={`solution[${ind}].solution_first.solution_image`}
                                setValue={setValue}
                                watch={watch} />
                        </div>
                        <div className="bg-gray-100 p-2">
                            <PointFieldArray i={ind} control={control} register={register} setValue={setValue} watch={watch} />
                        </div>
                        <div className="flex flex-col gap-3 mt-3">
                            <label htmlFor="solution_first.button_text" className="text-md font-semibold">Button Text</label>
                            <input type="text" className="px-3 py-2 bg-green-50" {...register(`solution[${ind}].solution_first.button_text`)} />
                        </div>
                        <div className="flex flex-col gap-3 mt-3">
                            <label htmlFor="solution_first.button_link" className="text-md font-semibold">Button Link</label>
                            <input type="text" className="px-3 py-2 bg-green-50" {...register(`solution[${ind}].solution_first.button_link`)} />
                        </div>
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
    const { append: addSection, remove: removeSection, fields: solutionSection } = useFieldArray({
        control,
        name: `solution[${i}].solution_section`
    })

    return (<>
        <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl font-semibold">Sections</h1>
            <button type="button" className="bg-blue-600 text-white font-semibold px-3 py-1 rounded-md" onClick={() => addSection({ section_title: '', section__description: '', section_image: '' })}>
                +
            </button>
        </div>
        {
            solutionSection.map((e, index) => <div className="bg-gray-200 p-2 my-1">
                <div className="justify-end flex">
                    <button type="button" onClick={() => removeSection(index)}>
                        <TbTrash className="text-2xl text-red-600" />
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="section_title" className="text-md font-semibold">Title</label>
                    <input type="text" className="px-3 py-2 bg-green-50" {...register(`solution[${i}].solution_section[${index}].section_title`)} />
                </div>
                <div className="flex flex-col mt-2 gap-2">
                    <label htmlFor="section_description" className="text-md font-semibold">Description</label>
                    <input type="text" className="px-3 py-2 bg-green-50" {...register(`solution[${i}].solution_section[${index}].section_description`)} />
                </div>
            </div>)
        }
    </>
    )
}

const PointFieldArray = ({ control, i, register, setValue, watch }) => {
    const { fields: points, append: addPoints, remove: removePoints } = useFieldArray({
        control,
        name: `solution[${i}].solution_first.solution_points`
    })

    return (
        <>
            <div className="flex justify-between items-center mb-5 rounded-md">
                <h1 className="text-xl font-semibold">Points</h1>
                <button type="button" className="bg-blue-600 text-white font-semibold px-3 py-1 rounded-md" onClick={() => addPoints()}>
                    +
                </button>
            </div>
            {
                points.map((e, index) => <div className="bg-gray-200 px-2 py-3 mt-2">
                    <div className="justify-between flex">
                        <input type="text" className="px-3 py-1 w-full bg-green-50" {...register(`solution[${i}].solution_first.solution_points[${index}]`)} />
                        <button type="button" onClick={() => removePoints(index)}>
                            <TbTrash className="text-2xl text-red-600" />
                        </button>
                    </div>
                </div>)
            }
        </>
    )
}